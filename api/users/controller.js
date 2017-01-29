var User = require('./model.js');

exports.show = function(req, res) {
  User.findById(req.params.id)
  .then((user) => res.send(user))
  .catch((err) => res.send(404));
}

// exports.update = function(req, res) {
//   Book.findById(req.params.id)
//   .then((book) => {

//     book.title = req.body.title;
//     book.description = req.body.description;
//     book.image = req.body.image;
//     book.location = req.body.location;
//     // book.users = req.body.user._id; // user: robyn@test.org
//     book.readers = process.env.DUMMY_USER_ID; // user: robyn@test.org

//     book.save()
//     .then(function(book) {
//       res.send(book);
//     })
//     .catch(function(err) {
//       res.status(422);
//       res.send(err);
//     });
//   })
//   .catch(() => res.send(404))
// }