import { slugify } from "~/utils/formatters";

/* eslint-disable no-useless-catch */
const createNew = async (data) => {
  try {
    const newBoard = {
      ...data,
      slug: slugify(data.title),
    };

    return newBoard;
  } catch (error) {
    throw error;
  }
};

export const boardService = {
  createNew,
};
