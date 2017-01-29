import React, { Component } from 'react';
import './App.styl';
import './styles/default.styl';
import './index.styl';
import $ from 'jquery';
import Books from './components/books';
import Quotes from './components/quotes';
import Navigation from './components/nav';
import Footer from './components/footer';
import SignupForm from './components/signupForm';
import Login from './components/login';
import Home from './layouts/home.js';
import Profile from './layouts/profile.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [],
      quotes: [],
      user: null
    }
  }

  // render() {
  //   if (this.state.user !== null) {
  //     return  <div className="page">
  //       <Header />
  //       <PageContent page-content={ this.state.pageContent } />
  //       <SearchBar search={ this.state.search } onSearch={ this.searchChanged } />
  //       { React.cloneElement(this.props.children, {
  //         posts: this.state.posts,
  //         onRefresh: this.refresh
  //       })}
  //     </div>
  //   } else {
  //     return <Login onLogin={ this.userLoggedIn }/>
  //   }
  // }

  render() {
    return <div className="page">
        <Navigation loggedIn={ (this.state.user != null) ? true : false } />
        <div className="page-content">
          <div className="section section-hero">
            <div className="container">
              <h2>Notes from the Inside Cover</h2>
              <p>
                Capturing those moments read that resonate with you for reference later.
              </p>
              { (this.state.user == null) ? <div> <Login onLogin={ this.userLoggedIn.bind(this) }/>
               <button className="button" onClick={ this.checkFormStatus }>Sign Up</button> </div> : '' }
            </div>
          </div>
          { this.renderAuthenticatedContent() }
          <Home />
        </div>
        <Footer />
    </div>
  }

  renderAuthenticatedContent() {
    if(this.state.user) {
      return <div>
        <div className="section section-books">
          <Books books={ this.state.books } />
        </div>
        <div className="section section-quotes" id="quote">
          <Quotes quotes={ this.state.quotes } />
        </div>
        { React.cloneElement(this.props.children, {
          quotes: this.state.quotes,
          books: this.state.books,
          onRefresh: this.refresh.bind(this)
        })}
      </div>
    }
  }

  // { React.cloneElement(this.props.children, {
  //   quotes: this.state.quotes,
  //   books: this.state.books,
  //   onRefresh: this.refresh.bind(this)
  // })}

  // <div className="section section-books">
  //   <Books books={ this.state.books } />
  // </div>
  // <div className="section section-quotes" id="quote">
  //   <Quotes quotes={ this.state.quotes } />
  // </div>

  // <div className="section">
  //   <Profile user={ this.state.user } />
  // </div>

  // add currently reading section
  // then you can click on the book to add quotes
  refresh() {
    $.get('/api/books', (data) => this.setState({books: data}));
    $.get('/api/quotes', (data) => this.setState({quotes: data}));
  }

  componentDidMount() {
    $.getJSON('/api/me', (user) => {
      console.log(user);
      if (user !== null) {
        this.userLoggedIn(user);
      }
    })
  }

  checkFormStatus() {
    document.getElementById("radioSignUp").checked=true;
    document.getElementById("form-hero").classList.remove("a11y");
  }

  userLoggedIn(user) {
    this.setState({ user: user }, this.refresh);
  }
}

export default App;
