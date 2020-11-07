import './ShopBarList.scss';
import React from 'react';
import { connect } from 'react-redux';
import { showList } from '../../actions/menuAction';

class ShopBarList extends React.Component{

  /**
	 * 显示隐藏购物车列表
	 */
	changeBarList(){
    let flag = this.props.showListFlag
		this.props.dispatch(showList(!flag))
  }
  subItemsCount(){

  }
  render(){
    return (
      <div className="shop-bar-list">
        <div className="mask" onClick={() => this.changeBarList()}></div>
        <div className="content">
          <p className="empty-shop-cart">
            <i className="icon"></i>
            <span>清空购物车</span>
          </p>
          <div className="line"></div>
          <ul className="">
            <li className="item">
              {/* <div className="select-content">
                {item.order ? <div className="sub" onClick={()=> this.subItemsCount(index)}></div>: null}
                {item.order ? <div className="order">{item.order}</div> : null}
                <div className="plus" onClick={()=> this.addItemsCount(index)}></div>
              </div> */}
            </li>
          </ul>
        </div>
        
      </div>
    )
  }
}

export default connect((state) => {
  return {
    showListFlag: state.menuReducers.showListFlag
  }
})(ShopBarList)