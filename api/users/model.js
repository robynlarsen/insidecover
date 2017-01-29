var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');

var UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  hash: String,
  salt: String
});

UserSchema.plugin(passportLocalMongoose, { usernameField: 'email'});

module.exports = mongoose.model('User', UserSchema);
// TODO
// Add Audible, GoodReads, GoogleBooks API