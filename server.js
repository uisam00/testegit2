const express = require('express');
const app = express();

app.get('/', (req, res )=>{
    res.status(200).send({message: 'Olá mundo!'})
})

app.get('/ola', (req, res )=>{
    res.status(200).send({message: 'Olá mundo! 2'})
})

app.listen(3001, ()=>{
    console.log('Api rodando no porto 3001');
})
