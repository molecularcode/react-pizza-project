var React = require('react');

var Done = React.createClass({
  render: function() {
    
    return(
      <div className="main donePage">
        <h1 className="pageTitle">Confirmation</h1>
        <div className="container">
          <div className="info">
            <h3>Your Information</h3>
          </div>
          <div className="order">
            <h3>Your Order</h3>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Done;