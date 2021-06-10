const mongoose = require('mongoose');

const MONGO_URI =
  'mongodb+srv://jefzheng:codesmith@jobtable.i2jvo.mongodb.net/applicationsDB?retryWrites=true&w=majority';

mongoose
  .connect(MONGO_URI, {
    // options for the connect method to parse the URI
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // sets the name of the DB that our collections are part of
    dbName: 'jobtable',
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
