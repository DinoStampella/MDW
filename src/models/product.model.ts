import mongoose, { Schema, Document } from "mongoose";

interface Product extends Document {
  name: string;
  description: string;
  amount: number;
  price: number;
  isActive: boolean;
  ownerId: string;
  image: string;
}

const ProductSchema: Schema = new Schema(
  {
    name: { type: String },
    description: { type: String },
    amount: { type: Number },
    price: { type: Number },
    isActive: { type: Boolean },
    ownerId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    image: { type: String },
  },
  { timestamps: true }
);

export const Product = mongoose.model<Product>("Product", ProductSchema);
