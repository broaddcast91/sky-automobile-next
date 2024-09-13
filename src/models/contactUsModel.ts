import mongoose, { Document, Schema, Model } from "mongoose";

// Define a TypeScript interface that extends mongoose.Document
interface IContactUs {
  name: string;
  phone: string;
  email: string;
  subject: string;
  address: string;
  message?: string;
  state: string;

  time: string;
  date: string;
  isDeleted?: boolean;
  deletedAt?: Date;
}

// Define the schema with type annotations
const contactUsSchema: Schema = new Schema<IContactUs>(
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
    subject: {
      type: String,
      required: true,
      trim: true,
    },
    message: {
      type: String,

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
const ContactUs: Model<IContactUs> =
  mongoose.models.ContactUs ||
  mongoose.model<IContactUs>("ContactUs", contactUsSchema);

export default ContactUs;
