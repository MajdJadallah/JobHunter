const jobSchema = require("../models/jobsModels.js");

const postJob = async (req, res) => {
  const {
    title,
    desc,
    companyName,
    category,
    typeOfEmployment,
    jobLevel,
    capacity,
    applied,
  } = req.body;

  try {
    const jobModel = await jobSchema.postJob(
      title,
      desc,
      companyName,
      category,
      typeOfEmployment,
      jobLevel,
      capacity,
      applied
    );
    res.status(200).json({ mssg: "secsess" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAllJobs = async (req, res) => {
  const jobs = await jobSchema.find();
  res.json(jobs);
};
const getCategories = async (req, res) => {
  try {
    const category = req.params.category;
    const categories = await jobSchema.find({ category });
    res.status(200).json({ categories: categories });
  } catch (error) {
    console.error('Error fetching categories:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
const softDeletejob = async (req, res) => {
  const { id } = req.params.id;

  try {
    const job = await jobSchema.findOne(id);
    if (!job) {
      return res.status(404).json({ error: "job not found" });
    }

    await jobSchema.softDeletejob(id);
    return res
      .status(200)
      .json({ message: "job soft deleted successfully" });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports = { postJob, getAllJobs,softDeletejob,getCategories };
