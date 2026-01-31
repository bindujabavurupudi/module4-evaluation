import { supabase } from "../config/supabase.js";
export const addVehicle = async (req, res) =>{
    const body = req.body;
    const {data, error} = await 
    supabase.from("vehicles").insert([body]);
    if(error)return res.status(400).send(error.message);
    res.send(data);
};

export const assginDriver = async (req, res) =>{
    const {vehicleId} = req.params;
    const {driverId} = req.body;
    const {data, error} = await supabase
    .from("vehicles")
    .update({driverId})
    .eq("id", vehicleId);

    if(error)return res.status(400).send(error.message);
    res.send(data);

};


export const getVehicle = async (req, res) =>{
    const {vehicleId} = req.params;
    const {data}= await
    supabase.from("vehicles").select("*").eq("id", vehicleId);
    res.send(data);
};