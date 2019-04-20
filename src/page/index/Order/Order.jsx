import './Order.scss';
import React from 'react';

import { connect } from 'react-redux';
import { getOrderList } from '../actions/orderActions.jsx';
import ListItem from './ListItem/ListItem.jsx';

/**
 * @constructor <Order />
 * @description 订单tab代码
 */

class Order extends React.Component {
  constructor(props){
    super(props);
    this.props.dispatch(getOrderList())
  }
  renderItem(){
    return  this.props.list.map((item, index) => {
      return (
        <ListItem  itemData={item} key={index} />
      )
    })
  }
  render(){
    return (
        <div className="order">
            <div className="header">订单</div>
            <div className="order-list">{this.renderItem()}</div>
        </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    list: state.orderReducer.list
  }
}
export default connect(
  mapStateToProps
)(Order);