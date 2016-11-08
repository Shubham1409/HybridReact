var React=require('react');

var FavouriteDisplayBox=React.createClass({

  updateMovie: function(){
    alert(this.props.Comments);
    var newComments = prompt("Enter Your Comments About The Movie",this.props.Comments);
    if(newComments!=null){
      var obj = {imdbID:this.props.imdbID,Comments:newComments};
      console.log(obj);
      var updateRender = this.props.updateRender.bind(null,obj);
      $.ajax({
        url:'http://localhost:8080/movies/update',
        type: 'PUT',
        data: obj,

        success: function(data)
        {
          updateRender();
          console.log("hello");
        }.bind(this),
        error: function(err)
        {
          console.log(err);
        }.bind(this)
      });
    }
  },

  deletemovie: function()
{
  //alert(title);
  var imdbID = this.props.imdbID;
  alert(imdbID)
  var deleteFromId = this.props.del.bind(null,imdbID);
 $.ajax({
   url:'http://localhost:8080/movies/delete/'+imdbID,
   type: 'DELETE',
   dataType: 'JSON',

   success: function(data)
   {
     deleteFromId();
     console.log(data);
   }.bind(this),
   error: function(err)
   {
     console.log(err);
   }.bind(this)
 });
 },
  getInitialState: function () {
    return {
      stateData : []
    };
  },
    render: function(){
      return(
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
      <label className="col-sm-1 control-label" htmlFor="formGroupInputLarge">COMMENTS:</label>
      <div className="col-sm-11">
          <input className="form-control" id="disabledInput" type="text" placeholder={this.props.Comments} disabled></input><p></p>
      </div>
      </div>
        <div className="form-group form-group-sm">
      <label className="col-sm-1 control-label" htmlFor="formGroupInputLarge"></label>
      <div className="col-sm-11">
            <button onClick={this.updateMovie} className="btn btn-warning btn-sm">Update Movie Details <span className="glyphicon glyphicon-check"></span></button>&emsp;&emsp;
            <button onClick={this.deletemovie} className="btn btn-danger btn-sm">DELETE <span className="glyphicon glyphicon-trash"></span></button>
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

    module.exports=FavouriteDisplayBox;
