// https://www.npmjs.com/package/jsonfile

var jsonfile = require('jsonfile');
var mongoose = require('mongoose');
var Book = require('./api/books/model.js');

var file = '../robyn_goodreads_library.json';
mongoose.connect('mongodb://127.0.0.1/insidecover');


jsonfile.readFile(file, function(err, obj) {
  console.dir(obj);
  obj.forEach((gbook) => {
    var b = new Book();
    b.title = gbook["Title"];
    b.author = gbook["Author"];
    b.goodreads_id = gbook["Book_Id"];
    b.isbn = gbook["ISBN"];
    b.isbn13 = gbook["ISBN13"];
    b.readers.push({user:'58372b2c95e271a6e51cb983'});

    b.save()
    .then((book) => console.log("Succesfully saved " + book.title))
    .catch((err) => console.log("ERROR: " + err.toString()));
  })
});