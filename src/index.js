import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import { legacy_createStore as createStore, applyMiddleware, combineReducers, compose} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import burgerReducer from './redux/reducer/burgerReducer';
import orderReducer from './redux/reducer/orderReducer';
import signupReducer from './redux/reducer/signupLoginReduser';
//middleware => applyMiddleware
// compose

const loggerMiddlaware = store => {
  return next => {
    //shiljuuleh next
    return action => {
      //systemd uussen action-g duudna
      console.log("myloggerMiddleware : dispatching : ", action);
      console.log("2----> ", store.getState())
      const result = next(action);
      console.log("3----> ", store.getState())
      return result;
    };
  };
};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
  burgerReducer,
  orderReducer,
  signupReducer
});

const middlewares = [loggerMiddlaware, thunk]

const store = createStore(
  reducers, 
  composeEnhancers(applyMiddleware(...middlewares))
);


// const store = createStore(burgerReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

reportWebVitals();
