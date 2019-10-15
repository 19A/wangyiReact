import React, { Component } from 'react'
import "./l.styl";
export default class index extends Component {
  render() {
    return (
      <div className="gift-container">
        <p className="gift-title">- 新人专享礼 -</p>
        <div className="gift-content">
          <div className="gift-left">
            <span>新人专享礼包</span>
            <img src="http://yanxuan.nosdn.127.net/ba4d635ec94ad95b28bfab6500900659.png"/>
          </div>
          <div className="gift-right">
            <div className="gift-right-top">
              <div className="title">
                <span>福利社</span>
                <span>今日特价</span>
              </div>
              <img src="http://yanxuan.nosdn.127.net/aa2bbfa0e4f63160b454c67c911c9290.png"/>
            </div>
            <div className="gift-right-top gift-right-bottom">
              <div className="title">
                <span>新人拼团</span>
                <span>1元起包邮</span>
              </div>
              <img src="http://yanxuan.nosdn.127.net/f608f7868d43c5ac67fc03189b07c589.png"/>
            </div>
          </div>
      </div>
    </div>
    )
  }
}
