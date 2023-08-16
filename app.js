//Constantes
const express = require ('express')
const app = express ()
const connection = require('./knexfile')['development']
const db = require ('knex') (connection)

//Lector de JSON
app.use (express.json());


//Puerto Local Host
app.get ('/', (req,res)=>{
    res.json ({
        "hola": "consola"
    })
})

//CRUD Users

//Leer usuarios
app.get('/users',(req,res)=>{
    db('users').then((users) =>{
        res.json (users)
    })
})

//Leer usuarios por id
app.get('/users/:id', (req,res)=>{
    const {id} = req.params
    db('users')
        .where ({user_id: id})
        .then ((user)=>{
            res.json (user)
        })
})

//Crear usuarios
app.post('/users', (req,res)=>{
    const toCreate = req.body
    db('users').insert(toCreate)
        .then((user)=>{
            res.json (user)
        })
})


//Modificar usuarios
app.put('/users/:id', (req,res)=>{
    const {id} = req.params
    const toEdit = req.body
    db('users')
        .where({user_id: id})
        .update(toEdit)
        .then ((user)=>{
            res.json (user)
        })
})


//Borrar usuarios
app.delete('/users/:id', (req,res)=>{
    const {id} = req.params
    db('users')
        .where({user_id: id})
        .del()
        .then ((user)=>{
            res.json (user)
        })
})

//CRUD Habilidades

//Leer habilidades
app.get('/habilities',(req,res)=>{
    db('habilities').then((habilities) =>{
        res.json (habilities)
    })
})

//Leer habilidades por id
app.get('/habilities/:id', (req,res)=>{
    const {id} = req.params
    db('habilities')
        .where ({hability_id: id})
        .then ((hability)=>{
            res.json (hability)
        })
})

//Crear habilidades
app.post('/habilities', (req,res)=>{
    const toCreate = req.body
    db('habilities').insert(toCreate)
        .then((hability)=>{
            res.json (hability)
        })
})

//Modificar habilidades
app.put('/habilities/:id', (req,res)=>{
    const {id} = req.params
    const toEdit = req.body
    db('habilities')
        .where({hability_id: id})
        .update(toEdit)
        .then ((hability)=>{
            res.json (hability)
        })
})

//Borrar habilidades
app.delete('/habilities/:id', (req,res)=>{
    const {id} = req.params
    db('habilities')
        .where({hability_id: id})
        .del()
        .then ((hability)=>{
            res.json (hability)
        })
})


//CRUD Clientes

//Leer clientes
app.get('/clients',(req,res)=>{
    db('clients').then((clients) =>{
        res.json (clients)
    })
})

//Leer clientes por id
app.get('/clients/:id', (req,res)=>{
    const {id} = req.params
    db('clients')
        .where ({id_client: id})
        .then ((client)=>{
            res.json (client)
        })
})

//Crear clientes
app.post('/clients', (req,res)=>{
    const toCreate = req.body
    db('clients').insert(toCreate)
        .then((client)=>{
            res.json (client)
        })
})


//Modificar clientes
app.put('/clients/:id', (req,res)=>{
    const {id} = req.params
    const toEdit = req.body
    db('clients')
        .where({id_client: id})
        .update(toEdit)
        .then ((client)=>{
            res.json (client)
        })
})


//Borrar clientes
app.delete('/clients/:id', (req,res)=>{
    const {id} = req.params
    db('clients')
        .where({id_client: id})
        .del()
        .then ((client)=>{
            res.json (client)
        })
})

//Apertura Puerto
app.listen (8001, ()=>{
    console.log ("Puerto abierto")
})
