import React, { Component } from 'react'
import { Route, NavLink, Redirect, BrowserRouter, Switch} from "react-router-dom";
import Home from "../../pages/home";
import Category from "../../pages/category";
import Reco from "../../pages/reco";
import Cart from "../../pages/cart";
import Profile from "../../pages/profile";
import  "./css/index.styl";

export default class Footer extends Component {
  render() {
    return (
      // <div className="footer-container">
      <div className="footer">
        <div className="footer-list">
          <NavLink className="footer-item" to="/home" 
          ref="home">
            <i className="iconfont iconshouye"></i>
            <span>首页</span>
          </NavLink>
          <NavLink className="footer-item"  to="/category"
          ref="cate">
            <i className="iconfont iconleimupinleifenleileibie"></i>
            <span>分类</span>
          </NavLink>
          <NavLink to="/reco" className="footer-item"
            ref="cate">
            <i className="iconfont iconliaojiemodou"></i>
            <span>识物</span>
          </NavLink>
          <NavLink to="/cart" className="footer-item"
            ref="cart">
            <i className="iconfont icongouwuche"
            ></i>
            <span>购物车</span>
          </NavLink>
          <NavLink to="/profile" className="footer-item"
              ref="proflie">
            <i className="iconfont icongeren"></i>
            <span>个人</span>
          </NavLink>
        </div>
        </div >
      // </div>
    )
  }
}
