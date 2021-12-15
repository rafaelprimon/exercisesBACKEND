const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');

const validToken = require('./middlewareValidation');
const PORT = 3000;
const ENDPOINT = 'https://api.coindesk.com/v1/bpi/currentprice/BTC.json';

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/btc', validToken, async (_req, res) => {
  const api = await axios.get(ENDPOINT);
  res.status(200).json(api.data);
});

app.listen(PORT, () => console.log('Listen port 3000') );
