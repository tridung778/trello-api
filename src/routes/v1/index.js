import express from "express";
import { StatusCodes } from "http-status-codes";
import { boradRoutes } from "./boardRoutes";

const Router = express.Router();

Router.get("/status", (req, res) => {
  res.status(StatusCodes.OK).json({ mes: "API V1" });
});

Router.use("/boards", boradRoutes);

export const APIs_V1 = Router;
