jest.setTimeout(30000);
require('../models/User');

const mongoose = require('mongoose');
const keys = require('../config/keys');

mongoose.Promise = global.Promise;//tell mongoose make use nodejs global promise object
mongoose.connect(keys.mongoURI,{useMongoClient:true});
