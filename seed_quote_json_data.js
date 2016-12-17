// https://www.npmjs.com/package/jsonfile
require('dotenv').config();
var jsonfile = require('jsonfile');
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
var Book = require('./api/books/model.js');
var User = require('./api/users/model.js');
var Quote = require('./api/quotes/model.js');

var file = '../robyn_goodreads_library.json';

// find guy spiers book in books collection
// add two dummy quotes to book

var quotesDummyData = [
  {
    content: 'The goal isn’t to be smarter. It’s to construct an environment in which my brain isn’t subjected to quite such an extreme barrage of distractions and disturbing forces that can exacerbate my irrationality. ',
    page: 3,
    chapter: 4
  },
  {
    content: 'Construct an environment where my brain is subjected to quite such an extreme barrage of distractions and disturbing forces.',
    page: 16,
    chapter: 5
  }
];

mongoose.connect('mongodb://127.0.0.1/insidecover');

Book.findOne({ 'title': /The Education of a Value Investor/ })
.then(function(book) {
  console.log('%s %s is a %s.', book.title) // Space Ghost is a talk show host.
  populateQuotes(book);
});


var populateQuotes = function(book) {
  quotesDummyData.forEach((gquote) => {
    console.log(gquote);
    var q = new Quote();
    q.content = gquote["content"];
    q.chapter = gquote['chapter'];
    q.page = gquote['page'];
    q.book = book;
    q.user = process.env.DUMMY_USER_ID;
    q.save()
    .then((quote) => console.log("Succesfully saved " + quote.content))
    .catch((err) => console.log("ERROR: " + err.toString()));
  });
}