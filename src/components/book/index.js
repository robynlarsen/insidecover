import React, { Component } from 'react';
import { Link } from 'react-router';
import './books.styl';

class Book extends Component {
  render() {
    return <div>
      <img className="book-image" src={ this.props.image } alt=""/>
      <h4 className="book-title">{ this.props.number } { this.props.title }</h4>
      <span className="book-author">{ this.props.author }</span>
      <div className="actions">
        <Link className="button button-tertiary" to={'/book/' + this.props.id + '/quote' }>Add Quote</Link>
      </div>
    </div>
  }
}

export default Book;
// <Link to={ '/edit/' + this.props.id }>Edit</Link>