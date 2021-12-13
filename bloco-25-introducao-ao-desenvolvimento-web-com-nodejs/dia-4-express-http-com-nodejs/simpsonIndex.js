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

// exercicio 7
app.get('/simpsons/:id', rescue( async(req, res) =>{
  const simpsons = await simpsonsUtils.recSimpson();
  const simpsonsId = simpsons.find(({ id }) => id === req.params.id);
  if(!simpsonsId) {
    return res.status(404).json({ "message": "simpson not found" });
  }
  res.status(200).json(simpsonsId);
}));

// exercicio 8
app.post('./simpsons', rescue( async(req, res) => {
  const { name, id } = req.body;
  const simpsons = await simpsonsUtils.recSimpson();
 if (simpsons.map(({ id }) => id).includes(id)) {
   return res.status(409).json({ "message": 'id already exists' });
 };

 simpsons.push({ name, id });
  await simpsonsUtils.setSimpson(simpsons);
  res.status(204).end();
}));

app.use(function (err, req, res, next) {
  res.status(500).send(`Erro? ${err.message}`);
});

app.listen(3000, () => console.log('listen port 3000!'));
