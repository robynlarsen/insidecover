require('dotenv').config();
var express = require('express');
var app = express();
var webpack = require('webpack');
var webpackMiddleware = require('webpack-dev-middleware');
var mongoose = require('mongoose');

// we want to make sure the application is running.
mongoose.connect('mongodb://127.0.0.1/insidecover');
// mongoose.connect(process.env.MONGODB_URL || 'mongodb://127.0.0.1/insidecover');
// to connect to the account then use
// mongoose.connect('mongodb://<dbuser>:<dbpassword>@ds119578.mlab.com:19578/insidecover');
// mongoose.connect('process.env.MONGODB_URL');

mongoose.Promise = require('bluebird');

var bodyParser = require('body-parser');
app.use(bodyParser.json());

// Serve bundle.js
app.use(webpackMiddleware(webpack(require('./config/webpack.config.dev.js'))));

// Serve your API assets here. You'll need to include the post route file.
app.use(express.static('public'));

var setupAuth = require('./auth');
setupAuth(app);

// Serve your static assets here. You'll need to use express.static middleware.
app.use('/api/books', require('./api/books'));
app.use('/api/quotes', require('./api/quotes'));
require('./api/users/model');

app.get('/api/me', function(req, res) {
  res.send(req.user);
});

// If none of the above matches, serve public/index.html.
app.get('*', (req, res) => res.sendFile(__dirname + '/public/index.html'))

// heroku runs a random port so we can either take PORT or 8080
app.listen(8080);
// app.listen(process.env.PORT || 8080);