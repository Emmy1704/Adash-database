const {Router} = require("express");
const controller = require("../controllers/user.controller");
// const {clientLogin} = require("../middleware/login.middleware")

const router = Router();


// login
router.post('/login',  controller.login);

// register
router.post('/register', controller.register);

//get and add group
router.route('/:id/groups')
   .get(controller.getGroups)
   .patch(controller.addGroup)

module.exports = {
   usersRouter: router
}