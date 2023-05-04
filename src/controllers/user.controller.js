const {userModel} = require("../models/user.model")
const bcrypt = require("bcrypt");

//login
async function login(req, res) {
   const user = await userModel.findOne({username: req.body.username});

   if (!user) return res.send("user not found!!").end();

   if (!bcrypt.compareSync(req.body.password, user.password)) return res.send("password incorrect!!").end();

   res.json(user).end();
}

//register
async function register(req, res) {
   const salt = bcrypt.genSaltSync(6);
   const encryptedPassword = bcrypt.hashSync(req.body.password, salt);

   try {
		const user = new userModel({name: req.body.name, username: req.body.username, password: encryptedPassword, email: req.body.email,});
		let result = await user.save();
		result = result.toObject();
		if (result) {
			console.log(result);
			delete result.password;
			res.status(200).send({
            success: true,
            message: `registered successfully`,
            result
         });
		} else {
			res.status(409).send({
         success: false,
         message: `registration failed`
      });
		}
	} catch (e) {
		res.status(500).send({
         success: false,
         message: `something went terribly wrong ${e}`
      });
	} 

   // await userModel.create ({
   //    groups: [req.body.groupId],
   //    role: req.body.role
   // })

   // res.send("user created!!").end();
}

//getGroups
 async function getGroups(req, res) {
   const user = await userModel.findById(req.params.id)

   res.json(user.groups).end();
 }

//addGroup
async function addGroup(req, res) {
   await userModel.updateOne({_id: req.params.id}, {
      $push: {
         groups: {$each: req.body.groups}
      }
   })

   res.send("group created").end();
}
module.exports = {
   login,
   register,
   getGroups,
   addGroup
}