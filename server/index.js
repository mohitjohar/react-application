const url = require('url');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const pino = require('express-pino-logger')();

const port = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);

// simple route
app.get('/', (req, res) => {
  const adr = 'http://localhost:3001/mohit_kumar?year=2017&month=february';
  const q = url.parse(adr, true);
  res.send({ pathname: q.pathname, host: q.host, search: q.search });
  res.end();
});

require('./app/routes/customer.router')(app);

app.listen(port);
