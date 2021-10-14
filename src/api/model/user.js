import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: "String", required: true },
  occupation: { type: "String", required: false },
});

export default mongoose.model("User", userSchema);
