import React, { Component } from 'react';
import { Link } from 'react-router';
import './quote.css';

class Quote extends Component {
  render() {
    return <div>
      <blockquote className="quote-content">{ this.props.content }</blockquote>
      <cite className="quote-author">{ this.props.book.author }, { this.props.book.title }</cite>
      <div className="actions">
        <Link to={ '/edit/' + this.props.id }>Edit</Link>
      </div>
    </div>
  }
}

export default Quote;
