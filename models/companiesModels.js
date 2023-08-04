const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");

const Schema = mongoose.Schema;

const companySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  indusrty: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  logo: {
    type: String,
    required: true,
  },
  contactLinkedin: {
    type: String,
    required: true,
  },
  contactInstagram: {
    type: String,
    required: true,
  },
  contactFacebook: {
    type: String,
    required: true,
  },
  contactTwitter: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// static signin method
companySchema.statics.signin = async function (email, password) {
  if (!email || !password) {
    throw Error("all fields must be filled");
  }

  if (!validator.isEmail(email)) {
    throw Error("Email is not valid");
  }

  const company = await this.findOne({ email });

  if (!company) {
    throw Error("Email is not exist");
  }

  const match = await bcrypt.compare(password, company.password);

  if (!match) {
    throw Error("Incorrect password");
  }

  return company;
};

// static signup method
companySchema.statics.signup = async function (
  name,
  indusrty,
  country,
  desc,
  logo,
  contactLinkedin,
  contactInstagram,
  contactFacebook,
  contactTwitter,
  email,
  password
) {
  if (!email || !password) {
    throw Error("all fields must be filled");
  }

  if (!validator.isEmail(email)) {
    throw Error(email);
  }

  if (!validator.isStrongPassword(password)) {
    throw Error("Password is week");
  }

  const exists = await this.findOne({ email });

  if (exists) {
    throw Error("Email is already used");
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const company = await this.create({
    name,
    indusrty,
    country,
    desc,
    logo,
    contactLinkedin,
    contactInstagram,
    contactFacebook,
    contactTwitter,
    email,
    password: hash,
  });
  return company;
};

module.exports = mongoose.model("company", companySchema);
