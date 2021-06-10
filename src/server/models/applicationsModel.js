const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
console.log(process.env.MONGO_DB_URI);
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
  .catch((err) => console.log(err));

const { Schema } = mongoose;

const applicationSchema = new Schema({
  company: {
    type: String,
    required: true,
  },
  location: String,
  position: String,
  status: String,
  stage: String,
  remote: Boolean,
});
const Application = mongoose.model('application', applicationSchema);

module.exports = { Application };
