var React = require('react');
//var Link = require('react-router').Link;
// data storage module
var data = require('../data');
// react component for checkbox groups
var CheckboxGroup = require('react-checkbox-group');
// enable ajax to request data from our server
var request = require('superagent');

var Choose = React.createClass({
  getInitialState: function() {
    return {
      pizzas: [],
      pizzaChoice: [],
      buttonText: 'Complete order'
    };
  },
  componentDidMount: function() {
    var that = this;
    this.setState({
      loading: true
    });
    request
    .get('/pizzas')
    .end(function(err, result) {
      if(result){
        that.setState({
          pizzas: result.body,
          loading: false
        });
      }
    });
  },
  continueOrder: function() {
    data.setData('pizzas', this.state.pizzaChoice);
    // this way of programmatically navigating is deprecated. it still works in the current react-router version but will become unavailable soon
    var result = this.state.pizzaChoice.filter(function(obj) {
      return obj.pizzaName === 'customToppings';
    });
    console.log(result, 'result');
    if (this.state.pizzaChoice.length !== 0 && result.length > 0) {
      this.props.history.push('/custom');
    }
    else {
      this.props.history.push('/done');
    }
  },
  render: function() {
    console.log(data.getData());
    // the checkboxes can be arbitrarily deep. They will always be fetched and
    // the `name` attribute attached correctly. `value` is optional
    return (
      <div className="main choosePage">
        <h1 className="pageTitle">Please choose from our selection of 16" pizzas</h1>
        {this.state.loading ? <p>Please wait while the pizzas load... they're worth waiting for...</p> : null}
        <CheckboxGroup
          name="pizzas"
          value={this.state.pizzaChoice}
          onChange={this.pizzasChanged}
        >
          {
            Checkbox => (
              <form className="pizzas">
                {this.state.pizzas.map(function(pizza){
                  return (
                    <div className="pizza" key={pizza.pizzaName}>
                      <img src={pizza.pizzaImg} />
                      <label>
                        <Checkbox value={pizza}/> <b className="capitalize">{pizza.pizzaName.split(/(?=[A-Z])/).join(" ")}</b> ${pizza.pizzaPrice}
                      </label>
                      <p>{pizza.pizzaToppings}</p>
                    </div>
                  );
                })}
                <div className="clear"><button onClick={this.continueOrder} type="button">{this.state.buttonText}</button></div>
              </form>
            )
          }
        </CheckboxGroup>
      </div>
    );
  },
  pizzasChanged: function(newPizzas) {
    var result = newPizzas.filter(function( obj ) {
      return obj.pizzaName === 'customToppings';
    });
    console.log(result);
    if (result.length > 0) {
      this.setState({
        buttonText: 'Choose your toppings'
      });
    }
    this.setState({
      pizzaChoice: newPizzas
    });
  }
});

module.exports = Choose;