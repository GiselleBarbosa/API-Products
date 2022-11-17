const express = require('express');
const server = express();
const port = process.env.PORT || 3000
const products = require('./src/data/products.json');

server.get('/products', (req, res) => {
  return res.json(products)
})

server.listen(port,() =>{
  console.log("Server works!!!");
})