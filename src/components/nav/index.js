import React from 'react';
import { Link } from 'react-router';
import logo from '../../logo.svg';
import './nav.css';

var Navigation = React.createClass({
  render() {
    return  <div className="navigation">
      <div className="container">
        <div className="nav-inner">
          <div className="nav-left">
            <Link to='/' className="nav-logo">
              <img src={logo} className="logo" alt="inside cover" />
            </Link>
          </div>
          <div className="nav-right">
            { this.props.loggedIn ? <Link className='u-right' to='/profile'>Profile</Link> : <button className="u-right button button-secondary" onClick={ this.checkFormStatus }>Login</button> }
          </div>
        </div>
      </div>
    </div>
  },

  checkFormStatus() {
    document.getElementById("form-hero").classList.remove("a11y");
  }
});

module.exports = Navigation;

//<Link to='/quote'>New Quote</Link>
