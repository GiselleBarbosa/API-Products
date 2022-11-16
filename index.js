const express = require('express');
const { retry } = require('rxjs');
const server = express();
const products = require('./src/data/products.json');

server.get('/products', (req, res) => {
  return res.json(products)
})

server.listen(3000,() =>{
  console.log("Server works!!!");
})