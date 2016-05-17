var React = require('react');
var Link = require('react-router').Link;

// home "page"
var Home = React.createClass({
  render: function() {
    return (
      <div className="homePage">
        <h1 className="pageTitle">Welcome to Reactive Pizza</h1>
        <Link to="/order" className="btn alignCenter">Order</Link>
      </div>
    );
  }
});

module.exports = Home;