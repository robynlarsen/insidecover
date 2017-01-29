import React, { Component } from 'react';
import { Link } from 'react-router';
import '../../App.styl';
import '../styles/default.styl';
import $ from 'jquery';
import Navigation from '../components/nav';
import Footer from '../components/footer';

class Page extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null
    }
  }

  render() {
    return <div className="page">
        <Navigation className="nav-secondary" loggedIn={ (this.state.user != null) ? true : false } />
        <div className="page-content">
          <h1>this is a page</h1>
        </div>
        <Footer />
    </div>
  }

  componentDidMount() {
    $.getJSON('/api/me', (user) => {
      console.log(user);
      if (user !== null) {
        this.userLoggedIn(user);
      }
    })
  }

  userLoggedIn(user) {
    this.setState({ user: user }, this.refresh);
  }
}

export default Page;
