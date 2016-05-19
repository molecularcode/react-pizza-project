var React = require('react');
//var Link = require('react-router').Link;
// data storage module
var data = require('../data');
// react component for checkbox groups
var CheckboxGroup = require('react-checkbox-group');
// pass events to be used universally
var event = require('../events');

var toppingToppings = [{
  toppingName: 'mozzarella',
  toppingImg: '../images/ingredients/mozzarella.jpg',
  toppingPrice: 1.99
}, {
  toppingName: 'parmesan',
  toppingImg: '../images/ingredients/parmesan.jpg',
  toppingPrice: 1.99
}, {
  toppingName: 'goatsCheese',
  toppingImg: '../images/ingredients/goatsCheese.jpg',
  toppingPrice: 2.99
}, {
  toppingName: 'tomatoes',
  toppingImg: '../images/ingredients/tomatoes.jpg',
  toppingPrice: 0.99
}, {
  toppingName: 'spinach',
  toppingImg: '../images/ingredients/spinach.jpg',
  toppingPrice: 1.50
}, {
  toppingName: 'olives',
  toppingImg: '../images/ingredients/olives.jpg',
  toppingPrice: 1.50
}, {
  toppingName: 'peppers',
  toppingImg: '../images/ingredients/peppers.jpg',
  toppingPrice: 1.50
}, {
  toppingName: 'mushrooms',
  toppingImg: '../images/ingredients/mushrooms.jpg',
  toppingPrice: 1.50
}, {
  toppingName: 'pineapple',
  toppingImg: '../images/ingredients/pineapple.jpg',
  toppingPrice: 1.50
}, {
  toppingName: 'onions',
  toppingImg: '../images/ingredients/onions.jpg',
  toppingPrice: 1.50
}, {
  toppingName: 'bacon',
  toppingImg: '../images/ingredients/bacon.jpg',
  toppingPrice: 2.99
}, {
  toppingName: 'pepperoni',
  toppingImg: '../images/ingredients/pepperoni.jpg',
  toppingPrice: 2.99,
}, {
  toppingName: 'ham',
  toppingImg: '../images/ingredients/ham.jpg',
  toppingPrice: 2.99
}];

var Custom = React.createClass({
  getInitialState: function() {
    var info = data.getData('info') || {};
    return {
      toppings: [],
      totalPrice: 0
    };
  },
  continueOrder: function() {
    data.setData('info', this.state);
    // this way of programmatically navigating is deprecated. it still works in the current react-router version but will become unavailable soon
    this.props.history.push('/done');
  },
  render: function() {
    // the checkboxes can be arbitrarily deep. They will always be fetched and
    // the `name` attribute attached correctly. `value` is optional
    return (
      <div className="main choosePage">
        <h1 className="pageTitle">Please choose up to 4 toppings from the selection below</h1>
        <p className="alignCenter">the base price is $10, plus your chosen toppings</p>
        <CheckboxGroup
          name="toppings"
          value={this.state.toppings}
          onChange={this.toppingsChanged}
        >
          {
            Checkbox => (
              <form className="toppings">
                {toppingToppings.map(function(topping) {
                  return (
                  <div className="topping" key={topping.toppingName}>
                  <img src={topping.toppingImg} />
                    <label>
                      <Checkbox value={topping}/> <b className="capitalize">{topping.toppingName.split(/(?=[A-Z])/).join(" ")}</b> <span className="price">${topping.toppingPrice.toFixed(2)}</span>
                    </label>
                  </div>
                  );
                })}
                {this.state.tooMany ? <p>You can select a maximum of 4 toppings</p> : null}
                <button onClick={this.continueOrder} type="button">Complete order</button><span className="totalPrice">Order total = ${(10+this.state.totalPrice).toFixed(2)}</span>
              </form>
            )
          }
        </CheckboxGroup>
      </div>
    );
  },
  toppingsChanged: function(newToppings) {
    // topping prices and total
    var toppingPrices = [];
    var totalPrice = newToppings.map(function(obj) {
      toppingPrices.push(obj.toppingPrice);
      return toppingPrices;
    });
    var sumPrices = toppingPrices.reduce(function(pp, cp) { 
      return pp + cp;
    }, 0);
    // disable checkboxes and display msg if user trys to select more than 4 toppings
    if (newToppings.length <= 4 ) {
      this.setState({
        totalPrice: sumPrices,
        toppings: newToppings
      });
    }
    else {
      event.emit('show_message', {message:"You may select a maximum of 4 toppings", duration: 2000});
    }
  }
});

module.exports = Custom;