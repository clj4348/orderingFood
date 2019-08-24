import './contentList.scss';
import React from 'react';
import { connect } from 'react-redux';
import { getContentList } from '../actions/contentListAction.jsx';
import StarScore from 'component/StarScore/StarScore.jsx';
import Loading from 'component/Loading/Loading.jsx'
/**
 * @constructor <ContentList />
 * @description 附近商家列表
 */

class ContentList extends React.Component {
    constructor(props) {
        super(props);
        this.state={
          isLoding: false,
          lodingText: '加载中'
        }
    }
    onLoadPage(){
      let clientHeight = document.documentElement.clientHeight;
      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      let scrollHeight = document.body.scrollHeight;
      let proLoaDis = 30;
      if((clientHeight + scrollTop) >= (scrollHeight - 30)){
        if(this.props.page >3){
          this.setState({
            isLoding: true,
            lodingText: '已完成'
          })
        } else {
          this.props.fectchData(this.props.page);
        }
      }
    }
    componentWillMount(){
      this.props.fectchData(this.props.page);
      window.addEventListener('scroll',this.onLoadPage.bind(this));
    }
    
    componentWillUnmount(){
      window.removeEventListener('scroll',this.onLoadPage.bind(this));
    }
    /**
     * 渲染是否是新到和品牌标签
     * @param {*} data 
     */
    renderBrand(data) {
        if (data.brand_type) {
            return <div className="brand brand-pin">品牌</div>
        } else {
            return <div className="brand brand-xin">新到</div>
        }
    }
    // 美团专送的标志
    renderMeituanTagFlag(type){
      if(type){
        return  <div className="item-meituan-flag">美团专送</div>
      }
      return null;
    }
     /**
     *  渲染月售数量
     * @param {*} num 
     */
      renderMonthNum(num){
        // 大于999采用999+
        if (num > 999) {
            return '999+';
        }
        return num;
    }

    /*
    * 商家活动
    */
    renderOthers(data) {
      return data.map((item, index) => {
        return (
          <div className="other-info" key={item.id} >
            <img src={item.icon_url} className="other-tag"/>
            <div className="other-content">{item.info}</div>
          </div>
        )
      })
    }
    listItemHtml(){
      return this.props.list.map((item, index) => {
        return (
          <div className="r-item-content scale-1px" key={index}>
                <img className="item-img" src={item.pic_url} />
              <div className="brand brand-xin">新到</div>
                <div className="item-info-content">
                    <p className="item-title">{item.name}</p>
                    <div className="item-desc clearfix">
                        <div className="item-score">
                          <StarScore num={item.wm_poi_score} />
                        </div>
                        <div className="item-count">月售{this.renderMonthNum(item.month_sale_num)}</div>
                        <div className="item-distance">&nbsp;{ item.distance }</div>
                        <div className="item-time">{item.mt_delivery_time}&nbsp;|</div>
                    </div>
                    <div className="item-price">
                        <div className="item-pre-price">{item.min_price_tip}</div>
                        {this.renderMeituanTagFlag(item.delivery_type)}
                    </div>
                    <div className="item-others">
                         { this.renderOthers(item.discounts2) }
                    </div>
                </div>
            </div>
        )
      })
    }
    render(){
        return (
            <div className="list-content">
                <h4 className="list-title">
                    <span className="title-line"></span>
                    <span>附近商家</span>
                    <span className="title-line"></span>
                </h4>
                {this.listItemHtml()}
                <Loading isLoding={this.state.isLoding}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.CotentListReducer.list,
        page: state.CotentListReducer.currentPage
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fectchData(page){
       dispatch(getContentList(page));
    }
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ContentList);
