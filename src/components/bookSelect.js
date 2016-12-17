import React, { Component } from 'react';
import Book from '../components/book';
import '../components/book/books.css';
// import '../scripts/awesomplete.css';
// import '../scripts/awesomplete.min.js';

class BookSelect extends Component {
  render() {
    return <div className="field field-select">
      <select>
        <option> ----- </option>
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

// import React, { Component } from 'react';
// import Book from '../components/book';
// import '../components/book/books.css';
// import '../scripts/awesomplete.css';
// import '../scripts/awesomplete.min.js';

// class BookSelect extends Component {
//   render() {
//     return <div className="container">
//       <input class="awesomplete"
//              data-list={
//         this.props.books.map(function(book, index){
//           return { book.title },;
//         })
//       }
//       </>
//     </div>;
//   }
// }

// export default BookSelect;