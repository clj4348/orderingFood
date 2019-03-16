import React from 'react';
import { createStore } from 'redux' 
import { connect } from 'react-redux';
import BottomBar from '../BottomBar/BottomBar.jsx'
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
    </div>)
  }
}
export default connect()(Main);