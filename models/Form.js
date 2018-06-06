var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var Form = new Schema({
  name: {
    type: String
  },
  questions: {
    type: Array
  },
  subs_count: {
    type: Number,
    default:0
  },
  submissions: {
    type: Array,
    default:[]
  }

},{
    collection: 'forms'
});

module.exports = mongoose.model('Form', Form);