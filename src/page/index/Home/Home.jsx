import React, {Component, Fragment} from 'react';
import Header from './Header/Header.jsx';
import Category from './Category/Category.jsx';
import ContentList from './ContentList/ContentList.jsx';
class Home extends Component {
  render(){
    return (
      <Fragment>
        <Header/>
        <Category/>
        <ContentList/>
      </Fragment>
    )
  }
}

export default Home;