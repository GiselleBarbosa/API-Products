const express = require('express');
const server = express();
const port = process.env.PORT || 3000
const products = require('./src/data/products.json');
const cors = require('cors');

server.get('/products', (req, res) => {
  return res.json(products)
})

server.listen(port,() =>{
  console.log("Server works!!!");
})

const corsOptions = {
  origin: '*',
  optionSuccessStatus: 200
};
app.use(cors(corsOptions));