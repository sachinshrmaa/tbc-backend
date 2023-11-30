import { Cohort } from "../models/cohort.model.js";
import { Router } from "express";
const router = Router();

router
  .route("/")
  .get(async (req, res) => {
    try {
      const cohorts = await Cohort.find();
      res.status(200).json({ cohorts });
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ error: "Internal Server Error" });
    }
  })
  .post(async (req, res) => {
    try {
      // get the cohort body
      const { name, description, slug, price } = req.body;
      // check if all fields are not empty
      if (
        [name, description, slug, price].some(
          (field) =>
            !field || (typeof field === "string" && field.trim() === "")
        )
      ) {
        console.log("All fields are required!");
        res.status(400).json({ message: "all fields are required" });
        throw new Error("Validation Error: All fields are required");
      }
      // check if the cohort already exists
      const exitedCohort = await Cohort.findOne({ slug });
      if (exitedCohort) {
        console.log("cohort already exists!");
        res.status(400).json({ message: "cohort already exists" });
        throw new Error("Validation Error: Cohort already exists");
      }
      // create the cohort
      const cohort = await Cohort.create({
        name,
        description,
        slug,
        price,
      });

      res.status(201).json(cohort);
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

export default router;
