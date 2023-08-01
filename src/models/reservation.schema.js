import mongoose from "mongoose";

const reservationSchema = new mongoose.Schema(
  {
    coach: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Coach",
      required: true,
    },
    seat: {
      type: Number,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Reservation", reservationSchema);
