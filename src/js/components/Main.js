var React = require('react');
var Link = require('react-router').Link;
var Message = require('./Message');

// The main application layout
// this.props.children will be set by React Router depending on the current route
var App = React.createClass({
  render: function() {
    return (
        <div>
        <header>
          <Message/>
            <nav className="main-menu">
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/order">Order</Link>
                  </li>
                  <li>
                    <Link to="/choose">Choose</Link>
                  </li>
                  <li>
                    <Link to="/custom">Custom</Link>
                  </li>
                  <li>
                    <Link to="/done">Done</Link>
                  </li>
                </ul>
              </nav>
        </header>
        <main>{this.props.children}</main>
        <footer>
            <p>&copy; Reactive Pizza inc. 2016</p>
        </footer>
        </div>
    );
  }
});

module.exports = App;