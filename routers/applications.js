const express = require("express");
const {
  sendApplication,
  getAllApplications,
  softDeleteApplication
} = require("../controllers/applicationsControllers");

const router = express.Router();

router.get("/getapplications", getAllApplications);
router.post("/apply", sendApplication);
router.delete("/delete/:id", softDeleteApplication);

module.exports = router;
