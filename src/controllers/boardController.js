import { StatusCodes } from "http-status-codes";
import ApiError from "~/utils/ApiError";

const createNew = async (req, res, next) => {
  try {
    // res.status(StatusCodes.CREATED).json({ mes: "Controller: create a board" });
    throw new ApiError(StatusCodes.BAD_GATEWAY, "Test error");
  } catch (error) {
    next(error);
    // res
    //   .status(StatusCodes.INTERNAL_SERVER_ERROR)
    //   .json({ errors: error.message });
  }
};

export const boardController = { createNew };
