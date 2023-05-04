const {Schema, model} = require("mongoose");

const userSchema = new Schema({
   name: {
      type: String,
      unique: true
   },
   username: {
      type: String,
      unique: true
   },
   email: {
      type: String
   },
   password: {
      type: String
   },
   role: {
      type: String,
      default: "member",
      enum: ["Admin", "member"]
   },
   groups: [{
      type: Schema.Types.ObjectId,
      ref: "Group"
   }]
})

const userModel = model("User", userSchema);

module.exports = {
   userModel
}