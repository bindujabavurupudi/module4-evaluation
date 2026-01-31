Table name: trips
columns ,     DataTypes  ,   constraints   ,                                relationships
id    ,       uuid     ,     ( primary key, default gen_random_uuid()),
customer_id  ,       text,          notnull,
vehicle_id ,        text,           unique notnull,
start_date  ,   text,              notnull ,                      
end_date  ,        text,              notnull,
location  ,  timestamp,           default now()
distance_km,
passengers,
tripCost,
isCompleted ,
created_at