import React, { Component } from 'react';
import $ from 'jquery';

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null
    }
  }

  render() {
    return <div className="container">
      <h2>Profile</h2>
      <p>{ this.props.user.name }</p>
    </div>;
  }

  componentDidMount() {
    $.getJSON('/api/me', (user) => {
      if (user !== null) {
        this.userLoggedIn(user);
      }
    })
  }

  userLoggedIn(user) {
    this.setState({ user: user });
  }
}

export default Profile;