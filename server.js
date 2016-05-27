'use strict';

const chalk = require('chalk');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const path = require('path');

const pg = require('pg');
const connectionString = require(path.join(__dirname, './', 'config'));
const client = new pg.Client(connectionString);

const express = require('express');
const app = express();

const routes = require('./routes/');

const PORT = process.env.PORT || 3000;

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade');

app.use(express.static(path.join(__dirname, './', 'public')));

app.use(bodyParser.urlencoded({extended: false}));

app.use(methodOverride('_method'));

app.use(routes);

// app.locals.title = '';

// app.get('/', (req, res) => {
//   res.render('index');
// });

client.connect((err) => {
  if (err) throw err;

  app.listen(PORT, () => {
    console.log(chalk.magenta.bold('Node.js server started. ') + chalk.red.bold.bgYellow(`Listening on PORT ${PORT}`));
  });
  console.log(client.connectionParameters)
});
