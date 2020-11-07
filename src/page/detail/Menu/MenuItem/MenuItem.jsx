import './MenuItem.scss';
import React from 'react';
import { connect } from  'react-redux';
import { plusClick, subClick } from '../../actions/menuAction';
class MenuItem extends React.Component{
  // 订单借结算加法
  addItemsCount(index){
    this.props.dispatch(plusClick({index}))
  }
  // 订单借结算减法
  subItemsCount(index){
    this.props.dispatch(subClick({index}))
  }
  render(){
    let item = this.props.data;
    let index = this.props.index;
    return (<div className="menu-item">
      <img className="img" src={item.picture} alt=""/>
      <div className="menu-item-right">
        <p className="item-title">{item.name}</p>
        <p className="item-desc two-line">{item.description}</p>
        <p className="item-zan">{item.praise_content}</p>
        <p className="item-price">￥{item.min_price}<span className="unit">/{item.unit}</span></p>
      </div>
      <div className="select-content">
        
        {item.order ? <div className="sub" onClick={()=> this.subItemsCount(index)}></div>: null}
        {item.order ? <div className="order">{item.order}</div> : null}
        <div className="plus" onClick={()=> this.addItemsCount(index)}></div>
      </div>
    </div>);
  }
}
export default connect()(MenuItem);