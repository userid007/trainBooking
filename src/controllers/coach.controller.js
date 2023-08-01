import Coach from "../models/coach.schema.js";
import asyncHandler from "../service/asyncHandler.js";
import CustomError from "../service/customError.js";

export const createCoach = asyncHandler(async (req, res) => {
  const { name, totalSeats, maxSeatsPerRow } = req.body;
  if (!name || !totalSeats || !maxSeatsPerRow) {
    throw new CustomError("Coach all fields are required", 400);
  }

  const existingCoach = await Coach.findOne({ name });
  if (existingCoach) {
    throw new CustomError("Coach name is already exist", 400);
  }

  const coach = await Coach.create({ name, totalSeats, maxSeatsPerRow });

  res.status(200).json({
    success: true,
    message: "Coach was created successfully",
    coach,
  });
});

export const deleteCoach = asyncHandler(async (req, res) => {
  const { id: coachId } = req.params;
  const coachToDelete = await Coach.findByIdAndDelete(coachId);
  if (!coachToDelete) {
    throw new CustomError("Coach to be deleted not found", 400);
  }

  res.status(200).json({
    success: true,
    message: "Coach deleted successfully",
  });
});

export const getAllCoach = asyncHandler(async (req, res) => {
  const coaches = await Coach.find();
  
  if (!coaches || !coaches.length) {
    throw new CustomError("No coach found", 400);
  }

  res.status(200).json({
    success: true,
    coaches,
  });
});
