
import React from 'react';
import { connect } from 'react-redux';

import NavHeader from 'component/NavHeader/NavHeader';
import Header from '../Header/Header';
import ContentList from '../contentList/contentList';
/**
* @constructor <BottomBar>
* @descrition 首页底部tab栏
*/
class Main extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      flag: true
    }
  }
  close(){
    this.setState({
      flag: false
    });
  }
  render() {
    return (
      <div className="category">
        <NavHeader title="分类" />
        <Header/>
        <ContentList/>
    </div>)
  }
}
export default connect()(Main);