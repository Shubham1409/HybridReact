var React = require('react');
var ReactDOM = require('react-dom');
var ChildComponent = require('./Components/ChildComponent.js');
var DisplayMovie = require('./Components/DisplayMovie.js');

var MainComponent = React.createClass({

  handleOnClick: function(title)
{
 $.ajax({
   url:'http://www.omdbapi.com/?s='+title,
   type: 'GET',
   dataType: 'JSON',

   success: function(data)
   {
     this.setState({stateData:data.Search});
     console.log(data.Search);
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
      <ChildComponent handleOn={this.handleOnClick}/>
      <DisplayMovie movieObj={this.state.stateData}/>
      </div>
    )
  }
});
//when the method is called, this method gets instantiated, and returns the virtual DOM. after getting V DOM, it renders and display this div tagfrom index.
ReactDOM.render(<MainComponent />,
document.getElementById('app'));
