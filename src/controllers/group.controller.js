const {groupModel} = require("../models/group.model")

// get all groups
async function getAllGroups(req, res) {
   const groups = await groupModel.find();
   
    res.json(groups).end();
}

// get single group
async function getSingleGroup(req, res) {
    const group = await groupModel.findById(req.params.groupId)
    res.json(group).end();
}

// add new group
async function addNewGroup(req, res) {
    await groupModel.create({
      name: req.body.name,
      duration: req.body.duration,
      amount: req.body.amount,
      numberOfMembers: req.body.numberOfMembers,
      admin: req.body.userId,
      users: [req.body.userId]
    })
    res.send("group added").end();
}

// update group
async function udpateGroup(req, res) {
    await groupModel.updateOne({_id: req.params.groupId}, {...req.body});

    res.send("group updated successfully!").end();
}

module.exports = {
    getAllGroups,
    getSingleGroup,
    addNewGroup,
    udpateGroup,
}