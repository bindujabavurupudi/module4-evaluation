import { supabase } from "../config/supabase";

export const createTrip = async (req, res) =>{
    const trip = req.body;

    await supabase 
    .from("vehicles")
    .update({isAvailable: false})
    .eq("id", trip.vehicle_id);

    const {data, error} = await supabase.from("trips").insert([trip]);
    if(error)return res.status(400).send(error.message);
    res.send(data);
};

export const endTrip = async(req, res) =>{
    const {tripId} = req.params;

    const {data: trip} = await supabase
    .from("trips")
    .select("*")
    .eq("id", tripId)
    .single();

    const {data: vehicle} = await supabase
    .from("vehicles")
    .select("rate_per_km")
    .eq("id", trip.vehicle_id)
    .single();

    const cost = trip.distance_km * vehicle.rate_per_km;
    await supabase
    .from("trips")
    .update({isCompleted: true, tripCost: cost})
    .eq("id", tripId);

    await supabase
    .from("vehicles")
    .update({isAvailable: true})
    .eq("id", trip.vehicle_id);
res.send("Trip Ended");

};