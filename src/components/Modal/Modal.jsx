import React, {Fragargu}from 'react';
import './Modal.scss';
class Modal extends React.Component{
  constructor(props){
    super(props)
  }
  close(){
    this.props.close();
  }
  confirm(){
    if( this.props.confirm){
      this.props.confirm()
    }
    this.close();
  }
  renderHtml(){
      if(this.props.flag){
        return (<div className="modal-container">
        <div className="modal-content">
            <div className="modal-header">
              <p className="modal-title">温馨提示</p>
              <div className="modal-close-icon" onClick={() => this.close() }>
                <span></span>
              </div>
            </div>
            <div className="modal-text">
              这是一个弹出框组件
              </div>
          <div className="modal-button">
            <span className="confirm" onClick={() => this.confirm()}>确定</span>
            <span className="cancel" onClick={()=> this.close()}>取消</span>
          </div>
        </div>
        <div className="mask" onClick={()=> this.close()}></div>
      </div>)
    }
  }
  render(){
    return (<div>
      {this.renderHtml()}
      </div>
    )
  }
}

export default Modal;