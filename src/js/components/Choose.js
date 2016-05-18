var React = require('react');
var Link = require('react-router').Link;
// data storage module
var data = require('../data');
// require react component for checkbox groups
var CheckboxGroup = require('react-checkbox-group');

var pizzaOptions = [{
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
    return {
      pizzas: []
    };
  },

  // componentDidMount: function() {
  //   // Add orange and remove watermelon after 5 seconds
  //   setTimeout(function() {
  //     this.setState({
  //       value: ['apple','orange']
  //     });
  //   }.bind(this), 5000);
  // },

  render: function() {
    // the checkboxes can be arbitrarily deep. They will always be fetched and
    // attached the `name` attribute correctly. `value` is optional
    return (
      <div className="main choosePage">
        <h1 className="pageTitle">Please choose from our selection of 16" pizzas</h1>
        <CheckboxGroup
          name="pizzas"
          value={this.state.pizzas}
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
                      <Checkbox value={pizza.pizzaName}/> <b className="capitalize">{pizza.pizzaName.split(/(?=[A-Z])/).join(" ")}</b> ${pizza.pizzaPrice}
                    </label>
                  </div>
                  );
                })}
              </form>
            )
          }
        </CheckboxGroup>
      </div>
    );
  },
  pizzasChanged: function(newPizzas) {
    this.setState({
      pizzas: newPizzas
    });
  }
});

module.exports = Choose;