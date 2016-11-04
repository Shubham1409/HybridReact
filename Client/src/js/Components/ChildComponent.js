var React = require('react');

var ChildComponent = React.createClass({

  submit: function(e){
    e.preventDefault();
    var movieTitle = this.refs.Movie.value;
    this.props.handleOn(movieTitle);
  },
  render: function() {
    return (
      <div className="container-fluid">
	<div className="row">
		<div className="col-md-12">
			<nav className="navbar navbar-default navbar-inverse" role="navigation">
				<div className="navbar-header">

					<button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
						 <span className="sr-only">Toggle navigation</span><span className="icon-bar"></span><span className="icon-bar"></span><span className="icon-bar"></span>
					</button> <a className="navbar-brand" href="index.html">MOVIES SHOWCASE</a>
				</div>

				<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
					<ul className="nav navbar-nav">
						<li className="active">
							<a href="#">Link</a>
						</li>
						<li>
							<a href="#">Link</a>
						</li>
						<li className="dropdown">
							 <a href="#" className="dropdown-toggle" data-toggle="dropdown">Dropdown<strong className="caret"></strong></a>
							<ul className="dropdown-menu">
								<li>
									<a href="#">Action</a>
								</li>
								<li>
									<a href="#">Another action</a>
								</li>
								<li>
									<a href="#">Something else here</a>
								</li>
								<li className="divider">
								</li>
								<li>
									<a href="#">Separated link</a>
								</li>
								<li className="divider">
								</li>
								<li>
									<a href="#">One more separated link</a>
								</li>
							</ul>
						</li>
					</ul>
					<form onSubmit={this.submit} className="navbar-form navbar-left">
						<div className="form-group">
							<input type="text" ref='Movie' className="form-control"/>
						</div>
						<button className="btn btn-default">
							Search <span className="glyphicon glyphicon-search"></span>
						</button>
					</form>
				</div>
			</nav>
		</div>
	</div>
</div>
    )
  }
});

module.exports = ChildComponent;
