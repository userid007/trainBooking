import { Router } from "express";
import {
  createCoach,
  deleteCoach,
  getAllCoach,
} from "../controllers/coach.controller.js";

const router = Router();

router.post("/", createCoach);
router.delete("/:id", deleteCoach);
router.get("/", getAllCoach);

export default router;
