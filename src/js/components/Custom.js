var React = require('react');
var Link = require('react-router').Link;

// Custom "page"
var Custom = React.createClass({
  render: function() {
    return (
      <div>
        <h1 className="pageTitle">Custom Page!</h1>
        <p>Welcome to the Custom page!</p>
      </div>
    );
  }
});

module.exports = Custom;