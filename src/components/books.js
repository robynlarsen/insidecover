import React, { Component } from 'react';
import Book from '../components/book';
import '../components/book/books.css';

class Books extends Component {
  render() {
    return <div className="container">
      <h2>Books</h2>
      <ol className="books grid">
      {
        this.props.books.map(function(book, index){
          return <li className="book grid-1of4 grid-1of1--palm" key={ book._id }>
                  <Book image={ book.image }
                        title={ book.title }
                        author={ book.author }
                        number={index + 1}
                        id={ book._id } />
                </li>;
        })
      }
      </ol>
    </div>;
  }
}

export default Books;