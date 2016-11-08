var React = require('react');
var ReactDOM = require('react-dom');
var SearchComponent = require('./SearchComponent.js');
var DisplayMovie = require('./DisplayMovie.js');

var ParentComponent = React.createClass({

  handleOnClick: function(title)
{
 $.ajax({
   url:'http://www.omdbapi.com/?s='+title,
   type: 'GET',
   dataType: 'JSON',

   success: function(data)
   {
     if(data.Response==="False"){
       alert(data.Error);
     }
     else {
     this.setState({stateData:data.Search});
     console.log(data.Search);
     }
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
  render:function(){
    return (
      <div>
      <SearchComponent handleOn={this.handleOnClick}/>
      <br/>
      <br/>
      <br/>
      <DisplayMovie movieObj={this.state.stateData}/>
      </div>
    )
  }
});
module.exports = ParentComponent;
