import React from 'react';
import { render } from 'react-dom';
import { Provider} from 'react-redux';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {searchRobots, requestRobots} from './reducers';
import {createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import App from './containers/App';
import './style.scss';

const logger=createLogger();
const rootReducer=combineReducers({searchRobots,requestRobots});
const store=createStore(rootReducer,applyMiddleware(thunkMiddleware,logger));
render(
  <Provider store={store}>
    <App/>
  </Provider>, 
  document.getElementById('root'));
