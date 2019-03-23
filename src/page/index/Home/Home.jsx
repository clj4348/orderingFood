import React, {Component, Fragment} from 'react';
import Header from './Header/Header.jsx';
import Category from './Category/Category.jsx';
class Home extends Component {
  render(){
    return (
      <Fragment>
        <Header/>
        <Category/>
      </Fragment>
    )
  }
}

export default Home;