'use strict ';


const express = require('express');
const notFound = require('./error-handlers/404')
const { next } = require('process');
const errorHandler = require('./error-handlers/500');
const stamper = require('./middlewear/stamper');
const logger = require('./middleware/logger.js');
const PORT = process.env.PORT || 3002;

const app = express();

function start() {
  app.listen(PORT, () => console.log(`listening on port ${PORT}`));
}



app.get('/person', stamper, (req, res) => {

  console.log('time is: req.time');
  if (!req.query.personName) {
    next();
  }
  const message = `Hello, ${req.query.personName}`;
  const output = { message }

  res.status(200).send(JSON.stringify(output));
});
app.use('*', notFound); 
app.use(errorHandler);

module.exports = { start, app }