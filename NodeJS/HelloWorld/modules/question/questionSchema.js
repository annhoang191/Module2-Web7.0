const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

let questionSchema = new Schema({
  _id : {
    type : Number
  },
  content : {
    type : String,
    require : true,
    default : ''
  },
  yes : Number,
  no  : Number
}, {collection: 'questions'});

module.exports = mongoose.model('questions' , questionSchema);
