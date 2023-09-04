import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  name: {
    type: string,
    required: true,
    unique: true,
  },
  slug: {
    type: String,
    lowercase: true,
  },
});

export default mongoose.model("Category", categorySchema);
