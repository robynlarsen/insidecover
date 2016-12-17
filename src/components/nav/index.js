import React from 'react';
import { Link } from 'react-router';
import logo from '../../logo.svg';
import './nav.css';

var Navigation = React.createClass({
  render: function() {
    return  <div className="navigation">
      <div className="container">
        <div className="nav-inner">
          <div className="nav-left">
            <Link to='/' className="nav-logo">
              <img src={logo} className="logo" alt="inside cover" />
            </Link>
          </div>
          <div className="nav-right">
            <Link className="u-right button button-secondary" to='/'>Login</Link>
          </div>
        </div>
      </div>
    </div>
  }
});

module.exports = Navigation;

//<Link to='/quote'>New Quote</Link>
