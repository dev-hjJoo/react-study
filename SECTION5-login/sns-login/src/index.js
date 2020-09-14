import React from 'react';
import ReactDOM from 'react-dom';
import App, {Home, First, Second, Item} from './App';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={home}/>
      <Route path="first" component={First}/>
      <Route path="second/" component={Second}>
        <Route path=":id" component={Item}/>
      </Route>
    </Route>
  </Router>,
  document.getElementById('root')
);
