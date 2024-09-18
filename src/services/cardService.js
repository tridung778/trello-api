import { cardModel } from "~/models/cardModel";

const createNew = async (data) => {
  try {
    const newCard = {
      ...data,
    };

    const createdCard = await cardModel.createNew(newCard);
    const getNewCard = await cardModel.findOneById(createdCard.insertedId);
    return getNewCard;
  } catch (error) {
    throw error;
  }
};

export const cardService = {
  createNew,
};
