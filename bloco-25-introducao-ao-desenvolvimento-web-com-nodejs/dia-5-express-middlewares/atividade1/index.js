const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./middlewareRoute');
const PORT = 3000;

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/user', router);

app.listen(PORT, () => console.log('listen port 3000'));