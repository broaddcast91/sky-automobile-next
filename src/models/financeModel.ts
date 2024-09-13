import mongoose, { Document, Schema, Model } from "mongoose";

// Define a TypeScript interface that extends mongoose.Document
interface IFinance {
  name: string;
  phone: string;
  email: string;
  model: string;
  city: string;
  state: string;
  loanAmount: number;
  loanTenure: number;
  time: string;
  date: string;
  isDeleted?: boolean;
  deletedAt?: Date;
}

// Define the schema with type annotations
const financeSchema: Schema = new Schema<IFinance>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    model: {
      type: String,
      required: true,
      trim: true,
    },
    city: {
      type: String,
      required: true,
      trim: true,
    },
    state: {
      type: String,
      required: true,
      trim: true,
    },
    loanAmount: {
      type: Number,
      required: true,
    },
    loanTenure: {
      type: Number,
      required: true,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    deletedAt: {
      type: Date,
    },
    time: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// Create the model with the interface
const Finance: Model<IFinance> =
  mongoose.models.Finance || mongoose.model<IFinance>("Finance", financeSchema);

export default Finance;
