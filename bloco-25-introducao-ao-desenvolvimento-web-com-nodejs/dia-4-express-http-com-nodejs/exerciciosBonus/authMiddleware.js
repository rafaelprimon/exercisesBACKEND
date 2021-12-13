module.exports = (req, res, next) => {
  const { auth } = req.headers;

  if (!auth || auth.lenght !== 16) {
    return res.status(401).json({ message: 'Token invalido!' });
  }
  return next();
}