var React = require('react');
var MovieDisplayBox = require('./MovieDisplayBox.js');

var DisplayMovie = React.createClass({
  render : function () {
    var movieArray = this.props.movieObj.map(function(movie) {
      return(
        <MovieDisplayBox movieObj={movie} title={movie.Title} year={movie.Year} imdbID={movie.imdbID} poster={movie.Poster} />
      )
    });
    return(
      <div>
      {movieArray}
      </div>
    )
  }
});

module.exports = DisplayMovie;
