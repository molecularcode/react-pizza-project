var React = require('react');
var Link = require('react-router').Link;

// Done "page"
var Done = React.createClass({
  render: function() {
    return (
      <div>
        <h1 className="pageTitle">Done Page!</h1>
        <p>Welcome to the Done page!</p>
      </div>
    );
  }
});

module.exports = Done;