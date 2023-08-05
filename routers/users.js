const express = require ('express');
const {signinUser,signupUser,getAllUsers,editProfile,getUser} = require ("../controllers/userControllers");
const router = express.Router();

router.post("/signin", signinUser)
router.post("/signup", signupUser)
router.get("/getusers", getAllUsers)
router.get('/:id', getUser)
router.patch('/editinfo/:id', editProfile)

module.exports = router;