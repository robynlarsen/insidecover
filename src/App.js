import React, { Component } from 'react';
import { Link } from 'react-router';
import aboutBooks from './images/books.png';
import goodReadsLogo from './images/goodreads-logo.png';
import audibleLogo from './images/audible-logo.svg';
import googleBooksLogo from './images/googlebooks-logo.png';
import './App.css';
import './styles/default.css';
import $ from 'jquery';
import Books from './components/books';
import Quotes from './components/quotes';
import Navigation from './components/nav';
import Footer from './components/footer';
import SignupForm from './components/signupForm';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [],
      quotes: []
    }
  }

  render() {
    return (
      <div className="page">
        <Navigation />
        <div className="page-content">
          <div className="section section-hero">
            <div className="container">
              <h2>Notes from the Inside Cover</h2>
              <p>
                Capturing those moments read that resonate with you for reference later.
              </p>
              <button className="button">Sign Up</button>
            </div>
          </div>
          <div className="section section-about">
            <div className="container">
              <div className="section-content">
                <h2 className="section-title section-title--secondary">Notes from your books, all in one place.</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos ut, sequi earum beatae vitae pariatur fugiat quisquam iusto odio delectus. Aut cupiditate ut explicabo corporis, voluptatibus inventore minus quo eveniet.
                </p>
              </div>
            </div>
          </div>
          <img className="about-books" src={ aboutBooks } alt=""/>
          <div className="section section-center">
            <div className="container">
              <h2 className="section-title">Sign up for Beta</h2>
              <p>Be the first to find out when we launch.</p>
              <SignupForm />
            </div>
          </div>
          <div className="section section-secondary">
            <div className="container">
              <div className="grid grid--middle">
                <div className="grid-1of2 grid-1of1--palm">
                </div>
                <div className="grid-1of2 grid-1of1--palm">
                  <h2 className="section-title">About</h2>
                  <p>This is for all of those moments when you're reading a book and have no where to store every reference you have ever wanted. Inside Cover was born out of a pain point when I wanted to have a single point of reference for each of the books. Share those with friends when those moments were most applicable. I generally read 2-3 books at any given time. One fun, leadership and business book. I love my eReader but my book quotes were all getting lost and were difficult to share with people I loved. What was I thinking in that moment. What was the learning I wanted to capture from that book to be referenced later. Jumping between Audible, Google Books, and Good Reads to manage my reading list wasn't ideal so we built a tool to help with that.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="section section-tools">
            <div className="container">
              <div className="grid grid--middle">
                <div className="grid-1of2 grid-1of1--palm">
                  <h2 className="section-title">Tools</h2>
                  <p>Sync your goodReads, Google Books and Amazon Audible libraries in one spot.</p>
                </div>
                <div className="grid-1of2 grid-1of1--palm">
                  <div className="grid grid--middle">
                    <div className="grid-1of3 grid-1of1--palm">
                      <img src={ audibleLogo } alt=""/>
                    </div>
                    <div className="grid-1of3 grid-1of1--palm">
                      <img src={ goodReadsLogo } alt=""/>
                    </div>
                    <div className="grid-1of3 grid-1of1--palm">
                      <img src={ googleBooksLogo } alt=""/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section section-books">
            <Books books={ this.state.books } />
          </div>

          <div className="section section-quotes" id="quote">
            { React.cloneElement(this.props.children, {
              quotes: this.state.quotes,
              books: this.state.books,
              onRefresh: this.refresh.bind(this)
            })}
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // add currently reading section
  // then you can click on the book to add quotes

  refresh() {
    $.get('/api/books', (data) => this.setState({books: data}));
    $.get('/api/quotes', (data) => this.setState({quotes: data}));
  }

  componentDidMount() {
    this.refresh();
  }
}

export default App;
