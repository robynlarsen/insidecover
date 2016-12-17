// https://www.npmjs.com/package/jsonfile
require('dotenv').config();
var jsonfile = require('jsonfile');
var mongoose = require('mongoose');
var Book = require('./api/books/model.js');
var User = require('./api/users/model.js');

var file = '../robyn_goodreads_library.json';
mongoose.connect('mongodb://127.0.0.1/insidecover');

Book.remove({});

jsonfile.readFile(file, function(err, obj) {
  console.dir(obj);
  obj.forEach((gbook) => {
    var b = new Book();
    b.title = gbook["Title"];
    b.author = gbook["Author"];
    b.goodreads_id = gbook["Book_Id"];
    b.isbn = gbook["ISBN"];
    b.isbn13 = gbook["ISBN13"];
    b.readers.push({user: process.env.DUMMY_USER_ID});

    b.save()
    .then((book) => console.log("Succesfully saved " + book.title))
    .catch((err) => console.log("ERROR: " + err.toString()));
  })
});