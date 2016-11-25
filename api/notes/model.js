var mongoose = require('mongoose');

var NoteSchema = new mongoose.Schema({
  content: String,
  book: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Book'
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  quotes: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Quote'
  }
});

module.exports = mongoose.model('Note', NoteSchema);