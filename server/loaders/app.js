const express = require('express');
const path = require("path");
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('../config/keys');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

require('../models/User');
require('../models/Blog');
require('../services/passport');
require('../services/cache');

const app = express();

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "OPTIONS, GET, POST, PUT, PATCH, DELETE" // what matters here is that OPTIONS is present
    );
    next();
  });
app.use(express.json());
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);
app.use(passport.initialize());
app.use(passport.session());

//require returns a function second paranthese invoke that function
require('../routes/authRoutes')(app);
require('../routes/blogRoutes')(app);
require('../routes/uploadRoutes')(app);
if (['production', 'ci'].includes(process.env.NODE_ENV)) {
    
    app.use(express.static(path.join(__dirname, '..', 'public')));
    
    app.get('/*', (req, res) => {
        res.sendFile(path.join(__dirname,'..','public','index.html'));
    })
}

module.exports = app;