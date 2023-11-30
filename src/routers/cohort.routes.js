import { Router } from "express";
import { addCohort, getCohorts } from "../controllers/cohort.controller.js";

const router = Router();

router.route("/").get(getCohorts).post(addCohort);

export default router;
