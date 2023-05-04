const {Router} = require("express");
const controller = require("../controllers/group.controller");
const { checkAdmin } = require("../middlewares/auth.middleware")

const router = Router();

// get all groups
router.get('/', controller.getAllGroups);

// get single group
router.get('/:groupId', controller.getSingleGroup);

// add new group
router.post('/', controller.addNewGroup);

// update group
router.patch('/:groupId', checkAdmin, controller.udpateGroup);

module.exports.groupsRouter = router;