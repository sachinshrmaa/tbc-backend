import mongoose, { Schema } from "mongoose";

const cohortSchema = new Schema(
  {
    slug: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: [true, "Cohort name is required"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Description is required"],
      trim: true,
    },
    thumbnail: {
      type: String,
      required: [true, "Thumbnail is required"],
    },
    price: {
      type: Number,
      required: true,
    },
    status: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Cohort = mongoose.model("Cohort", cohortSchema);
