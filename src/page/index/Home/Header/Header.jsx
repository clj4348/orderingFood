import React, {Component, Fragment} from 'react';
import './Header.scss';
import Search from '../Search/Search.jsx';
class Header extends Component {
  render(){
    return (
      <Fragment> 
          <div className="header">
              <Search/>
              <img className="banner-img" src="//xs01.meituan.net/waimai_i/img/bannertemp.e8a6fa63.jpg"/>
            </div>
      </Fragment>
    )
  }
}

export default Header;