import mongoose, { Schema, Document } from "mongoose";

interface Category extends Document {
  name: string;
  description?: string;
  products: string[];
}

const CategorySchema: Schema = new Schema(
  {
    name: { type: String },
    description: { type: String },
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
  },
  { timestamps: true }
);

export const Category = mongoose.model<Category>("Category", CategorySchema);
