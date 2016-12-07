import React, { Component } from 'react';

class SignupForm extends Component {
  render() {
    return <form className="form form-signup">
        <input className="field-input" type="text" placeholder="Your email" name="email" />
        <input className="button" type="submit" value="Submit" />
      </form>
  }
}

export default SignupForm;
