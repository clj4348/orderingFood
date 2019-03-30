import './loading.scss';
import React, { Component } from 'react';

/**
 * Loading组件
 */
 
class Loading extends Component{
  constructor(props){
    super(props)
  }
  render(){
    let str = '加载中'
    if(this.props.isLoding){
      str = '我是有底线的'
    }
    return (
      <div className="loading"> { str } </div>
    )
  }
}
export default Loading;