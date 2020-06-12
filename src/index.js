import App from './components/App';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import React from 'react';
import store from './store';
// Updated to HashRouter for compatibility reasons
import { HashRouter, Route, Link} from 'react-router-dom';
// import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Home from './components/Home';


ReactDOM.render((
  <Provider store={store}>
    <HashRouter>
      <Route path="/" component={App} />
      <Route exact path="/" component={Home}/>
      {/* <Route exact path="/login" component={Login} /> */}
      {/* TODO review if div needed. Seems to have no effect but double check once app is complete */}
      {/* <div>
        route elems here...
      </div> */}
    </HashRouter>
  </Provider>
), document.getElementById('root'));
