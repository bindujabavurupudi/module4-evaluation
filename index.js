import express from "express"
import { logger } from "./middlewares/logger"
import { userRouter } from "./routes/userRoutes"
import { vehicleRouter } from "./routes/vehicleRoutes"
import { tripRouter } from "./routes/tripRoutes"
const app = express();
app.use(express.json());
app.use(logger)

app.use("/users", userRouter);
app.use("vehicles", vehicleRouter);
app.use("/trips", tripRouter);
app.use((req, res) =>{
    res.status(404).send("This request is not found");
});

app.listen(3000, () => console.log("Server running..."));