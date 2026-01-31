Table name: users
columns ,     DataTypes  ,   constraints   ,                                relationships
id    ,       uuid     ,     ( primary key, default gen_random_uuid()),
name  ,       text,          notnull,
email ,        text,           unique notnull,
password  ,   text,              notnull ,                      
role  ,        text,              notnull,
created_at  ,  timestamp,           default now()