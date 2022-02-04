const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
const cors = require('cors');
const dotenv = require('dotenv');

require('./models/User');
require('./models/Blog');
require('./services/passport');
require('./services/cache');


mongoose.Promise = global.Promise;

//"mongodb://localhost:27017/blogdb2"
mongoose.connect("mongodb://localhost:27017/blogdb2").then(() => {
  console.log("Connected Database")
}).catch((e) => console.log(e))


const app = express();
dotenv.config();
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
}));
app.use(express.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/blogRoutes')(app);

if (['production', 'ci'].includes(process.env.NODE_ENV)) {
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