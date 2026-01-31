import express from "express"
import { addVehicle,assginDriver, getVehicle } from "../controllers/vehicleController.js"
import { rateLimit } from "../middlewares/rateLimit.js"

export const vehicleRouter = express.Router();
vehicleRouter.post("/add", rateLimit, addVehicle);
vehicleRouter.patch("assgin-driver/:vehicleId", assginDriver);
vehicleRouter.get("/:vehicleId", getVehicle);