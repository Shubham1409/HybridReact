var React=require('react');

var MovieDisplayBox=React.createClass({

  buttonClicked(){
    var link = "http://www.imdb.com/title/"+this.props.imdbID;
    window.open(link);
  },
  addMovies(){
    alert("hello");
    var movieToStore=this.props.movieObj;
    $.ajax({
      url:'http://localhost:8080/movies/add',
      type: 'POST',
      data:movieToStore,

      success: function(data)
      {
       alert("Movie successfully stored");
      console.log(data.Search);
      }.bind(this),
      error: function(err)
      {
        console.log(err);
      }.bind(this)
    });
  },
  render: function(){
    return (
      <div className="container" id="movieElement">
      <div style={{backgroundColor:'#CCCCCC'}} className="row">
      <div className="col-xs-4">
      <div >
      <img src={this.props.poster}></img></div>
      </div>
      <div className="col-xs-8">
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <div style={{fontSize:'30px'}}>
      <h1>{this.props.title}</h1>
      </div>
      <div className="form-group form-group-sm">
    <label className="col-sm-1 control-label" htmlFor="formGroupInputLarge">ImdbID:</label>
    <div className="col-sm-11">
    <input className="form-control" id="disabledInput" type="text" placeholder={this.props.imdbID} disabled></input><p></p>
    </div>
    </div>
    <div className="form-group form-group-sm">
  <label className="col-sm-1 control-label" htmlFor="formGroupInputLarge">YEAR:</label>
  <div className="col-sm-11">
      <input className="form-control" id="disabledInput" type="text" placeholder={this.props.year} disabled></input><p></p>
  </div>
  </div>
  <div className="form-group form-group-sm">
<label className="col-sm-1 control-label" htmlFor="formGroupInputLarge"></label>
<div className="col-sm-11">
      <button onClick={this.addMovies} className="btn btn-primary btn-sm">ADD <span className="glyphicon glyphicon-check"></span></button>&emsp;&emsp;
      <button onClick={this.buttonClicked} className="btn btn-success btn-sm">Check On IMDB <span className="glyphicon glyphicon-eye-open"></span></button>
</div>
</div>
      </div>
      </div>
      <div className="row">
      <div className="col-md-12">
      <p></p>
      </div>
      </div>
      </div>
    );
  }
});

module.exports=MovieDisplayBox;
