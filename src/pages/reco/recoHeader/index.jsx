import React, { Component } from 'react'
import { withRouter } from "react-router-dom";
import "./l.styl";
class RecoHeader extends Component {
  state = {
    isOn: true,
  }
  gotoFindOrSelect = (isGoToFind) => {
    this.setState({
      isOn: !this.state.isOn
    })
    if (isGoToFind) {
      // 跳转到find--发现页面
      this.props.history.push('/reco/find')
    } else {
      // 跳转到select--甄选页面
      this.props.history.push('/reco/select')
    }
  }
  render() {
    const { isOn } = this.state
    const { gotoFindOrSelect } = this
    return (
      <div className="reco-Header">
        <div className="reco-header">
          <div className="header">
            <i className="iconfont iconshouye"></i>
            <span className={isOn?'on':''} onClick={() => gotoFindOrSelect(true)}>发现</span>
            <span className={!isOn?`on`:''} onClick={() => gotoFindOrSelect(false)}>甄选家</span>
            <div className="header-right">
              <i className="iconfont iconsousuo" ></i>
              <i className="iconfont icongouwuche" ></i>
            </div>
          </div>
        </div>
        <div className="roco-nav-wrapper">
          <ul className="nav-list content">
            <li className="nav-item"><a className="nav-active" href="##">推荐</a></li>
            <li className="nav-item"><a href="##">居家生活</a></li>
            <li className="nav-item"><a href="##">服饰鞋包</a></li>
            <li className="nav-item"><a href="##">美食酒水</a></li>
            <li className="nav-item"><a href="##">居家生活</a></li>
            <li className="nav-item"><a href="##">服饰鞋包</a></li>
            <li className="nav-item"><a href="##">美食酒水</a></li>
            <li className="nav-item"><a href="##">居家生活</a></li>
            <li className="nav-item"><a href="##">服饰鞋包</a></li>
            <li className="nav-item"><a href="##">美食酒水</a></li>
            <li classNameName="nav-item"><a href="##">居家生活</a></li>
          </ul>
        </div>
      </div>
    )
  }
}
export default withRouter(RecoHeader)


