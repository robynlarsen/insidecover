import React, { Component } from 'react';
import { Link } from 'react-router';
import logo from './logo.svg';
import goodReadsLogo from './images/goodreads-logo.png';
import audibleLogo from './images/audible-logo.png';
import googleBooksLogo from './images/googlebooks-logo.png';
import './App.css';
import './styles/default.css';
import $ from 'jquery';
import Books from './components/books';
import Quotes from './components/quotes';
import Navigation from './components/nav';
import Footer from './components/footer';

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
              <img src={logo} className="logo" alt="logo" />
              <h1>Inside Cover</h1>
              <p>
                Capturing those moments read that resonate with you for reference later.
              </p>
              <button className="button">Sign Up</button>
            </div>
          </div>
          <div className="container">
            <div className="section section-about">
              <div className="grid grid--middle">
                <div className="grid-1of2 grid-1of1--palm">
                </div>
                <div className="grid-1of2 grid-1of1--palm">
                  <h2 className="section-title">About</h2>
                  <p>This is for all of those moments when you're reading a book and have no where to store every reference you have ever wanted. Inside Cover was born out of a pain point when I wanted to have a single point of reference for each of the books. Share those with friends when those moments were most applicable. I generally read 2-3 books at any given time. One fun, leadership and business book. I love my eReader but my book quotes were all getting lost and were difficult to share with people I loved. What was I thinking in that moment. What was the learning I wanted to capture from that book to be referenced later. Jumping between Audible, Google Books, and Good Reads to manage my reading list wasn't ideal so we built a tool to help with that.</p>
                </div>
              </div>
            </div>
            <div className="section section-tools">
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
          <div className="section section-quotes">
            <div className="container">
              <Quotes quotes={ this.state.quotes } />
              <Link to='/quote'>New Quote</Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  refresh() {
    $.get('/api/books', (data) => this.setState({books: data}));
    $.get('/api/quotes', (data) => this.setState({quotes: data}));
  }

  componentDidMount() {
    this.refresh();
  }
}

export default App;
