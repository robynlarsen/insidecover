var React = require('react');
var ReactDOM = require('react-dom');
import { Router, Route, IndexRoute, browserHistory, Miss } from 'react-router';

// Include your React components like this:
import App from './App';
import QuoteList from './components/quotes.js';
import EditQuote from './components/quote/edit_quote';
import Profile from './layouts/profile.js';
import NotFound from './layouts/notFound.js';
import Home from './layouts/home.js';

// <Miss component={ NotFound } />

ReactDOM.render(<Router history={browserHistory}>
  <Route path='/' component={ App }>
    <IndexRoute component={ Home } />
    <Route path='book/:id/quote' component={ EditQuote } />
    <Route path='edit/:quoteId' component={ EditQuote } />
    <Route path='profile' component={ Profile } />
    <Route path='edit/profile' component={ Profile } />
  </Route>
</Router>, document.getElementById("root"));
