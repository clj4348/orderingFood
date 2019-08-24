import './Menu.scss';

import React from 'react';
import { connect } from 'react-redux';
import { getListData, itemClick} from '../actions/menuAction'
/**
 * 详情菜单页面 <Menu/>
 */
class Menu extends React.Component {
	constructor(props){
		super(props);
		this.props.dispatch(getListData())
	}
	renderRightList(array){
		let _array = array || [];
		return _array.map((item, index) => {
			return (
				<div key={index}>
					{item.name}
				</div>
			)
		})
	}
	/**
	 * 点击切换右边数据
	 */
	itemClick(item,index){
		this.props.dispatch(itemClick({
			currentLeftIndex: index 
		}))
	}
	/**
	 * 渲染左边的列表
	 */
	renderLeft(){
		let list = this.props.listData.food_spu_tags || [];
		return list.map((item, index) => {
			let cls = this.props.currentLeftIndex === index ?'left-item active': 'left-item';
			return (
			<div onClick={()=> this.itemClick(item,index)} key={index} className={cls}>
				<div className="item-text">
					{item.icon ? <img className="item-icon" src={item.icon}/>: null}{item.name}
				</div>
			</div>)
		})
	}
	/**
	 * 渲染右边的列表
	 */
	renderRight(){
		let index = this.props.currentLeftIndex;
		let array = this.props.listData.food_spu_tags || [];
		let currentItem = array[index];
		if(currentItem){
			let title = <p key={1} className="right-title">{currentItem.name}</p>
			return  [
				title,
				<div key={2} className="right-list">
					<div className="right-list-inner">
						{this.renderRightList(currentItem.spus)}
					</div>
				</div>
			]
		} else {
			return null
		}
	}
	render(){
		return (
			<div className="menu-inner">
				<div className="left-bar">
					<div className="left-bar-inner">
						{this.renderLeft()}
					</div>
				</div>
				<div className="right-content">
					{this.renderRight()}
				</div>
			</div>
		);
	}
}

export default connect(
  (state)=>{
		return {
			listData: state.menuReducers.listData,
			currentLeftIndex: state.menuReducers.currentLeftIndex
		}
	}
)(Menu);

