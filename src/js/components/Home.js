var React = require('react');
var Link = require('react-router').Link;

// home "page"
var Home = React.createClass({
  render: function() {
    return (
      <div className="homePage">
        <div className="light">
          <h1 className="pageTitle">Welcome to Reactive Pizza</h1>
          <Link to="/order" className="btn">Order</Link>
        </div>
      </div>
    );
  }
});

module.exports = Home;