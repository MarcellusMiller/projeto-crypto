const express = require('express');
const route = express.Router();
const btccontroller = require('../controller/btccontroller')

route.use(express.Router())

route.get('/', (req, res) => res.render('index'))
route.get('/btcprice', btccontroller.getBitcoinInfo);

module.exports = route