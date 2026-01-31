import express from "express"
import { logger } from "./middlewares/logger"
import { userRouter } from "./routes/userRoutes"
import { vehicleRouter } from "./routes/vehicleRoutes"
import { tripRouter } from "./routes/tripRoutes"
import { supabase } from "./config/supabase"
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


app.get("/analytics", async(req, res) =>{
    try{
        const {count: customers} = await supabase
        .from("users")
        .select("*", {count: "exact", head: true})
        .eq("role", "customer");

        const {count: owners} = await supabase
        .from("users")
        .select("*", {count: "exact", head: true})
        .eq("role", "owner");

        const {count: drivers} = await supabase
        .from("users")
        .select("*", {count: "exact", head: true})
        .eq("role", "driver");

        const {count: vehicles} = await supabase
        .from("vehicles")
        .select("*", {count: "exact", head: true})

        const {count: trips} = await supabase
        .from("trips")
        .select("*", {count: "exact", head: true})

        res.json({
            total_customers: customers,
            total_owners: owners,
            total_drivers: drivers,
            total_vehicles: vehicles,
            total_trips: trips
        });

    }catch(err){
        res.status(500).send(err.message);
    }
});