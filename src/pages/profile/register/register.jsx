import React, { Component } from 'react'
import { withRouter } from "react-router-dom";
import  "./1.styl";
import { reqSendCode } from "../../../api/index";
import { reqSmsLogin } from "../../../api/index";
class Register extends Component {
  state={
    $route:'  this.props.location.query.',
    errorMsg: '', // 验证失败提示错误信息
    isSelect: true, // 是否勾选同意协议
    phone: '', // 用户注册的手机号
    email: '', // 用户注册的邮箱
    code: '', // 用户输入的手机验证码
    pwd: '', // 用户输入的密码
    confirmPwd: '',// 用户输入的确认密码
    computeTime: 0, // 计时剩余的时间, 为0时没有计时了
  }
  getPwd=(e)=>{
    this.setState({
      pwd:e.target.value
    })
  }
  getPhone=(e)=>{
    this.setState({
      phone: e.target.value
    })
  }
  getEmail = (e) => {
    this.setState({
      email: e.target.value
    })
  }
  getConfirmPwd = (e) => {
    this.setState({
      confirmPwd: e.target.value
    })
  }
  getCode = (e) => {
    this.setState({
      code: e.target.value
    })
  }
  componentDidMount(){
      reqCode=()=>{
      // alert('----')
      // 设置最大时间
      this.computeTime = 10
      // 启动循环定时器进行计时
      const intervalId = setInterval(() => {
        this.computeTime--
        // 一旦到了0, 清除定时器
        if (this.computeTime === 0) {
          clearInterval(intervalId)
        }
      }, 1000)
      // console.log("1111")
      const res= reqSendCode(this.state.phone);
      if (res.code === 0) {
        alert('短信已成功发送')
      } else {
        alert(res.msg)
      }
    }
  }
  render() {
    const { errorMsg, isSelect, phone,email,code,pwd,confirmPwd}=this.state
    return (
    <section className="register-container">
    <div className="regis-title">
          <span>{ this.props.location.query.isPhoneRegis ? '手机号注册' : '邮箱账号注册'}</span>
    </div>
        <div className={`phone-regis ${this.props.location.query.isPhoneRegis?'active1':'native1'}`}>
      <div className="phone">
            <input type="text" placeholder="请输入手机号" onChange={(e) => this.getPhone(e)}/>
      </div>
      <div className={code}>
            <input className="msg-code" type="text" placeholder="请输入短信验证码" onChange={(e) => this.getCode(e)}/>
                <button disabled={!isRightPhone || computeTime > 0} className={isRightPhone ?`right_phone_number`:''}
                  className="get-code" onClick={reqCode}>
           {computeTime>0 ? `已发送验证码(${computeTime}s)` : '获取验证码'}
        </button>
      </div>
      <div className="pwd">
        <input type="password" placeholder="请输入密码" onChange={(e)=>this.getPwd(e)}/>
      </div>
      <div className="confirm-pwd">
            <input type="password" placeholder="请确认密码" onChange={(e) => this.getConfirmPwd(e)}/>
      </div>
      <div className="error-message">
        <span>{errorMsg}</span>
      </div>
      <button className="register" onClick={this.register}>注册</button>
    </div>
        <div  className={`email-regis ${this.props.location.query.isPhoneRegis?'active1':'native1'}`}>
      <div className="email">
            <input type="text" placeholder="邮箱账号" onChange={(e) => this.getEmail(e)}/>
      </div>
      <div className="pwd">
            <input type="password" placeholder="请输入密码" onChange={(e) => this.getPwd(e)}/>
      </div>
      <div className="confirm-pwd">
            <input type="password" placeholder="请确认密码" onChange={(e) => this.getConfirmPwd(e)}/>
      </div>
      <div className="error-message">
        <span>{errorMsg}</span>
      </div>
      <button className="register" onClick={register} >注册</button>
    </div>
    <div className="toash-info">
          <span className="select" className={isSelect?'selected':''} onClick={isSelect = !isSelect}>
        <input type="checkbox"/>
      </span>
      <div className="text">
        <span>我同意</span>
        <a href="iavascript:void(0);">《网易服务条款》</a>
        <span>和</span>
        <a href="iavascript:void(0);">《网易隐私政策》</a>
      </div>
    </div>
    <div onCick={this.props.router.push({path: '/profile/register', query: {isPhoneRegis: false}})}
        className={`email-register ${this.props.location.query.isPhoneRegis ? 'active1' : 'native1'}`}
    >
      <span>邮箱账号注册</span>
      <i className="iconfont icon-52"></i>
    </div>
  </section>
    )
  }
}
export default withRouter(Register)