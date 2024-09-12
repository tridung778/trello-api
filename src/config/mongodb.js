import { MongoClient, ServerApiVersion } from "mongodb";
import { env } from "./environment";
const MONGODB_URL = env.MONGODB_URI;

const DATABASE_NAME = env.DATABASE_NAME;

let trelloDatabaseInstance = null;

const mongoClientInstance = new MongoClient(MONGODB_URL, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export const CONNECT_DB = async () => {
  await mongoClientInstance.connect();

  trelloDatabaseInstance = mongoClientInstance.db(DATABASE_NAME);
};

export const CLOSE_DB = async () => {
  await mongoClientInstance.close();
};

export const GET_DB = () => {
  if (!trelloDatabaseInstance) throw new Error("Must connect database first!");

  return trelloDatabaseInstance;
};
