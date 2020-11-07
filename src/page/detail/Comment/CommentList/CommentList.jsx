import './CommentList.scss';

import React from 'react';
import { connect } from 'react-redux';
import CommentItem from '../CommentItem/CommentItem'
/**
 * 评论列表 <CommentList/>
 */
class CommentList extends React.Component {
	constructor(props){
		super(props);
	}
	/**
	 * 渲染左边的列表
	 */
	renderList(){
    let list = this.props.commentList
    return list.map((item, index) => {
      return (<CommentItem key={index} data={item} />)
    })
  }
  render() {
    return (
      <div className="comment-list">
        { this.renderList()}
      </div>
    );
  }
}

export default connect(
  (state) => ({
    commentList: state.commentReducers.commentList
  })
)(CommentList);