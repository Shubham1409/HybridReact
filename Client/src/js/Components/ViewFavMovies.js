var React = require('react');
var FavDisplayMovie = require('./FavDisplayMovie.js');
var ViewFavMovies = React.createClass({

   getInitialState: function () {
     return {
       stateData : []
     };
   },
  componentDidMount: function()
{
 $.ajax({
   url:'http://localhost:8080/movies/savedmovies',
   type: 'GET',
   dataType: 'JSON',

   success:function(data){
     this.setState({stateData:data});
              }.bind(this),
   error: function(err)
   {
     console.log(err);
   }.bind(this)
 });
 },
 deletemovie:function(imdbID){
   var temp = this.state.stateData;
   j=-1;
   for(var i=0;i<temp.length;i++){
     if(temp[i].imdbID==imdbID){
       j=i;
       break;
     }
   }
   if(j>-1){
     temp.splice(j,1);
   }
   this.setState({stateData:temp})
 },
 updateReRender:function(d){
   var temp = this.state.stateData;
   alert(d.imdbID);
   for(var i=0;i<temp.length;i++){
     if(temp[i].imdbID==d.imdbID){
       temp[i].Comments=d.Comments;
       break;
     }
   }
   this.setState({stateData:temp})
   console.log("Hello")
 },
    render: function() {
        return (
          <div>
          <FavDisplayMovie updateReRender={this.updateReRender} deleteM={this.deletemovie} movieObj={this.state.stateData} />
        </div>
      )
    }
});

module.exports = ViewFavMovies;
