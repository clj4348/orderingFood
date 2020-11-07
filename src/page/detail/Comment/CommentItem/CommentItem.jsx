import './CommentItem.scss';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import StarScore from 'component/StarScore/StarScore';

/**
 * 评论列表 <CommentList/>
 */
class CommentItem extends Component {
	constructor(props){
		super(props);
	}
	/**
	 * 渲染左边的列表
	 */
  renderImg(item) {
    let imgs = item.comment_pics || []
    if (imgs.length) {
      return (
        <div className="img-content">
          { imgs.map((item, index) => {
            let src = item.url;
            let style = {
              backgroundImage: `url(${src})`
            }
            return <div className="" key={index} style={style}></div>
          })}
        </div>
      )
    } else {
      return null
    }
  }
  formatTime(time) {
    const date = new Date(Number(time + '000'))
    return `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}`;
  }
  render() {
    let item = this.props.data
    return (
      <div className="comment-item">
        <div className="commnet-time">{this.formatTime(item.comment_time)}</div>
        <img className="avatar" src={item.user_pic_url} />
        <div className="item-right">
          <p className="nickname">{ item.user_name }</p>
          <div className="star-and-time">
            <div className="star-content">
              <StarScore num={item.order_comment_score }/>
            </div>
            <div className="send-time">{ item.ship_time + '分钟送达' } </div>
            <div className="commnet-text">{ item.comment }</div>
            { this.renderImg(item)}
            { item.praise_food_tip ? <div className="like-info">{ item.praise_food_tip }</div> : null }
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(CommentItem);