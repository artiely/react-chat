import React from 'react';
import ReactDOM from 'react-dom';
/* applyMiddleware 应用中间件的函数  compose组合函数*/
import {createStore, applyMiddleware, compose} from 'redux'
import {Provider} from 'react-redux'
import {BrowserRouter, Route} from 'react-router-dom'
import thunk from 'redux-thunk'
import reducers from './reducer'
import './index.css';
// import App from './App';
import Login from './views/login/login.js'
import Signup from './views/signup/signup.js'
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducers, compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
))
console.log('123', reducers)

// BrowserRouter 包裹整个应用
ReactDOM.render(
  (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Route path='/login' component={Login}></Route>
          <Route path='/signup' component={Signup}></Route>
        </div>
      </BrowserRouter>
    </Provider>
  ),
  document.getElementById('root')
);
registerServiceWorker();
