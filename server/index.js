const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const pino = require('express-pino-logger')();

const port = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);

// simple route
app.get('/', (req, res) => {
  const array = ['mohit', 'kumar', 'rohit'];
  res.send(array);
  res.end();
});

require('./app/routes/customer.router')(app);

app.listen(port);
