var React = require('react');
var ReactDOM = require('react-dom');

var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Link = ReactRouter.Link;
var IndexRoute = ReactRouter.IndexRoute;
var browserHistory = ReactRouter.browserHistory;

require('./../scss/app.scss');

var App = require('./components/Main.js');
var Home = require('./components/Home.js');
var Order = require('./components/Order.js');
var Choose = require('./components/Choose.js');
var Custom = require('./components/Custom.js');
var Done = require('./components/Done.js');
var NotFound = require('./components/404.js');

/*
The routes. This section says:
  - If the route starts with /, load the App component
  - If the route is /, load the Home component INSIDE App as this.props.children
  - If the route is /order, load the Order component INSIDE App as this.props.children
  - If the route is /choose, load the Choose component INSIDE App as this.props.children
  - If the route is /custom, load the Custom component INSIDE App as this.props.children
  - If the route is /done, load the Done component INSIDE App as this.props.children
  - If the route is anything else, load the NotFound component INSIDE App as this.props.children

The whole process lets us create **complex, nested user interfaces** with minimal effort,
by simply nesting `Route` components.
*/
var routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="order" component={Order}/>
      <Route path="choose" component={Choose}/>
      <Route path="custom" component={Custom}/>
      <Route path="done" component={Done}/>
      <Route path="*" component={NotFound}/>
    </Route>
  </Router>
);

// If this line of code is not here, nothing gets displayed!
ReactDOM.render(routes, document.querySelector('#app'));
