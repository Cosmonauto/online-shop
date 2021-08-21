const Router = require("express")
const userController = require("../controllers/userController")
const router = new Router()
const authmiddleware = require('../middleware/authMiddleware');

router.post('/registration', userController.registration)
router.post('/login', userController.login)
router.get('/auth', authmiddleware, userController.check)



module.exports = router