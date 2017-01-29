import React from 'react';
import $ from 'jquery';
import { browserHistory } from 'react-router';

// TODO create an auto complete with User's current booklist
  // <label className="field-label">{ label }</label>

var Field = ({ label, value, onChange, name, error }) => <div className="field">
  <input className="field-input" type='text' value={ value } name={ name } placeholder={ name } onChange={ onChange } />
  { error ? <div className="error">{ error.message }</div> : null }
</div>

var FieldContent = ({ label, value, onChange, name, error }) => <div className="field">
  <textarea rows="4" className="field-textarea" type='text' placeholder={ name } value={ value } name={ name } onChange={ onChange } />
  { error ? <div className="error">{ error.message }</div> : null }
</div>

var EditQuote = React.createClass({
  getInitialState: function() {
    var book = this.props.books.find((book) => book._id === this.props.params.id);
    var emptyQuote = {
      content: '',
      chapter: '',
      page: '',
      book: book
    }
    if (this.props.params.quoteId) {
      var quote = this.props.quotes.find((quote) => quote._id === this.props.params.quoteId);
      return {
        isEditing: true,
        quote: quote || emptyQuote,
        errors: {}
      }
    } else {
      return {
        isEditing: false,
        quote: emptyQuote,
        errors: {}
      }
    }
  },

  render: function() {
    return  <div className="section">
        <div className="container">
      {
        this.state.isEditing
          ? ''
          : <h4>Add a quote to { this.state.quote.book.title }</h4>
      }
      <FieldContent label="Content" value={ this.state.quote.content } name='content' onChange={ this.updateField } error={ this.state.errors.content } />
      <Field label="Chapter" value={ this.state.quote.chapter } name='chapter' onChange={ this.updateField } error={ this.state.errors.chapter } />
      <Field label="Page" value={ this.state.quote.page } name='page' onChange={ this.updateField } error={ this.state.errors.page } />
      <button className="button" onClick={ this.save }>Save</button>
      <button className="button button-secondary" onClick={ this.cancel }>Cancel</button>
      </div>
    </div>
  },

  // <BookSelect books={ this.props.books } />

  cancel: function() {
    browserHistory.push('/');
  },

  save: function() {
    if (this.state.isEditing) {
      var url = '/api/quotes/' + this.props.params.quoteId;
      var method = 'PUT';
      console.log('editing the quote');
    } else {
      url = '/api/quotes/';
      method = 'POST';
      console.log('posting the new quote');
    }

    $.ajax({
      method: method,
      url: url,
      contentType: "application/json; charset=utf-8",
      data: JSON.stringify(this.state.quote),
      success: () => {
        this.props.onRefresh();
        browserHistory.push('/');
      },
      error: (err) => {
        this.setState({ errors: err.responseJSON.errors });
      }
    });
  },

  updateField: function(evt) {
    var quote = this.state.quote;
    quote[evt.target.name] = evt.target.value;
    this.setState({quote: quote});
  }
});

module.exports = EditQuote;
