const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./middlewareRoute');
const err = require('./middlewareErr');
const PORT = 3000;

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/posts', router);

app.use('*', (_req, _res, next) => next({ statusCode: 404, message: 'Opsss router not found' }));
app.use(err.errNotFound);

app.listen(PORT, () => console.log('Run server http://localhost:3000'));