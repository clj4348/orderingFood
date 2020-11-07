import './Comment.scss';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { commnetListData } from '../actions/commentAction.jsx';
import StarScore from 'component/StarScore/StarScore';
import CommentList from './CommentList/CommentList'

/**
 * 详情评价页面 <Menu/>
 */
class Comment extends Component {
	constructor(props){
		super(props);
		this.fecthData()
	}
	/**
	 * 数据请求
	 */
	fecthData() {
		this.props.dispatch(commnetListData())
	}
	render(){
		return (
			<div className="comment-inner">
				<div className="comment-score">
					<div className="mail-score-content">
						<div className="mail-score">5.0</div>
						<div className="mail-text">商家评价</div>
					</div>
					<div className="order-score-content">
						<div className="taste-score">
							<div className="taste-text">口味</div>
							<div className="taste-star-wrap"><StarScore num={ 4.7 }/></div>
							<div className="taste-score-text">4.7</div>
						</div>
						<div className="package-score">
							<div className="package-text">包装</div>
							<div className="package-star-wrap"><StarScore num={ 4.5 }/></div>
							<div className="package-score-text">4.2</div>
						</div>
					</div>
					<div className="send-score-content">
						<div className="send-score">5.0</div>
						<div className="send-text">商家评价</div>
					</div>
				</div>
				<CommentList />
			</div>
		);
	}
}

export default connect(
	(state) => {
		console.log(state)
		return {
			commentData: state.commentReducers
		}
	}
)(Comment);