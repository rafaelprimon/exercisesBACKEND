const validToken = (req, res, next) => {
  const token = req.headers.authorization;
  // regex do gabarito
  const regex = !/^[a-zA-Z0-9]{12}$/;

  if (!token || regex.test(token))
  return res.status(401).json({ message: 'invalid token' });
  next();
};

module.exports = validToken;