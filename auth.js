// Notes
// 1. Ensure that you've added the passport-local-mongoose plugin to
//    your user model.
// 2. Install the following packages: passport, passport-local, passport-local-mongoose,
//    and express-session.
// 3. Make sure you change the secret below to something unique to you.

require('dotenv').config();
var User = require('./api/users/model');
var passport = require('passport');
var session = require('express-session');

module.exports = function(app) {
  passport.use(User.createStrategy());
  passport.serializeUser(User.serializeUser());
  passport.deserializeUser(User.deserializeUser());

  app.use(session({ secret: 'insideCoverSecret', resave: false, saveUninitialized: true }));
  app.use(passport.initialize());
  app.use(passport.session());

  app.post('/api/login', passport.authenticate('local'), function(req, res) {
    res.send(req.user)
  });

  app.post('/api/signup', function(req, res, next) {
    var user = new User();
    user.email = req.body.email;
    user.name = req.body.name;
    User.register(user, req.body.password, function(err) {
      if (err) { next(err); }
      req.login(user, function(err) {
        if (err) { next(err); }
        res.send(user);
      })
    })
  });

  app.get('/api/me', function(req, res) {
    res.send(req.user);
  });
}
