import express from "express";
import { StatusCodes } from "http-status-codes";

const Router = express.Router();

Router.route("/")
  .get((req, res) => {
    res.status(StatusCodes.OK).json({ mes: "get list board" });
  })
  .post((req, res) => {
    res.status(StatusCodes.CREATED).json({ mes: "create list board" });
  });

export const boradRoutes = Router;
