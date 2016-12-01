import React, { Component } from 'react';
import { Link } from 'react-router';
import './books.css';

class Book extends Component {
  render() {
    return <div>
      <img className="book-image" src={ this.props.image } alt=""/>
      <h4 className="book-title">{ this.props.number } { this.props.title }</h4>
      <span className="book-author">{ this.props.author }</span>
      <div className="actions">
        <Link to={ '/edit/' + this.props.id }>Edit</Link>
      </div>
    </div>
  }
}

export default Book;