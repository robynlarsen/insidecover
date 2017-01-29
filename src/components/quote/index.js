import React, { Component } from 'react';
import { Link } from 'react-router';
import $ from 'jquery';
import { browserHistory } from 'react-router';
import './quote.styl';

class Quote extends Component {
  render() {
    return <div>
      <blockquote className="quote-content">{ this.props.content }</blockquote>
      <cite className="quote-author">{ this.props.book.author }, { this.props.book.title }</cite>
      <div className="actions">
        <Link className="button button--small" to={ '/edit/' + this.props.id }>Edit</Link>
        <button className="button button--small button-secondary" onClick={ this.remove.bind(this) }>Delete</button>
      </div>
    </div>
  }

  remove() {
    console.log('quote id', this.props.id);
    $.ajax({
      method: 'DELETE',
      url: '/api/quotes/' + this.props.id,
      contentType: "application/json; charset=utf-8",
      success: () => {
        this.props.onRefresh();
        browserHistory.push('/');
      },
      error: (err) => {
        this.setState({ errors: err.responseJSON.errors });
      }
    });
  }
}

export default Quote;
