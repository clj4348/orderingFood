import './ShopBar.scss';

import React from 'react';
import { connect } from 'react-redux';
import { showList } from '../../actions/menuAction';
/**
 * 每个 <ShopBar/>
 */
class ShopBar extends React.Component {
  constructor(props){
		super(props);
	}
	/**
	 * 获取总价
	 */ 
	getTotalPrice(){
		let listData =  this.props.listData.food_spu_tags || [];
		let totalPrice = 0;
		let dotNum = 0;
		for(let i = 0; i< listData.length; i++){
			let spus = listData[i].spus || [];
			for(let j = 0; j < spus.length; j++){
				let chooseCount = spus[j].order;
				if(chooseCount > 0){
					dotNum += chooseCount;
					totalPrice += spus[j].min_price * chooseCount;
				}
			}
		}
		
		return {
			dotNum,
			totalPrice
		}
	}
	/**
	 * 显示隐藏购物车列表
	 */
	changeBarList(){
		let flag = this.props.showListFlag
		this.props.dispatch(showList(!flag))
	}
	/**
	 * 
	 */
	render(){
		let shipping_fee = this.props.listData.poi_info ? this.props.listData.poi_info.shipping_fee : 0 
		let data  = this.getTotalPrice();
		let dotNumCls = data.dotNum > 99 ? 'dot-num active' : 'dot-num'; 
		return (
			<div className="shop-bar">
				<div className="bottom-content">
          <div className="shop-icon" onClick={() => this.changeBarList()}>
            {data.dotNum > 0 ? <div className={dotNumCls} >{data.dotNum > 99 ? '99+' : data.dotNum}</div> : null}
          </div>
          <div className="price-content">
            <p className="total-price">￥{data.totalPrice}</p>
            <p className="other-price">另需配送&nbsp;￥{shipping_fee}</p>
          </div>
          <div className="submit-btn">去结算</div>
        </div>
			</div>
		);
	}
}

export default connect(
  (state)=>{
		return {
			listData: state.menuReducers.listData,
			showListFlag: state.menuReducers.showListFlag
		}
	}
)(ShopBar);

