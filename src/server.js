/* eslint-disable no-console */
import express from "express";
import { CLOSE_DB, CONNECT_DB, GET_DB } from "./config/mongodb";
import exitHook from "async-exit-hook";
import { env } from "./config/environment";

const START_SERVER = () => {
  const app = express();

  const hostname = env.APP_HOST;
  const port = env.APP_PORT;

  app.get("/", async (req, res) => {
    const listColec = await GET_DB().listCollections().toArray();
    res.end(JSON.stringify(listColec));
  });

  app.listen(port, hostname, () => {
    console.log(
      `Hello ${env.AUTHOR}, I am running at http://${hostname}:${port}/`
    );
  });
  exitHook(() => {
    CLOSE_DB();
  });
};

CONNECT_DB()
  .then(() => console.log("connected MongoDB"))
  .then(() => START_SERVER())
  .catch((error) => {
    console.error(error);
    process.exit(0);
  });
