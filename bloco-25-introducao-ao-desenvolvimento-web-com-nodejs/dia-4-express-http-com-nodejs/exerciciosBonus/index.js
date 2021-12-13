const express = require('express');
const auth = require('./authMiddleware');
const token = require('./token');

const app = express();

app.use(express.json());
app.use(auth);

app.post('/signup', (req, res) => {
  const { email, password, firstName, phone } = req.body;

  if ([email, password, firstName, phone].includes(undefined)) {
    return res.status(401).json({ "message": 'missing fields' });
  }
  const useToken = token.randomBytes(8).toString('hex');
  res.status(200).json({ useToken});
})

app.use(function (err, req, res, next) {
  res.status(500).send(`erro: ${err.message}`);
});

app.listen(3000, () => console.log('listen port 3000'));