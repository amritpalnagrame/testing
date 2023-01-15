const mongoose = require('mongoose');
const { Schema } = mongoose;

const developerSchema = new Schema({
      name:  String,
      role:  String,
});

const Developer = mongoose.model('Developer', developerSchema);

module.exports = Developer;
