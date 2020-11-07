import './StarScore.scss';

import React from 'react';

/**
 * StarScore组件
 * @description <StarScore score={num}/> 
 */

class StarScore extends React.Component {
  constructor(props){
    super(props)
  }
  /**
   * 渲染5颗星得分方法
   *  @param {*} data 
   */
  renderScore(){
    let num = this.props.num.toString();
    let numArr = num.split('.');
    let halfstar = numArr[1] >= 5 ? 1 : 0;
    let nullstar = 5 - numArr[0] - halfstar
    // 渲染满星jsx
    let starjsx = [];
    for (let i = 0 ; i < numArr[0] ; i++) {
      starjsx.push(<div key={i + 'full'} className="star fullstar"></div>)
    }

    // 渲染半星jsx
    if (halfstar) {
      for(let j=0; j < halfstar; j++){
        starjsx.push(<div key={j + 'half'} className="star halfstar"></div>)
      }
    }

    // 渲染0星jsx
    if (nullstar) {
      for (let k = 0 ; k < nullstar ; k++) {
        starjsx.push(<div key={k + 'null'} className="star nullstar"></div>)
      }
    }
    return starjsx;
  }
  render(){
    return <div className="star-score">{this.renderScore()}</div>;
  }
}

export default StarScore;

