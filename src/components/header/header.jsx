import React, { Component } from 'react'
import "./index.styl";
export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <img className="logo" src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png"></img>
        <i className="iconfont iconsousuo"></i>
        <input type="text" className="searchInput" placeholder="搜索商品，共xxxx款好商品" onclick="$router.push('/search')"/>
          <button onclick="$router.push('/profile')">登录</button>
      </div>
    )
  }
}

