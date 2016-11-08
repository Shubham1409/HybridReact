var React = require('react');

var HomeComponent = React.createClass({

  render: function() {
      return (
        <div className="container-fluid">
	<div className="row">
		<div className="col-md-12">
			<div className="carousel slide" id="carousel-123340">
				<ol className="carousel-indicators">
					<li className="active" data-slide-to="0" data-target="#carousel-123340">
					</li>
					<li data-slide-to="1" data-target="#carousel-123340">
					</li>
					<li data-slide-to="2" data-target="#carousel-123340">
					</li>
				</ol>
				<div className="carousel-inner">
					<div className="item active">
						<img alt="Carousel Bootstrap First" src="../css/a.jpg"  />
						<div className="carousel-caption">
							<h4>
								First Thumbnail label
							</h4>
							<p>
								Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.
							</p>
						</div>
					</div>
					<div className="item">
						<img alt="Carousel Bootstrap Second" src="../css/b.jpg" />
						<div className="carousel-caption">
							<h4>
								Second Thumbnail label
							</h4>
							<p>
								Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.
							</p>
						</div>
					</div>
					<div className="item">
						<img alt="Carousel Bootstrap Third" src="../css/c.jpg" />
						<div className="carousel-caption">
							<h4>
								Third Thumbnail label
							</h4>
							<p>
								Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.
							</p>
						</div>
					</div>
				</div> <a className="left carousel-control" href="#carousel-123340" data-slide="prev"><span className="glyphicon glyphicon-chevron-left"></span></a> <a className="right carousel-control" href="#carousel-123340" data-slide="next"><span className="glyphicon glyphicon-chevron-right"></span></a>
			</div>
		</div>
	</div>
</div>
    )
  }
});

module.exports = HomeComponent;
