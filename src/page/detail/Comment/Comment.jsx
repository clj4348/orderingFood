import './Comment.scss';

import React from 'react';
import { connect } from 'react-redux';
/**
 * 详情菜单页面 <Menu/>
 */
class Comment extends React.Component {
	constructor(props){
		super(props);
	}
	/**
	 * 渲染左边的列表
	 */
	renderLeft(){
		let list = this.props.listData
	}
	render(){
		return (
			<div className="menu-inner">
				评价页面
			</div>
		);
	}
}

export default connect()(Comment);