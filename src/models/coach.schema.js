import mongoose from "mongoose";

const coachSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    totalSeats: {
      type: Number,
      min: 1,
      required: true,
    },
    maxSeatsPerRow: {
      type: Number,
      min: 1,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Coach", coachSchema);
