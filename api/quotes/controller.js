var Quote = require('./model.js');

exports.index = function(req, res) {
  // grab all the quotes in the users and then exec() runs all the stuff
  // exec() is a mongoose specific item
  // same as the .join in rails -- used to join to models (collections) together

  // Good Reads
  // key: 1pexfzfURFIdIsADBuJ15w
  // secret: UjaOCbDl9wzDcVTlCurdgaTjbk2mduBM89CI3klc

  // user book and quote.user quote.book are how you pull in the content via the api and add it directly into the link.

  Quote.find().populate('user quote.user quote.book book').exec()
  .then((quotes) => res.send(quotes));
}

exports.show = function(req, res) {
  Quote.findById(req.params.id)
  .then((quotes) => res.send(quotes))
  .catch((err) => res.send(404));
}

exports.update = function(req, res) {
  Quote.findById(req.params.id)
  .then((quote) => {

    quote.content = req.body.content;
    quote.chapter = req.body.chapter;
    quote.page = req.body.page;
    quote.book = req.body.book;
    quote.user = process.env.DUMMY_USER_ID; // user: robyn@test.org

    quote.save()
    .then(function(quote) {
      res.send(quote);
    })
    .catch(function(err) {
      res.status(422);
      res.send(err);
    });
  })
  .catch(() => res.send(404))
}

exports.create = function(req, res) {
  var quote = new Quote();

  quote.content = req.body.content;
  quote.chapter = req.body.chapter;
  quote.page = req.body.page;
  quote.book = req.body.book;
  quote.user = process.env.DUMMY_USER_ID; // user: robyn@test.org

  quote.save()
  .then(function(quote) {
    res.send(quote);
  }).catch(function(err) {
    res.status(422);
    res.send(err);
  });
}
