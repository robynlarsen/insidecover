var mongoose = require('mongoose');

var QuoteSchema = new mongoose.Schema({
  content: String,
  book: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Book'
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  note: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Note'
  }
});

module.exports = mongoose.model('Quote', QuoteSchema);