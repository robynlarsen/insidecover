var mongoose = require('mongoose');

var QuoteSchema = new mongoose.Schema({
  content: String,
  chapter: Number,
  page: Number,
  book:  {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Book'
  },
  user:  {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

module.exports = mongoose.model('Quote', QuoteSchema);