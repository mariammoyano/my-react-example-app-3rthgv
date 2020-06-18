import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import React from 'react';
// Updated to HashRouter for compatibility reasons
import { HashRouter, Route, Link} from 'react-router-dom';
// import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './components/App';
import Article from './components/Article';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Settings from './components/Settings';
import store from './store';

ReactDOM.render((
  <Provider store={store}>
    <HashRouter>
      <Route path="/" component={App} />
      <Route exact path="/" component={Home}/>
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/settings" component={Settings} />
      <Route path={"/article/:id"} component={Article} />
      {/* TODO review if div needed. Seems to have no effect but double check once app is complete */}
      {/* <div>
        route elems here...
      </div> */}
    </HashRouter>
  </Provider>
), document.getElementById('root'));
