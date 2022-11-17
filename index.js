const express = require('express');
const server = express();
const products = require('./src/data/products.json');

server.get('/products', (req, res) => {
  return res.json(products)
})

server.listen(3000,() =>{
  console.log("Server works!!!");
})