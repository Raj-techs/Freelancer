const UserModel = require("../models/Users")
const express = require('express')
const userController = require("../controllers/UserController")
const verifyToken = require("../middleware/verifyToken")
const router = express.Router()

router.post('/register',userController.RegisterUser)
router.post('/login',userController.UserLogin)
router.get('/allusers',userController.AllUsers)

module.exports = router;
