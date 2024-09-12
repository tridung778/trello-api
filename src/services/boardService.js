import { boardModel } from "~/models/boardModel";
import { slugify } from "~/utils/formatters";

/* eslint-disable no-useless-catch */
const createNew = async (data) => {
  try {
    const newBoard = {
      ...data,
      slug: slugify(data.title),
    };

    const createdBoard = boardModel.createNew(newBoard);

    const getNewBoard = await boardModel.findOneById(createdBoard.insertedId);
    return getNewBoard;
  } catch (error) {
    throw error;
  }
};

export const boardService = {
  createNew,
};
