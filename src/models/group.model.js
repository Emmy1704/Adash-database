const {Schema, model} = require("mongoose");

const groupSchema = Schema ({
   name: {
      type: String,
      unique: true
   },
   duration: {
      type: Number,
   },
   amount: {
      type: Number,
   },
   numberOfMembers: {
      type: Number
   },
   admin: {
      type: Schema.Types.ObjectId,
      ref: "User"
   },
   users: [{
      type: Schema.Types.ObjectId,
      ref: "User"
   }]
})

const groupModel = model("Group", groupSchema);

module.exports = {
   groupModel
}