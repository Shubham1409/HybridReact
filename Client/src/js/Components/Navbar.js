var React = require('react');
var {Link} = require('react-router');
var Navbar = React.createClass({

  render : function(){
    return(
      <div className="container-fluid">
	<div className="row">
		<div className="col-md-12">
			<nav className="navbar navbar-default navbar-inverse" role="navigation">
				<div className="navbar-header">
					<button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
						 <span className="sr-only">Toggle navigation</span><span className="icon-bar"></span><span className="icon-bar"></span><span className="icon-bar"></span>
					</button> <a className="navbar-brand" href="#">MOVIES SHOWCASE</a>
				</div>
				<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav navbar-right">
        <li><Link to="/home">HOME</Link></li>
        <li><Link to="/search">SEARCH</Link></li>
        <li><Link to="/savedmovies">VIEW MOVIES</Link></li>
        <li><Link to="/about">ABOUT</Link></li>
        </ul>
				</div>
			</nav>
		</div>
	</div>
</div>
    );
  }
});

module.exports = Navbar;
<form onSubmit={this.submit} className="navbar-form navbar-left">
  <div className="form-group">
    <input type="text" ref='Movie' className="form-control"/>
  </div>
  <button className="btn btn-default">
    Search <span className="glyphicon glyphicon-search"></span>
  </button>
</form>
