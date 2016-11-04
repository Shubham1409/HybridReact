var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var moviedetailsSchema = new Schema({

  Title:String,
  Year:String,
  imdbID:String,
  Poster:String,
  Type:String
});

movieDb  = mongoose.model('MovieDetails', moviedetailsSchema);

module.exports = movieDb;
