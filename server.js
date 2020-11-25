const express = require('express');
const app = express();

app.get('/', (req, res )=>{
    res.status(200).send({message: 'Olá mundo!'})
})

app.listen(3001, ()=>{
    console.log('Api rodando no porto 3001');
})