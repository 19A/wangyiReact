import React, { Component } from 'react'
import  "./1.styl";
import { withRouter } from "react-router-dom";
class Login extends Component {
  render() {
    return (
      <div class="profile-main">
      <div class="main-loginWays">
        <router-link to="/profile/phone">
          <div class="btn-mobile btn">
            <i class="iconfont iconweibiaoti1"></i>
            手机号快捷登录
          </div>
        </router-link>
        <router-link to="/profile/email">
          <div class="btn-email btn">
            <i class="iconfont iconyouxiang"></i>
            邮箱账号登录
          </div>
        </router-link>
        <router-view></router-view>
      </div>
      <div class="main-footer">
        <span>
          <i class="iconfont iconweixin"></i>
          微信
        </span>
        <span>|</span>
        <span>
          <i class="iconfont iconqq"></i>
          QQ
        </span>
        <span>|</span>
        <span>
          <i class="iconfont iconweibo"></i>
          微博
        </span>
      </div>
    </div>
    )
  }
}
export default withRouter(Login)
