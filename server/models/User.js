import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  mobile: {
    type: String,
  },
  city: {
    type: String,
  },
  option: {
    type: String,
  },
  query: {
    type: String,
  },
});

export default mongoose.model("User", UserSchema);