const express = require("express");
const {
  postJob,
  getAllJobs,
  softDeletejob,
} = require("../controllers/jobsControllers");

const router = express.Router();

router.get("/getjobs", getAllJobs);
router.post("/postjob", postJob);
router.delete("/delete/:id", softDeletejob);

module.exports = router;
