import './NavHeader.scss';
import React, { Component } from 'react';

/**
 * @constructor <NavHeader title={string}>
 * @description 导航栏
 */
 
class NavHeader extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return (
      <div className="nav">
        <div className="back-icon"></div>
        <h4 className="title">{this.props.title}</h4>
      </div>
    )
  }
}
export default NavHeader;