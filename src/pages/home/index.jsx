import React, { Component } from 'react'
import BScroll from "better-scroll";
//引入组件
import Header from "../../components/header/header";
//引入样式
import "./index.styl";
export default class Home extends Component {
  state={
    isShowNavItem: false,//默认不显示头部导航的样式
    isShowUpArrow: true,//默认nav-box不显示，且箭头向下
    policyDescList: "",
    currentIndex: 0,
    navList1: [
      "推荐", "服饰鞋包", "服饰鞋包", "居家生活", "服饰鞋包", "服饰鞋包", "居家生活", "服饰鞋包", "服饰鞋包", "居家生活",
    ],
    navList2: [
      "居家生活", "服饰鞋包", "服饰鞋包", "居家生活", "服饰鞋包", "服饰鞋包", "居家生活", "服饰鞋包", "服饰鞋包", "居家生活",
    ]
  }
  toggleArrow=()=>{
    // console.log(this.state)
    this.setState({
      isShowUpArrow:!this.state.isShowUpArrow
    })
  }
  componentDidMount(){
   new BScroll('.wrapper', {
      scrollX: true,
      click: true
    })
  }
  render() {
    let {currentIndex}=this.state
    return (
      <div className="home-container">
        <div className="home-header">
            {/* <!--头部--> */}
            <Header/>
            <div className="header-nav">
              <span className={`toggle-arrow ${this.state.isShowUpArrow ? null : 'arrowDown'}`}
                onClick={this.toggleArrow}
              ><i className="iconfont icondownarrow"></i></span>
              {/* <div className="wrapper" v-show="!isShowUpArrow"> */}
              <div className={`wrapper ${this.state.isShowUpArrow ? 'wrapper-active' : 'wrapper-native'}`}>
                  <ul className="nav-list content">
                  {this.state.navList1.map((item, index)=> <li className="nav-item" key={index}> 
                      <a className="nav-active" href="##">{item}</a>
                    </li>)}
                  </ul>
                </div>
              {/* <!-- 全部频道 --> */}
              <div className={`nav-box ${this.state.isShowUpArrow ?'wrapper-native' : 'wrapper-active'}`}>
                <div className="box-title">全部频道</div>
                <div className="box-list">
                  {this.state.navList2.map((item, index) => <div  key={index}
                      onClick={currentIndex=index}
                      className={`box-item ${currentIndex == index ?'active':null}`}
                    >
                    <a href="##">{item}</a>
                    </div>)
                  }
                  {/* <!-- <div className="box-item"><a href="##">居家生活</a></div> --> */}
                </div>
                </div>
              </div>
          </div>
      </div>
    )
  }
}
