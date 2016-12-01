import React from 'react';
import $ from 'jquery';
// import styles from './edit_post.scss'
import { browserHistory } from 'react-router';
import BookSelect from '../bookSelect';

// TODO create an auto complete with User's current booklist

var Field = ({ label, value, onChange, name, error }) => <div>
  <label>{ label }</label>
  <input type='text' value={ value } name={ name } onChange={ onChange } />
  { error ? <div className="error">{ error.message }</div> : null }
</div>

var FieldContent = ({ label, value, onChange, name, error }) => <div>
  <label>{ label }</label>
  <textarea type='text' value={ value } name={ name } onChange={ onChange } />
  { error ? <div className="error">{ error.message }</div> : null }
</div>

var EditQuote = React.createClass({
  getInitialState: function() {
    var emptyQuote = {
      content: '',
      chapter: '',
      page: '',
      books: []
    }
    if (this.props.params.id) {
      var quote = this.props.quotes.find((quote) => quote._id == this.props.params.id);
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
    return  <div>
      <FieldContent label="Content" value={ this.state.quote.content } name='content' onChange={ this.updateField } error={ this.state.errors.content } />
      <Field label="Chapter" value={ this.state.quote.chapter } name='chapter' onChange={ this.updateField } error={ this.state.errors.chapter } />
      <Field label="Page" value={ this.state.quote.page } name='page' onChange={ this.updateField } error={ this.state.errors.page } />
      <BookSelect />
      <button onClick={ this.save }>Save</button>
    </div>
  },

  save: function() {
    if (this.state.isEditing) {
      var url = '/api/quotes/' + this.props.params.id;
      var method = 'PUT';
    } else {
      var url = '/api/quotes';
      var method = 'POST';
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
