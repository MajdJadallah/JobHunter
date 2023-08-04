const express = require ('express');
const {signinCompany,signupCompany,getAllCompanies,getCompany} = require ("../controllers/companiesControllers");
const router = express.Router();

router.post("/signin", signinCompany)
router.post("/signup", signupCompany)
router.get("/getcompanies", getAllCompanies)
router.get('/getcompany/:id', getCompany)

module.exports = router;