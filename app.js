/**
 * Dotenv is a zero-dependency module
 * that loads environment variables
 * from a .env file into process.env.
 * https://www.npmjs.com/package/dotenv
 */
require('dotenv').config({path: '.env'});

/**
 * The Express philosophy is to provide small,
 * robust tooling for HTTP servers, making
 * it a great solution for single page applications,
 *  websites, hybrids, or public HTTP APIs.
 */
const express = require('express');
const session = require('express-session');
const app = express();

/**
 * use static file folders, helmet, body-parser and compression
 */
const bodyParser = require('body-parser');
const helmet= require('helmet');
const compression = require('compression');
app.use(express.static('public'));
app.use(helmet());
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

/**
 * apply express-session
 */
app.use(session({
  secret: 'something should not be exposed',
  resave: false,
  saveUninitialized: true,
}));

/**
 * apply passport & local strategy
 */
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({ username: username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) { return done(null, false); }
      if (!user.verifyPassword(password)) { return done(null, false); }
      return done(null, user);
    });
  }
));
app.post('/login/password',
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/auth/login'
  })
);


/**
 * router.js
 */
const router = require('./router');
app.use(router);

app.listen(process.env.PORT);
