import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from 'store/store'
import Router from 'Router';
import 'index.scss'

ReactDOM.render(
  <Provider store={ store }>
    <Router />
  </Provider>,
  document.getElementById('root')
)