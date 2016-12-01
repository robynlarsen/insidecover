import React, { Component } from 'react';
import Book from '../components/book';
import '../components/book/books.css';

class BookSelect extends Component {
  render() {
    return <div className="container">
      <h2>Books</h2>
      <select>
      {
        this.props.books.map(function(book, index){
          return <option key={ book._id }>
                  { book.title }
                </option>;
        })
      }
      </select>
    </div>;
  }
}

export default BookSelect;