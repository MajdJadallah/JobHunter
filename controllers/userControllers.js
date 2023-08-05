const jwt = require('jsonwebtoken');
const User = require("../models/usersModels");

const JWT_SECRET = 'your-secret-key'; // Replace 'your-secret-key' with your actual secret key

const authenticateUser = (req, res, next) => {
  const token = req.cookies.access_token;

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Invalid token' });
    }
    req.user = user;
    next();
  });
};

const generateToken = (user) => {
  const userId = user._id;
  const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '2h' });
  return token;
};

const signinUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.signin(email, password);

    // Generate JWT token
    const token = generateToken(user);

    // Set the token as a cookie
    res.cookie('access_token', token, { httpOnly: true, maxAge: 3600000 }); // Expires in 1 hour

    res.status(200).json({ userId: user._id, email });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const signupUser = async (req, res) => {
  const {
    firstname,
    lastname,
    username,
    phone,
    birthday,
    skills,
    summary,
    jobrole,
    yearofgraduation,
    univarsity,
    speciality,
    avatar,
    email,
    password,
  } = req.body;

  try {
    const user = await User.signup(
      firstname,
      lastname,
      username,
      phone,
      birthday,
      skills,
      summary,
      jobrole,
      yearofgraduation,
      univarsity,
      speciality,
      avatar,
      email,
      password
    );

    // Generate JWT token
    const token = generateToken(user);

    // Set the token as a cookie
    res.cookie('access_token', token, { httpOnly: true, maxAge: 3600000 }); // Expires in 1 hour

    res.status(200).json({ email, userID: user._id });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAllUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

const editProfile = async (req, res) => {
  try {
    const updateUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: "success",
      data: {
        updateUser: updateUser,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};

const getUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json(user);
  } catch (error) {
    console.error('Error finding user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  authenticateUser,
  signinUser,
  signupUser,
  getAllUsers,
  editProfile,
  getUser
};
