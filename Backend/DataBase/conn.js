import mongoose, { Connection } from "mongoose";
import { config } from "dotenv";
config();

const { DB_URL } = process.env;
export default async function connect() {

  mongoose.set("strictQuery", true);

  const db = await mongoose.connect(DB_URL);

  return db.connection;
}