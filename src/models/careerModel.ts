import mongoose, { Document, Schema, Model } from "mongoose";

// Define a TypeScript interface that extends mongoose.Document
interface ICareer {
  name: string;
  phone: string;
  email: string;
  designation: string;
  noticePeriod: string;
  experience: string;
  currentCTC: string;
  expectedCTC: string;
  state: string;

  time: string;
  date: string;
  isDeleted?: boolean;
  deletedAt?: Date;
}

// Define the schema with type annotations
const careerSchema: Schema = new Schema<ICareer>(
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
    designation: {
      type: String,
      required: true,
      trim: true,
    },
    noticePeriod: {
      type: String,

      trim: true,
    },
    experience: {
      type: String,
      required: true,
      trim: true,
    },
    currentCTC: {
      type: String,
      required: true,
      trim: true,
    },
    expectedCTC: {
      type: String,
      required: true,
      trim: true,
    },
    state: {
      type: String,
      required: true,
      trim: true,
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
const Career: Model<ICareer> =
  mongoose.models.Career ||
  mongoose.model<ICareer>("Career", careerSchema);

export default Career;
