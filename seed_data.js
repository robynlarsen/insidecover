var User = require('../api/users/model');
var Book = require('../api/books/model');

var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/insidecover');

var u = new User();
u.email = 'test@example.org';
u.name = 'Test User';

u.save().then(function(u) {
  Book.find().then((books) => {
    books.forEach((book) => {
      book.user = u._id;

      if (book.length == 0) {
        book.push({ user: u._id, title: "Test Comment 1", author: "Book Author 1"});
        book.push({ user: u._id, title: "Test Comment 2", author: "Book Author 1"});
      }

      book.save();
    })
  });
});