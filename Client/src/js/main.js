var React = require('react');
var ReactDOM = require('react-dom');
var {browserHistory, Route, Router, IndexRoute,hasHistory} = require('react-router');
var aboutComponent = require('./Components/about.js');
var searchComponent = require('./Components/search.js');
var HomeComponent = require('./Components/Home.js');
var ViewFavMovies = require('./Components/ViewFavMovies.js');
var ParentComponent = require('./Components/ParentComponent.js');
var Navbar = require('./Components/Navbar.js');


var MainComponent = React.createClass({
  render:function(){
    return (
      <div>
      <Navbar />
      {this.props.children}
      </div>
    );
  }
});
//when the method is called, this method gets instantiated, and returns the virtual DOM. after getting V DOM, it renders and display this div tagfrom index.
ReactDOM.render(
  <Router history = {browserHistory}>
  <Route path="/" component={MainComponent}>
  <IndexRoute component={HomeComponent}/>
  <Route path="/about" component={aboutComponent}/>
  <Route path="/search" component={searchComponent}/>
  <Route path="/home" component={HomeComponent}/>
  <Route path="/savedmovies" component={ViewFavMovies}/>
  </Route>

  </Router>,document.getElementById('app'));
