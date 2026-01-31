import express from "express"
import { addVehicle,assginDriver, getVehicle } from "../controllers/vehicleController"
import { rateLimit } from "../middlewares/rateLimit"

export const vehicleRouter = express.Router();
vehicleRouter.post("/add", rateLimit, addVehicle);
vehicleRouter.patch("assgin-driver/:vehicleId", assginDriver);
vehicleRouter.get("/:vehicleId", getVehicle);