/* eslint-disable no-console */
import express from "express";
import exitHook from "async-exit-hook";
import cors from "cors";
import { CLOSE_DB, CONNECT_DB } from "./config/mongodb";
import { env } from "./config/environment";
import { APIs_V1 } from "./routes/v1";
import { errorHandlingMiddleware } from "./middlewares/errorHandlingMiddleware";
import { corsOptions } from "./config/cors";

const START_SERVER = () => {
  const app = express();

  app.use(cors(corsOptions));

  const hostname = env.APP_HOST;
  const port = env.APP_PORT;

  app.use(express.json());

  app.use("/v1", APIs_V1);

  app.use(errorHandlingMiddleware);

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
