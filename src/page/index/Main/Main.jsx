
import React from 'react';
import { createStore } from 'redux' 
import { connect } from 'react-redux';
import BottomBar from '../BottomBar/BottomBar.jsx'
import Home from '../Home/Home.jsx'
/**
* @constructor <BottomBar>
* @descrition 首页底部tab栏
*/
class Main extends React.Component {
  constructor(props){
    super(props) 
  }
  render() {
    return (
      <div>
      <BottomBar />
      <Home/>
    </div>)
  }
}
export default connect()(Main);