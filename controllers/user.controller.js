const User = require('../libs/models/user.model');
const bcrypt = require('bcrypt');

const signup = async (req, res) => {
  const { email, password } = req.body;
  const query = { email };

  const existingUser = await User.findOne(query);
  if (existingUser) {
    // Email aready exists
    res.redirect('/signup');
  } else {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = {
      email,
      password: hashedPassword,
    };
    const result = await User.create(user);
    req.session.userId = result._id;
    res.redirect('/dashboard');
  }
};

module.exports = {
  signup,
};
