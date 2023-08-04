const express = require ('express');
const {signinUser,signupUser,getAllUsers,editProfile} = require ("../controllers/userControllers");
const router = express.Router();

router.post("/signin", signinUser)
router.post("/signup", signupUser)
router.get("/getusers", getAllUsers)
router.patch('/editinfo/:id', editProfile)

module.exports = router;