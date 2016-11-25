var mongoose = require('mongoose');

var ReaderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  currently_reading: Boolean,
  date_added: Date,
  bookshelves: String
});

var BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  isbn: {
    type: String,
    required: true
  },
  isbn13: {
    type: Number,
    required: true
  },
  image: String,
  goodreads_id: Number,
  audible_id: Number,
  googlebooks_id: Number,
  users: [ReaderSchema]
});

module.exports = mongoose.model('Book', BookSchema);