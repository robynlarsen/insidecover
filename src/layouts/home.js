import React, { Component } from 'react';
import aboutBooks from '../images/books.png';
import goodReadsLogo from '../images/goodreads-logo.png';
import audibleLogo from '../images/audible-logo.svg';
import connectedImage from '../images/connected.svg';
import googleBooksLogo from '../images/googlebooks-logo.png';
import '../App.styl';
// import '../styles/default.styl';
import SignupForm from '../components/signupForm';
import Login from '../components/login';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>
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
                <img src={ connectedImage } className="feature-image" alt=""/>
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
                <p>Sync up your favorite book tools from eReaders to hard covers alongside the goodReads, Google Books and Amazon Audible libraries.</p>
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
      </div>
  }
}

export default Home;