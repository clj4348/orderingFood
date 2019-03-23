import React, { Component } from 'react';
import './Category.scss';
import axios from 'axios';
import { connect } from 'react-redux';
import { getCategoryItem } from  '../../actions/categoryAction.jsx'
class Category extends Component {
  constructor(props){
    super(props)
  }
  categoryHtml(){
    return this.props.categoryList.map((item, index) => {
      if(index >= 8){
        return 
      }
      return (
        <div className="category-item" key={item.code}>
          <img className="item-icon" src={item.url}/>
          <p className="item-name">{item.name}</p>
        </div>
      ) 
    })
  }
  render(){
    return (
       <div className="category-content clearfix">{this.categoryHtml()}</div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    categoryList: state.categoryReducer.categoryList
  }
}
const mapDispatchToProps = (dispatch) => {
  dispatch(getCategoryItem())
  return {
    categoryListChange(list){
      
    }
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Category);