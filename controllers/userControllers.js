const User = require("../models/usersModels");

// signin route
const signinUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.signin(email, password);
    res.status(200).json({ email });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//signup route
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
    res.status(200).json({ email });
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

module.exports = {
  signinUser,
  signupUser,
  getAllUsers,
  editProfile,
};
