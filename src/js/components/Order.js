var React = require('react');
var Link = require('react-router').Link;

// Order "page"
var Order = React.createClass({
  render: function() {
    return (
      <div className="orderPage">
        <h1 className="pageTitle">Please enter your details</h1>
        <form>
          <input type="text" name="name" placeholder="name"></input>
          <input type="email" name="email" placeholder="email address"></input>
          <input type="tel" name="phone" placeholder="phone number"></input>
          <input type="text" name="street" placeholder="street address"></input>
          <input type="text" name="city" placeholder="city"></input>
          <input type="text" name="province" placeholder="province"></input>
          <input type="text" name="postalcode" placeholder="postal code"></input>
          <Link to="/choose" className="btn alignCenter">Next</Link>
        </form>
      </div>
    );
  }
});

module.exports = Order;