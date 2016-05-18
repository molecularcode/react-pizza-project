var React = require('react');
var Link = require('react-router').Link;
// data storage module
var data = require('../data');
// require react component for checkbox groups
var CheckboxGroup = require('react-checkbox-group');

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
    console.log(this.state);
    // the checkboxes can be arbitrarily deep. They will always be fetched and
    // attached the `name` attribute correctly. `value` is optional
    return (
      <div>
        <h1 className="pageTitle">Choose Page!</h1>
        <p>Welcome to the Choose page!</p>
        <CheckboxGroup
          name="pizzas"
          value={this.state.pizzas}
          onChange={this.pizzasChanged}
        >
          {
            Checkbox => (
              <form>
                <label>
                  <Checkbox value="cheese"/> Cheese
                </label>
                <label>
                  <Checkbox value="pepperoni"/> Pepperoni
                </label>
                <label>
                  <Checkbox value="allDressed"/> All Dressed
                </label>
                <label>
                  <Checkbox value="hawaiian"/> Québecoise
                </label>
                <label>
                  <Checkbox value="hawaiian"/> Hawaiian Pizza
                </label>
                <label>
                  <Checkbox value="hawaiian"/> Hawaiian Pizza
                </label>
                <label>
                  <Checkbox value="hawaiian"/> Hawaiian Pizza
                </label>
                <label>
                  <Checkbox value="hawaiian"/> Hawaiian Pizza
                </label>
                <label>
                  <Checkbox value="hawaiian"/> Hawaiian Pizza
                </label>
                <label>
                  <Checkbox value="hawaiian"/> Hawaiian Pizza
                </label>
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