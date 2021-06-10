const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const apiRouter = require('./routes/api');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../../dist')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', apiRouter);

app.use((req, res) => res.status(404).send('Error: Page not found'));
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = { ...defaultErr, ...err };
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

const { MONGO_DB_URI } = process.env;
const { DB_NAME } = process.env;

mongoose
  .connect(MONGO_DB_URI, {
    // options for the connect method to parse the URI
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // sets the name of the DB that our collections are part of
    dbName: DB_NAME,
  })
  .then(() => console.log('Connected to Mongo DB.'))
  .then(() =>
    app.listen(PORT, () => {
      console.log(`Server listening on port: ${PORT}`);
    }),
  )
  .catch((err) => console.log(err));

module.exports = app;
