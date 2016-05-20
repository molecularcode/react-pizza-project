var React = require('react');
// data storage module
var data = require('../data');
var Link = require('react-router').Link;

var Done = React.createClass({
  getInitialState: function() {
    // retrive from data storage object
    var customer = data.getData('customer') || {};
    return {
      customer: {
        customerName: customer.name || '',
        email: customer.email || '',
        phone: customer.phone || '',
        street: customer.street || '',
        city: customer.city || '',
        province: customer.province || '',
        postalcode: customer.postalcode || ''
      },
      pizzaChoice: data.getData('pizzas') || [],
      toppingChoice: data.getData('toppings') || [],
     };
  },
  render: function() {
    console.log(data.getData());
    var customer = this.state.customer;
    var pizzas = this.state.pizzaChoice;
    var toppings = this.state.toppingChoice;
    var pizzaPrices = pizzas.map(function(pizza){
      return (
        pizza.pizzaPrice
      );
    });
    var sumPizzas = pizzaPrices.reduce(function(pp, cp) { 
      return pp + cp;
    }, 0);
    var toppingPrices = toppings.map(function(topping){
      return (
        topping.toppingPrice
      );
    });
    if (toppingPrices.length > 0) {
      var sumToppings = toppingPrices.reduce(function(pp, cp) { 
        return pp + cp;
      }, 0);
    } else {
      sumToppings = 0;
    }
    return(
      <div className="main donePage">
        <h1 className="pageTitle">Confirmation</h1>
        <div className="container">
          <div className="info">
            <h3>Your Information <Link to="/order">(edit)</Link></h3>
            <ul>
              <li><b>Name:</b> {customer.customerName}</li>
              <li><b>Phone:</b> {customer.phone}</li>
              <li><b>Email:</b> {customer.email}</li>
              <li><b>Delivery Address:</b></li>
              <li>{customer.street}</li>
              <li>{customer.city}</li>
              <li>{customer.province}</li>
              <li>{customer.postalcode}</li>
            </ul>
          </div>
          <div className="order">
            <h3>Your Order</h3>
            <dl>
              <dt>Pizza(s): <Link to="/choose">(edit)</Link></dt>
              {pizzas.map(function(pizza){
                return (
                  <dd className="capitalize">{pizza.pizzaName.split(/(?=[A-Z])/).join(" ")} - <i>${pizza.pizzaPrice.toFixed(2)}</i></dd>
                );
              })}
              <dt>Toppings(s): <Link to="/custom">(edit)</Link></dt>
              {toppings.map(function(topping) {
                return (
                   <dd className="capitalize">{topping.toppingName.split(/(?=[A-Z])/).join(" ")} - <i>${topping.toppingPrice.toFixed(2)}</i></dd>
                );
              })}
            </dl>
            <p className="totalPrice">${(sumPizzas + sumToppings).toFixed(2)}</p>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Done;