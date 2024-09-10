import mongoose, { Schema, Document } from "mongoose";

interface Product extends Document {
  name: string;
  description: string;
  amount: number;
  price: number;
  isActive: boolean;
  image: string;
  ownerId: string;
}

const ProductSchema: Schema = new Schema(
  {
    name: { type: String },
    description: { type: String },
    amout: { type: Number },
    price: { type: Number },
    isActive: { type: Boolean },
    image: { type: String },
    ownerId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
  }
);

export const Product = mongoose.model<Product>("Product", ProductSchema);
