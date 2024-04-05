const express = require('express');
const route = express()

const bodyParser = require('body-parser');
route.use(bodyParser.json());
route.use(bodyParser.urlencoded({ extended: true }));


const cors = require('cors');
route.use(cors());
route.use(express.json());

const Control = require('../controllers/DifferentControllers');

route.post('/getAuthenticate', Control.getAuthenticate);
route.post('/getProducts', Control.getProducts);
route.post('/getReceipeInfo', Control.getReceipeInfo);
route.get('/getProductsDetails', Control.getProductsDetails);

module.exports = route;