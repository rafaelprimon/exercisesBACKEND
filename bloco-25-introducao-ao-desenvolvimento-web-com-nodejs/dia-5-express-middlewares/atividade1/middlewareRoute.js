const router = require('express').Router();
const { middlewareValidation } = require('./middlewareValidation');

router.post('/register', middlewareValidation, (_req, res) => 
res.status(201).json({ message: 'user created' }));

router.post('/login', middlewareValidation, (_req, res) => 
res.status(200).json({ token: "86567349784e" }));

module.exports = router;