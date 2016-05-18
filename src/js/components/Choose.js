var React = require('react');
//var Link = require('react-router').Link;
// data storage module
var data = require('../data');
// react component for checkbox groups
var CheckboxGroup = require('react-checkbox-group');

var pizzaOptions = [{
  pizzaName: 'customToppings',
  pizzaImg: '../images/customToppings.jpg'
}, {
  pizzaName: 'cheese',
  pizzaImg: '../images/cheese.jpg',
  pizzaPrice: 17.99
}, {
  pizzaName: 'pepperoni',
  pizzaImg: '../images/pepperoni.jpg',
  pizzaPrice: 18.99
}, {
  pizzaName: 'hawaiian',
  pizzaImg: '../images/hawaiian.jpg',
  pizzaPrice: 18.99
}, {
  pizzaName: 'allDressed',
  pizzaImg: '../images/allDressed.jpg',
  pizzaPrice: 19.99
}, {
  pizzaName: 'quebecoise',
  pizzaImg: '../images/quebecoise.jpg',
  pizzaPrice: 19.99
}, {
  pizzaName: 'vegetarian',
  pizzaImg: '../images/vegetarian.jpg',
  pizzaPrice: 19.99
}, {
  pizzaName: 'mexican',
  pizzaImg: '../images/mexican.jpg',
  pizzaPrice: 19.99
}, {
  pizzaName: 'meatLovers',
  pizzaImg: '../images/meatLovers.jpg',
  pizzaPrice: 20.99
}, {
  pizzaName: 'phillysteak',
  pizzaImg: '../images/phillysteak.jpg',
  pizzaPrice: 20.99
}];

var Choose = React.createClass({
  getInitialState: function() {
    var info = data.getData('info') || {};
    return {
      pizzas: [{
        pizzaName: info.pizzaName || '',
        pizzaPrice: info.pizzaPrice || ''
        }],
      buttonText: 'Complete order'
    };
  },
  continueOrder: function() {
    data.setData('info', this.state);
    // this way of programmatically navigating is deprecated. it still works in the current react-router version but will become unavailable soon
    var result = this.state.pizzas.filter(function( obj ) {
      return obj.pizzaName === 'Choose toppings';
    });
    if (this.state.pizzas.length !== 0 && result) {
      this.props.history.push('/custom');
    }
    else {
      this.props.history.push('/done');
    }
  },
  render: function() {
    // the checkboxes can be arbitrarily deep. They will always be fetched and
    // the `name` attribute attached correctly. `value` is optional
    return (
      <div className="main choosePage">
        <h1 className="pageTitle">Please choose from our selection of 16" pizzas</h1>
        <CheckboxGroup
          name="pizzas"
          value={this.state.pizza}
          onChange={this.pizzasChanged}
        >
          {
            Checkbox => (
              <form className="pizzas">
                {pizzaOptions.map(function(pizza) {
                  return (
                  <div className="pizza" key={pizza.pizzaName}>
                  <img src={pizza.pizzaImg} />
                    <label>
                      <Checkbox value={pizza}/> <b className="capitalize">{pizza.pizzaName.split(/(?=[A-Z])/).join(" ")}</b> ${pizza.pizzaPrice}
                    </label>
                  </div>
                  );
                })}
                <button onClick={this.continueOrder} type="button">{this.state.buttonText}</button>
              </form>
            )
          }
        </CheckboxGroup>
      </div>
    );
  },
  pizzasChanged: function(newPizzas) {
    console.log(data.getData('info'));
    var result = newPizzas.filter(function( obj ) {
      return obj.pizzaName === 'Choose toppings';
    });
    if (result) {
      this.setState({
        buttonText: 'Choose toppings'
      });
    }
    this.setState({
      pizzas: newPizzas
    });
  }
});

module.exports = Choose;