var React = require('react');
// data storage module
var data = require('../data');
// react component for checkbox groups
var CheckboxGroup = require('react-checkbox-group');
// enable ajax to request data from our server
var request = require('superagent');
// pass events to be used universally
var event = require('../events');

var Custom = React.createClass({
  getInitialState: function() {
    return {
      toppings: [],
      toppingChoice: (data.getData('toppings') || []).map(top => top.toppingName),
      totalPrice: 0
    };
  },
  componentDidMount: function() {
    var that = this;
    this.setState({
      loading: true
    });
    request
    .get('/toppings')
    .end(function(err, result) {
      if(result){
        that.setState({
          toppings: result.body,
          loading: false
        });
      }
    });
  },
  continueOrder: function() {
    data.setData('toppings', this.state.toppingChoice.map(choice => this.state.pizzas.find(top => top.toppingName === choice)));
    // this way of programmatically navigating is deprecated. it still works in the current react-router version but will become unavailable soon
    this.props.history.push('/done');
  },
  render: function() {
    console.log(data.getData());
    // the checkboxes can be arbitrarily deep. They will always be fetched and
    // the `name` attribute attached correctly. `value` is optional
    return (
      <div className="main customPage">
        <h1 className="pageTitle">Please choose up to 4 toppings from the selection below</h1>
        <p className="alignCenter">the base price is $10, plus your chosen toppings</p>
        {this.state.loading ? <p>Please wait while the toppings load... they're worth waiting for...</p> : null}
        <CheckboxGroup
          name="toppings"
          value={this.state.toppingChoice}
          onChange={this.toppingsChanged}
        >
          {
            Checkbox => (
              <form className="toppings">
                {this.state.toppings.map(function(topping){
                  return (
                  <div className="topping" key={topping.toppingName}>
                  <img src={topping.toppingImg} />
                    <label>
                      <Checkbox value={topping.toppingName}/> <b className="capitalize">{topping.toppingName.split(/(?=[A-Z])/).join(" ")}</b> <span className="price">${topping.toppingPrice.toFixed(2)}</span>
                    </label>
                  </div>
                  );
                })}
                <div className="clear"><button onClick={this.continueOrder} type="button">Complete order</button><span>Order total = ${(10+this.state.totalPrice).toFixed(2)}</span></div>
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
    var toppingObjs = [this.state.toppingChoice.map(choice => this.state.toppings.find(top => top.toppingName === choice))];
    console.log(toppingObjs, 'toppingObjs')
    toppingObjs.map(function(obj) {
      console.log(obj.toppingPrice, 'obj.toppingPrice')
      toppingPrices.push(obj.toppingPrice);
       console.log(obj.toppingPrice, 'obj.toppingPrice')
      return toppingPrices;
    });
    console.log(toppingPrices, 'toppingPrices')
    var sumPrices = toppingPrices.reduce(function(pp, cp) { 
      return pp + cp;
    }, 0);
    // disable checkboxes and display msg if user trys to select more than 4 toppings
    if (newToppings.length <= 4 ) {
      this.setState({
        totalPrice: sumPrices,
        toppingChoice: newToppings
      });
    }
    else {
      event.emit('show_message', {message:"You may select a maximum of 4 toppings", duration: 2000});
    }
  }
});

module.exports = Custom;