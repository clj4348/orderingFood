import './Main.scss';
import React from 'react';
import { connect } from 'react-redux';
import NavHeader from 'component/NavHeader/NavHeader';
import Menu from '../Menu/Menu.jsx';
import Comment from '../Comment/Comment.jsx';
import Restanurant from '../Restanurant/Restanurant.jsx';
import {
  HashRouter,
  Route,
  Switch,
  Redirect,
  NavLink
} from 'react-router-dom';
/**
* @constructor <BottomBar>
* @descrition 首页底部tab栏
*/
class Main extends React.Component {
  constructor(props){
    super(props) 
  }
  renderTabs(){
    let tabs = this.props.tabs;
    return tabs.map((item)=>{
      return (
        <NavLink
          to={"/" + item.key} activeClassName="active"
          key={item.key} className="tab-item">{item.tabName}</NavLink>
      )
    })
  }
  render() {
    return (
      <div className="detail">
        <HashRouter>
          <div>
            <NavHeader title={'哈哈哈'}/> 
            <div className="tab-bar">
              {this.renderTabs()}
            </div>
            <Switch>
              <Route exact path="/" render={() => <Redirect to='/Menu'></Redirect>}></Route>
              <Route path="/menu" component={Menu} />
              <Route path="/comment" component={Comment} />
              <Route path="/restanurant" component={Restanurant} />
            </Switch>
          </div>
        </HashRouter>
      </div>
    )
  }
}
export default connect(
  state => ({
    tabs: state.tabReducer.tabs
  })
)(Main);