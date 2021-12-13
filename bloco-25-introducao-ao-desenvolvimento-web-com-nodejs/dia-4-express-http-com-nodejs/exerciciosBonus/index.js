const express = require('express');
const auth = require('./authMiddleware');

const app = express();

app.use(express.json());
app.use(auth);



app.use(function (err, req, res, next) {
  res.status(500).send(`erro: ${err.message}`);
});

app.listen(3000, () => console.log('listen port 3000'));