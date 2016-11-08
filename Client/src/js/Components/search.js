var React = require('react');
var ParentComponent = require('./ParentComponent.js');

var searchComponent = React.createClass({

    render: function() {
        return (
          <div>
          <ParentComponent />
        </div>
      )
    }
});

module.exports = searchComponent;
