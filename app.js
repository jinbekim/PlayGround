/**
 * Dotenv is a zero-dependency module
 * that loads environment variables
 * from a .env file into process.env.
 * https://www.npmjs.com/package/dotenv
 */
require('dotenv').config({path: '.env'});

const { application } = require('express');
/**
 * The Express philosophy is to provide small,
 * robust tooling for HTTP servers, making
 * it a great solution for single page applications,
 *  websites, hybrids, or public HTTP APIs.
 */
const express = require('express');
const session = require('express-session');
const app = express();

app.use(session({
  secret: 'something should not be exposed',
  resave: false,
  saveUninitialized: true,
}));

const router = require('./router');
app.use(router);

app.listen(process.env.PORT);
