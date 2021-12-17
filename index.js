const express = require('express');
const { MongoClient } = require('mongodb');
const cookieSession = require('cookie-session');
const passport = require('passport');
const dotenv =  require("dotenv");
const keys = require('./config/keys');
const mongoose = require('mongoose');
const cors = require("cors");

require('./models/Blog');
require('./services/passport');

const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());

app.use(cors({
  "AllowedHeaders": [
      "*"
  ],
  "AllowedMethods": [
      "PUT",
      "POST",
      "DELETE"
  ],
  "AllowedOrigins": [
      "http://localhost:3000"
  ],
  "ExposeHeaders": [],
}
));

dotenv.config();

mongoose.Promise = global.Promise;

const client = new MongoClient(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});


require('./routes/authRoutes')(app);
require('./routes/blogRoutes')(app);

if (['production'].includes(process.env.NODE_ENV)) {
  app.use(express.static('client/build'));

  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve('client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Listening on port`, PORT);
});
