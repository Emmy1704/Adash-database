const {userModel} = require("../models/user.model")

async function checkAdmin(req, res, next) {
   const user = await userModel.findOne({username: req.body.username});

   if (!user || user.role !== "Admin") return res.send("permission denied").end();

   next();
}

module.exports = {
   checkAdmin
}