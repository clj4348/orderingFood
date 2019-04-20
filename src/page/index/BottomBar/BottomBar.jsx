import React from 'react';
import { connect } from 'react-redux';
import './BottomBar.scss';
import { changeTab } from '../actions/tabAction.jsx';
import { NavLink, Link } from 'react-router-dom'

/**
* @constructor <BottomBar>
* @descrition 首页底部tab栏
*/
class BottomBar extends React.Component {
  constructor(props){
    super(props)
  }
  renderItems() {
    const { tabs, activeKey, onTabChange } = this.props;
    return tabs.map((item, index) => { 
      let cls = `btn-item ${item.key}`;
      return (
        <NavLink key={index} to={item.key}
         className={ cls }
          activeClassName="active"
          onClick={(e) => onTabChange(item.key)}>
          <div className="tab-icon"></div>
          <div className="btn-name">{item.tabName}</div>
        </NavLink>
      )
    })
  }
  render() {
    return (
    <div className="bottom-bar">
      {this.renderItems()}
    </div>
    )
  }
  
}
const mapStateToProps = (state) => {
  return {
    tabs: state.tabReducer.tabs,
    activeKey: state.tabReducer.activeKey
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onTabChange(param){
      dispatch(changeTab(param));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BottomBar);
