var Book = require('./model.js');

exports.index = function(req, res) {
  // grab all the posts in the users and then exec() runs all the stuff
  // exec() is a mongoose specific item
  // same as the .join in rails -- used to join to models (collections) together
  // replace process.env.DUMMY_USER_ID with readers.user
  Book.find("readers.user").populate('user').exec()
  .then((books) => res.send(books));
}

exports.show = function(req, res) {
  Book.findById(req.params.id)
  .then((books) => res.send(books))
  .catch((err) => res.send(404));
}

exports.update = function(req, res) {
  Book.findById(req.params.id)
  .then((book) => {

    book.title = req.body.title;
    book.description = req.body.description;
    book.image = req.body.image;
    book.location = req.body.location;
    // book.users = req.body.user._id; // user: robyn@test.org
    book.readers = req.body.readers.user._id; // user: robyn@test.org
    // book.readers = process.env.DUMMY_USER_ID; // user: robyn@test.org

    book.save()
    .then(function(book) {
      res.send(book);
    })
    .catch(function(err) {
      res.status(422);
      res.send(err);
    });
  })
  .catch(() => res.send(404))
}

exports.create = function(req, res) {
  var book = new Book();

  book.title = req.body.title;
  book.description = req.body.description;
  book.image = req.body.image;
  book.author = req.body.author;
  book.readers = req.body.readers.user._id;
  // book.users = process.env.DUMMY_USER_ID;
  book.isb = req.body.isb;
  book.isb13 = req.body.isb13;

  book.save()
  .then(function(book) {
    res.send(book);
  }).catch(function(err) {
    res.status(422);
    res.send(err);
  });
}
