import { columnModel } from "~/models/columnModel";

const createNew = async (data) => {
  try {
    const newColumn = {
      ...data,
    };

    const createdColumn = await columnModel.createNew(newColumn);
    const getNewColumn = await columnModel.findOneById(
      createdColumn.insertedId
    );
    return getNewColumn;
  } catch (error) {
    throw error;
  }
};

export const columnService = {
  createNew,
};
