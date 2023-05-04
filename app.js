require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const { usersRouter } = require("./src/routes/user.route");
const { groupsRouter } = require ("./src/routes/group.route")

const mongoUrl = process.env.MONGODB_URL

const app = express();
const cors = require("cors")

app.use(express.json());
app.use(cors());
app.use('/users', usersRouter);
app.use('/groups', groupsRouter);

mongoose.connect(mongoUrl).then(() => {
   app.listen(5973, () => {
      console.log("mongodb server listening on port");
   })
}).catch((err) => {
   console.log("mongodb error", err);
})