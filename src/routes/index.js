import { Router } from "express";
import coachRoutes from "./coach.route.js"
const router = Router();

router.use("/coach", coachRoutes);

export default router;
