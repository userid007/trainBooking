import mongoose from "mongoose";

const coachSchema = new mongoose.Schema(
  {
    seats: {
      type: Number,
      min: 1,
      required: true,
    },
    MaxSeatsPerRow: {
      type: Number,
      min: 1,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Coach", coachSchema);
