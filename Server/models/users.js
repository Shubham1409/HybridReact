var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userdetailsSchema = new Schema({

  username:String,
  password:String
});

module.exports = mongoose.model('UserDetails', userdetailsSchema);
