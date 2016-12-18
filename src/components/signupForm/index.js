import React, { Component } from 'react';
import '../../styles/default.css';

class SignupForm extends Component {
  render() {
    return <div id="mc_embed_signup">
        <form action="//robynlarsen.us7.list-manage.com/subscribe/post?u=f7ac839ae9a024c2df2bacc58&id=1e89d1c7e8" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="form form-signup validate" target="_blank" noValidate>
          <div id="mc_embed_signup_scroll">
            <div className="mc-field-group">
              <label htmlFor="mce-EMAIL a11y">Email Address </label>
              <input type="email" name="EMAIL" placeholder="Your email" className="field-input required email" id="mce-EMAIL" />
              <input type="submit" defaultValue="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" />
            </div>
            <div id="mce-responses" className="clear">
              <div className="response" id="mce-error-response" style={{display: 'none'}} />
              <div className="response" id="mce-success-response" style={{display: 'none'}} />
            </div>
            <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true"><input type="text" name="b_f7ac839ae9a024c2df2bacc58_1e89d1c7e8" tabIndex={-1} defaultValue /></div>
          </div>
        </form>
      </div>
  }
}

export default SignupForm;
