import { supabase } from "../config/supabase";

export const signup = async (req, res) =>{
    const {name, email, password, role} = req.body;
    const {data, error} = await supabase
    .from("users")
    .insert([{name, email, password, role }]);

    if(error)return res.status(400).send(error.message);
    res.send(data);
};