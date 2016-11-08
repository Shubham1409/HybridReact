var React = require('react');

var SearchComponent = React.createClass({

  submit: function(e){
    e.preventDefault();
    var movieTitle = this.refs.Movie.value;
    this.props.handleOn(movieTitle);
  },
  render: function() {
    return (
      <div className="container">
    <form onSubmit={this.submit} role="form" id="NPMSearchForm" action="#">
        <h1 className="form-signin-heading">Movie Search Engine</h1>
        <div className="input-group input-group-lg">
            <span className="input-group-addon">Keywords</span>
            <input type="text" ref='Movie' className="form-control" placeholder="Ex: Mission Impossible" name="keywords"></input>
        </div>
        <br></br>
        <button className="btn btn-lg btn-primary btn-block" type="submit">Search</button>
        <br></br>
    </form>
      </div>
    )
  }
});

module.exports = SearchComponent;
