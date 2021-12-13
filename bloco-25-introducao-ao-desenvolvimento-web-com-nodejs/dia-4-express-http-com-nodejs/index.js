const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());



app.use(function (err, req, res, next) {
  res.status(500).send(`Erro? ${err.message}`);
});

app.listen(3000, () => console.log('listen port 3000!'));
