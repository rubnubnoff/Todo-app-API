const express = require('express');
const app = express();
const config = require('config');
const mongoose = require('mongoose');
const logger = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const winston = require('./config/winston');

const users = require('./routes/users');
const tasks = require('./routes/tasks');

const errorHandlerMiddleware = require('./middleware/errorHandlerMiddleware');

if (!config.get('jwtPrivateKey')) {
    throw new Error('FATAL ERROR: jwtPrivateKey is not defined.');
  }

mongoose.connect(config.get('db'), { useNewUrlParser: true })
  .then(() => {
      winston.info('Connected to MongoDB...');
      app.use('/users', users);
      app.use('/tasks', tasks);
    })
  .catch((e) => winston.error(e.message));
mongoose.set('useCreateIndex', true);

app.use(logger('combined', { stream: winston.stream })); 
app.use(cors());

app.use(bodyParser.json({ limit: '10kb' }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(errorHandlerMiddleware);

const port = process.env.port || 3000;
app.listen(port, () => winston.info(`Listening on port ${port}...`));