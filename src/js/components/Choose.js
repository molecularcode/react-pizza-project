var React = require('react');
var Link = require('react-router').Link;

// Choose "page"
var Choose = React.createClass({
  render: function() {
    return (
      <div>
        <h1 className="pageTitle">Choose Page!</h1>
        <p>Welcome to the Choose page!</p>
      </div>
    );
  }
});

module.exports = Choose;