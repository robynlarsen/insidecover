import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './App';
import Books from './components/books';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
// });

ReactDOM.render(<Router history={browserHistory}>
  <Route path='/' component={ App }>
    <IndexRoute component={ Books } />
    <Route path='post' component={ EditPost } />
    <Route path='edit/:id' component={ EditPost } />
  </Route>
</Router>, document.getElementById("placeholder"));