import React, { Component } from 'react'
// import { Header } from "../../components";
import "./l.styl";
export default class Cart extends Component {
  render() {
    return (
        <div className="cart-container">
     <div className="cart-header">
       <span>购物车</span>
       <a href="##">领卷</a>
     </div>
     <div className="cart-main">
       <div className="cart-list">
         <div className="cart-item">
           <i></i>
           <span>1111111</span>
         </div>
         <div className="cart-item">
           <i></i>
           <span>222222222</span>
         </div>
         <div className="cart-item">
           <i></i>
           <span>33333333</span>
         </div>
       </div>
       <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-d6193bd6e4.png" alt=""/>
       <div className="add-loginBtn">
         <span>去添加点什么吧</span>
         <div className="login-btn">
           <a href="##">登录</a>
         </div>
       </div>
     </div>
   </div>
    )
  }
}
