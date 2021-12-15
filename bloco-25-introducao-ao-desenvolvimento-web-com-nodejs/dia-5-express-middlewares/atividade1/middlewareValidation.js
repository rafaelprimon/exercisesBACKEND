const validUser = (req, res, next) => {
  const { username } = req.body;
  if (!username ||  username.lenght < 3)
  return res.status(400).json({ message: 'invalid data' });
  next();
};

const validEmail = (req, res, next) => {
  const { email } = req.body;
  if (!email ||  !email.includes('@') || !email.includes('.com'))
  return res.status(400).json({ message: 'invalid data' });
  next();
};

const validPassword = (req, res, next) => {
  const { password } = req.body;
  const regex = /^[0-9]*$/;
  if (password.length < 3 || password.lenght >8 || !password.match(regex))
  return res.status(400).json({ message: 'invalid data' });
  next();
};

module.exports = {
  validUser,
  validEmail,
  validPassword,
}