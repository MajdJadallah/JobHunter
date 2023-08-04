const applicationModel = require("../models/applicationsModels");

const sendApplication = async (req, res) => {
  const {
    companyName,
    firstname,
    lastname,
    email,
    major,
    birthday,
    status,
    phonenumber,
    jobRole,
    joblevel,
    experience,
    location,
    qualification,
    cv,
  } = req.body;

  try {
    const application = await applicationModel.sendApplication(
      companyName,
      firstname,
      lastname,
      email,
      major,
      birthday,
      status,
      phonenumber,
      jobRole,
      joblevel,
      experience,
      location,
      qualification,
      cv
    );
    res.status(200).json({ mssg: "secsess" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAllApplications = async (req, res) => {
  const applications = await applicationModel.find();
  res.json(applications);
};

const softDeleteApplication = async (req, res) => {
  const { id } = req.params.id;

  try {
    const application = await applicationModel.findOne(id);
    if (!application) {
      return res.status(404).json({ error: "Application not found" });
    }

    await applicationModel.softDeleteApplication(id);
    return res
      .status(200)
      .json({ message: "Application soft deleted successfully" });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports = { sendApplication, getAllApplications, softDeleteApplication };
