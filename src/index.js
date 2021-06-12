import React from 'react';
import ReactDOM from 'react-dom';
import RouteContainer from './Routes';
import { Provider } from 'react-redux';
import { BrowserRouter} from 'react-router-dom';
import { routerMiddleware } from 'react-router-redux';
import { createBrowserHistory } from "history";
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import "./Static/css/primary.css";
import "./Static/css/grid.css";
import combineReducers from './Reducers';
import 'antd/dist/antd.css';
import apiMiddleware from './Middleware';
const history = createBrowserHistory();
const middleware = routerMiddleware(history);

export default createBrowserHistory({forceRefresh: true});

export const store = createStore( combineReducers, 
    applyMiddleware(thunk, apiMiddleware.getApi, middleware));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
    <RouteContainer />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

