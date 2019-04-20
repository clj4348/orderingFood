
import React from 'react';
import { createStore } from 'redux' 
import { connect } from 'react-redux';
import BottomBar from '../BottomBar/BottomBar.jsx'
import Home from '../Home/Home.jsx';
import Order from '../Order/Order.jsx';
import My from '../My/My.jsx';

import { HashRouter, Route ,Switch, Redirect} from 'react-router-dom';
/**
* @constructor <BottomBar>
* @descrition 首页底部tab栏
*/
class Main extends React.Component {
  constructor(props){
    super(props) 
  }
  render() {
    return (
      <div>
      <HashRouter>
        <div>
          <Switch>
              <Route exact path="/" render={() => <Redirect to='/home'></Redirect>}></Route>
               <Route path="/home" component={Home} />
              <Route path="/order" component={Order} />
              <Route path="/my" component={My} />
          </Switch>
          <BottomBar />
        </div>
      </HashRouter>
    </div>)
  }
}
export default connect()(Main);