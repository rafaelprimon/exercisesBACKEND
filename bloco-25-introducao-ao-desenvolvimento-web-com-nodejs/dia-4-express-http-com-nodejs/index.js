const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

// exercicio 1
app.get('/ping', (_req, res) => res.json({ "message": "pong" }));

// exercicio 2
app.post('/hello', (req, res) => {
  const { name } = req.body;
  res.status(200).json({ "message": `Hello, ${name}` });
});

// exercicio 3
app.post('/greetings', (req, res) => {
  const { name, age } = req.body;
  if (age <= 17) { return res.status(401).json({ "message": "Unauthorized" });
}
  res.status(200).json({ "message": `Hello, ${name}` });
});

app.use(function (err, req, res, next) {
  res.status(500).send(`Erro? ${err.message}`);
});

app.listen(3000, () => console.log('listen port 3000!'));
