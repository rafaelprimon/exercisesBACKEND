// exercicio 5
const express = require('express');
const bodyParser = require('body-parser');
const rescue = require('express-rescue');

const simpsonsUtils = require('./simpsonsUtils');

const app = express();

app.use(bodyParser.json());

// exercicio 6
app.get('/simpsons', rescue( async(_req, res) => {
  const simpsons = await simpsonsUtils.recSimpson()
  res.status(200).json(simpsons);
}));

app.use(function (err, req, res, next) {
  res.status(500).send(`Erro? ${err.message}`);
});

app.listen(3000, () => console.log('listen port 3000!'));
