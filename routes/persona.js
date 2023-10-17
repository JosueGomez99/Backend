const express = require('express');
const app = express();
const db = require('../database/conexion');

app.get('',  async (req, res)=>{

    let sql = `select * from tbl_personas order by id asc`;
    const result = await db.query(sql);
    res.json(result);

});

app.post('', async ( req, res)=>{

    const { nombre, apellido,direccion } = req.body;
    const params =   [ nombre , apellido,direccion];
    let sql = `insert into tbl_personas (nombre , apellido,direccion) values ($1, $2,$3)  returning *  `;
    const result = await db.query(sql , params);
    res.json(result);

})

app.put('/:id', async ( req, res)=>{

    const {  nombre, apellido,direccion } = req.body;
    const id = req.params.id;
    const params =   [  nombre, apellido,direccion, id];
    let sql = ` update tbl_personas 
                    set nombre = $1, 
                    apellido = $2, 
                    direccion = $3
                where id = $4
                    returning *  `;
    const result = await db.query(sql , params);
    res.json(result);

})

app.put('/persona/:id', async (req, res)=>{

    const id = req.params.id;
    const params =   [ id];
    let sql = ` update tbl_personas 
                    set direccion = true
                where id = $1
                    returning *  `;
    const result = await db.query(sql , params);
    res.json(result);


});


app.delete('/:id', async (req, res)=>{

    const id = req.params.id;
    const params =   [ id];
    let sql = ` delete from tbl_personas 
                where id = $1
                    returning *  `;
    const result = await db.query(sql , params);
    res.json(result);

})

module.exports = app;