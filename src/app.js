import express from "express";
const app = express();

//Middlewares
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// Routes
import routes from "./routers/cohort.routes.js";
const cohortRoutes = routes;

app.use("/api/v1/cohorts", cohortRoutes);

export { app };
