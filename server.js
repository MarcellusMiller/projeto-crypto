require('dotenv').config()
const express = require('express');
const app = express();
const routes = require('./sources/routes/routes')
const port = 3004
const path = require('path')
const axios = require('axios')
const fetch = require('node-fetch');


// coin Gecko
const url = 'https://api.coingecko.com/api/v3/search';
const options = {
  method: 'GET',
  headers: {accept: 'application/json', 'x-cg-demo-api-key': process.env.APIKEY}
};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error('error:' + err));

// métodos de uso
app.use(routes)
//métodos de set
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'sources', 'views'));


//escutas
app.listen(port, () => {
    console.log();
    console.log(`clique + CTRL http://localhost:${port}`)
})