import { asyncHandler } from "../utils/asyncHandler.js";
import { Cohort } from "../models/cohort.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";

const getCohorts = asyncHandler(async (req, res) => {
  try {
    const cohorts = await Cohort.find();
    return res.status(200).json(new ApiResponse(200, cohorts));
  } catch (error) {
    throw new ApiError(500, "Internal Server Error");
  }
});

const addCohort = asyncHandler(async (req, res) => {
  const { name, description, slug, price } = req.body;
  if (
    [name, description, slug, price].some(
      (field) => !field || (typeof field === "string" && field.trim() === "")
    )
  ) {
    res
      .status(500)
      .json({ error: "Validation Error: All fields are required!" });
    // throw new ApiError(500, "Validation Error: All fields are required");
  }
  const exitedCohort = await Cohort.findOne({ slug });
  if (exitedCohort) {
    res.status(500).json({ error: "Validation Error: Cohort already exists!" });
    // throw new ApiError(500, "Validation Error: Cohort already exists");
  }
  const cohort = await Cohort.create({
    name,
    description,
    slug,
    price,
  });

  return res
    .status(200)
    .json(new ApiResponse(201, cohort, "Cohort created successfully!"));
});

export { getCohorts, addCohort };
