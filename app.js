require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const { usersRouter } = require("./src/routes/user.route");
const { groupsRouter } = require ("./src/routes/group.route")

const mongoUrl = process.env.MONGODB_URL

const app = express();
const cors = require("cors")

app.use(cors());
app.use(express.json());
app.use('/users', usersRouter);
app.use('/groups', groupsRouter);

mongoose.connect(mongoUrl).then(() => {
   app.listen(5973, () => {
      console.log("mongodb server listening on port");
      console.log("database connected successfully...")
   })
}).catch((err) => {
   console.log("mongodb error", err);
})