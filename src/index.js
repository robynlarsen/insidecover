var React = require('react');
var ReactDOM = require('react-dom');
import { Router, Route, IndexRoute, browserHistory } from 'react-router';


// Include your React components like this:
import App from './App';
import QuoteList from './components/quotes.js';
import EditQuote from './components/quote/edit_quote';

ReactDOM.render(<Router history={browserHistory}>
  <Route path='/' component={ App }>
    <IndexRoute component={ QuoteList } />
    <Route path='quote' component={ EditQuote } />
    <Route path='edit/:id' component={ EditQuote } />
  </Route>
</Router>, document.getElementById("root"));
