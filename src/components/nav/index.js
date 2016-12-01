import React from 'react';
import { Link } from 'react-router';
import './nav.css';

var Navigation = React.createClass({
  render: function() {
    return  <div className="navigation">
      <div className="container">
        <Link to='/'>insideCover</Link>
        <Link to='/quote'>New Quote</Link>
        <Link to='/note'>New Note</Link>
      </div>

    </div>
  }
});

module.exports = Navigation;