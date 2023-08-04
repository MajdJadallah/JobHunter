const companyModel = require("../models/companiesModels");
const mongoose = require('mongoose');

// signin route
const signinCompany = async (req, res) => {
  const { email, password } = req.body;

  try {
    const company = await companyModel.signin(email, password);
    res.status(200).json({ email });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//signup route
const signupCompany = async (req, res) => {
  const {
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
    password,
  } = req.body;

  try {
    const company = await companyModel.signup(
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
    );
    res.status(200).json({ email });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAllCompanies = async (req, res) => {
  const companies = await companyModel.find();
  res.json(companies);
};

const getCompany = async (req, res) => {
  const companyId = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(companyId)) {
    return res.status(400).json({ error: 'Invalid company ID' });
  }

  companyModel.findOne({ _id: companyId })
  .then(company => {
    if (!company) {
      return res.status(404).json({ error: 'Company not found' });
    }
    res.json(company);
  })
  .catch(error => {
    console.error('Error occurred:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  });
};

module.exports = {
  signinCompany,
  signupCompany,
  getAllCompanies,
  getCompany,
};
