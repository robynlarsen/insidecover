var Book = require('./model.js');

exports.index = function(req, res) {
  // grab all the posts in the users and then exec() runs all the stuff
  // exec() is a mongoose specific item
  // same as the .join in rails -- used to join to models (collections) together

  // Good Reads
  // key: 1pexfzfURFIdIsADBuJ15w
  // secret: UjaOCbDl9wzDcVTlCurdgaTjbk2mduBM89CI3klc

  Book.find().populate('user').exec()
  .then((books) => res.send(books));
}

exports.show = function(req, res) {
  Post.findById(req.params.id)
  .then((posts) => res.send(posts))
  .catch((err) => res.send(404));
}

exports.update = function(req, res) {
  Book.findById(req.params.id)
  .then((book) => {

    book.title = req.body.title;
    book.description = req.body.description;
    book.image = req.body.image;
    book.location = req.body.location;
    book.user = '58372b2c95e271a6e51cb983';

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
  book.user = '5834b08bb7395187b292be38';
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
