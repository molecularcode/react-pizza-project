var React = require('react');
var Link = require('react-router').Link;

var Done = React.createClass({
  render: function() {
    
    return(
      <div className="main donePage">
      <h1 className="pageTitle">Done Page!</h1>
      <p>Welcome to the Done page!</p>
    </div>
      )
    
  }
});

module.exports = Done;