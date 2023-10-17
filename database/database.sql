-- Active: 1697476740334@@localhost@5432@postgres

create table tbl_personas
(
    id serial PRIMARY key,
    nombre varchar(200),
    apellido varchar(500), 
    direccion varchar(500)
);