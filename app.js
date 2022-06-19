/**
 * Dotenv is a zero-dependency module
 * that loads environment variables
 * from a .env file into process.env.
 * https://www.npmjs.com/package/dotenv
 */
require('dotenv').config();

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  // deprecated `res.send`
  // res.send(200);
  res.sendStatus(200);
});

app.listen(process.env.PORT || 3000);
