const mongoose = require('mongoose');

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
