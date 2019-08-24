import React from 'react';
import ReactDom from 'react-dom';

// Provider ：提供包含 store的context；
import '../../static/reset.css';
import '../../components/rem_fun.scss'
import Main from './Main/Main.jsx'

ReactDom.render(
  <Main />,
  document.getElementById('root')
)