import { StatusCodes } from "http-status-codes";

const createNew = async (req, res, next) => {
  try {
    res.status(StatusCodes.CREATED).json({ mes: "Controller: create a board" });
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ errors: error.message });
  }
};

export const boardController = { createNew };
