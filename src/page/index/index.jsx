import React from 'react';
import ReactDom from 'react-dom';
// Provider ：提供包含 store的context；
import   { Provider } from 'react-redux';
import '../../static/reset.css';
import Main from './Main/Main.jsx'
import store from './store.jsx'

ReactDom.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('root')
)