var React = require('react');
var FavouriteDisplayBox = require('./FavouriteDisplayBox.js');

var FavDisplayMovie = React.createClass({
  render : function () {
    var temp = this.props.deleteM;
    var tempUpdate = this.props.updateReRender;
    var FavouritesArray = this.props.movieObj.map(function(movie) {

          return (<FavouriteDisplayBox updateRender={tempUpdate} del={temp} year={movie.Year} imdbID={movie.imdbID} title={movie.Title}
              poster={movie.Poster} Comments={movie.Comments}></FavouriteDisplayBox>);
    });
    return(
      <div>
      {FavouritesArray}
      </div>
    )
  }
});

module.exports = FavDisplayMovie;
