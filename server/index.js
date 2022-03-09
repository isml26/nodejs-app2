const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const dotenv = require('dotenv');
const app = require("./loaders/app");

const PORT = process.env.PORT || 5000;

mongoose.Promise = global.Promise;
dotenv.config();
//"build": "NPM_CONFIG_PRODUCTION=false npm install --prefix client && npm run build --prefix client",
//"mongodb+srv://admin:admin@cluster0.4patz.mongodb.net/blog_for_everyone?retryWrites=true&w=majority"

mongoose.connect(keys.mongoURI).then(() => {
  console.log("Connected Database")
}).catch((e) => console.log(e))


app.listen(PORT, () => {
  console.log(`Listening on port`, PORT);
});
