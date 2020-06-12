import { applyMiddleware, createStore, combineReducers } from 'redux'
import promiseMiddleware from './middleware'

import common from './reducers/common'
import home from './reducers/home'

const reducer = combineReducers({
  common,
  home
});

const middleware = applyMiddleware(promiseMiddleware);

const store = createStore(reducer, middleware);

export default store;
