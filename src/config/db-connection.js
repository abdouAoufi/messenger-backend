import mongoose from "mongoose";

const DAYABASE_URL = "mongodb://127.0.0.1:27017/messenger";

export const connectionDB = () => {
  return mongoose.connect(DAYABASE_URL);
};
