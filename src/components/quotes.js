import React, { Component } from 'react';
import Quote from './quote';

class Quotes extends Component {
  render() {
    return <div className="container">
      <h2>Quotes</h2>
      <ol className="quotes grid">
      {
        this.props.quotes.map(function(quote, index){
          return <li className="quote grid-1of2 grid-1of1--palm" key={ quote._id }>
                  <Quote content={ quote.content } chapter={quote.chapter }
                        number={index + 1} book={ quote.book } readers={ quote.readers } id={ quote._id }/>
                </li>;
        })
      }
      </ol>
    </div>;
  }
}

export default Quotes;