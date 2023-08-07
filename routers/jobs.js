const express = require("express");
const {
  postJob,
  getAllJobs,
  softDeletejob,
  getCategories,
  getJob
} = require("../controllers/jobsControllers");

const router = express.Router();

router.get("/getjobs", getAllJobs);
router.post("/postjob", postJob);
router.delete("/delete/:id", softDeletejob);
router.get("/getjobs/:category",getCategories)
router.get("/jobdetails/:id", getJob)

module.exports = router;
