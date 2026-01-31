import express from "express"
import { createTrip, endTrip } from "../controllers/tripController.js"

export const tripRouter  = express.Router();
tripRouter.post("/create", createTrip);
tripRouter.patch("/end/:tripId", endTrip);