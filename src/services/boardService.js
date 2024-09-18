import { StatusCodes } from "http-status-codes";
import { cloneDeep } from "lodash";
import { boardModel } from "~/models/boardModel";
import ApiError from "~/utils/ApiError";
import { slugify } from "~/utils/formatters";

/* eslint-disable no-useless-catch */
const createNew = async (data) => {
  try {
    const newBoard = {
      ...data,
      slug: slugify(data.title),
    };

    const createdBoard = await boardModel.createNew(newBoard);
    const getNewBoard = await boardModel.findOneById(createdBoard.insertedId);
    return getNewBoard;
  } catch (error) {
    throw error;
  }
};

const getDetails = async (boardId) => {
  try {
    const board = await boardModel.getDetails(boardId);
    if (!board) {
      throw new ApiError(StatusCodes.NOT_FOUND, "Board not found");
    }

    const resBoard = cloneDeep(board);
    resBoard.columns.forEach((column) => {
      column.cards = resBoard.cards.filter((card) =>
        card.columnId.equals(column._id)
      );
    });

    delete resBoard.cards;

    return resBoard;
  } catch (error) {
    throw error;
  }
};

const update = async (boardId, resBody) => {
  try {
    const updateData = {
      ...resBody,
      updatedAt: Date.now(),
    };
    const board = await boardModel.update(boardId, updateData);

    return board;
  } catch (error) {
    throw error;
  }
};

export const boardService = {
  createNew,
  getDetails,
  update,
};
