import React, { Component } from 'react'
import { withRouter,Switch,Route} from "react-router-dom";
import Login from "./login/login";
import Register from "./register/register";
class Profile extends Component {
  render() {
    return (
      <div className="profile-container">
        <div className="profile-header">
          <i className="iconfont iconshouye"></i>
          <span>网易严选</span>
        <div className="header-right">
            <i className="iconfont iconsousuo"></i>
            <i className="iconfont icongouwuche"></i>
      </div>
    </div >
      {/* <div className="main-login" v-if="$route.path === '/profile/login'|| $route.path ==='/profile/email'||$route.path ==='/profile/phone'">
        <img src="../../assets/images/profile-logo.png"></img>
    </div> */}
        {/* <router-link to="/profile/login"></router-link>
        <router-link to="/profile/register"></router-link>
       <router-view></router-view> */}
      <Switch>
        <Route path="/profile/login" component={Login}></Route>
        <Route path="/profile/register" component={Register}></Route>
      </Switch>
    </div>
    )
  }
}
export default withRouter(Profile)
