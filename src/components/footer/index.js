import React from 'react';
// import './footer.css';
// import { Link } from 'react-router';

var Footer = React.createClass({
  render: function() {
    return  <div>
      <div className="footer">
        <div className="container">
          <div className="combo">
            <div className="combo-first"></div>
            <div className="combo-last u-right">
              <p>insideCover &copy; { new Date().getFullYear() } | Design by <a href="http://creativecocktail.ca">Sarah</a> | Development by <a href="http://robynlarsen.ca">Robyn</a></p>
            </div>
          </div>

        </div>
      </div>

    </div>
  }
});

module.exports = Footer;