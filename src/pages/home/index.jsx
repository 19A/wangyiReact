import React, { Component } from 'react'
import BScroll from "better-scroll";
import Swiper from 'swiper';
//引入组件
import Header from "../../components/header/header";
import SwiperCom from "../../components/swiper/index";
import PolicyDescList from "./components/2-PolicyDescList/index";
import KingkongModule from "./components/3-KingKongModule";
import GiftForNew from "./components/4-GiftForNew/index";
import Make from "./components/5-Make/index";
// import  from "../../components";
//引入样式
import "./index.styl";
export default class Home extends Component {
  state={
    isShowNavItem: false,//默认不显示头部导航的样式
    isShowUpArrow: true,//默认nav-box不显示，且箭头向下
    policyDescList: "",
    currentIndex:0,
    currentIndex1: 0,
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
  gotoLight=(index)=>{
   
    this.setState({
      currentIndex1: index
    })
    console.log(index)
    console.log(this.state.currentIndex1)
  }
  componentDidMount(){
    var mySwiper = new Swiper('.main-scroll', {
        autoplay: true,
        loop: true,
        direction: 'horizontal', // 垂直切换选项
        pagination : {
            el: '.swiper-pagination',
        }
      })
    var myBScroll = new BScroll(this.refs.navWrapper, {
      scrollX: true,
      click: true
    });

  }
  render() {
    let {currentIndex}=this.state
    return (
      <div className="home-container">
        {/* <div className="swiper-container"> */}
        <div className="home-header">
            {/* <!--头部--> */}
            <Header/>
            <div className="header-nav">
              <span className={`toggle-arrow ${this.state.isShowUpArrow ? null : 'arrowDown'}`}
                onClick={this.toggleArrow}
              ><i className="iconfont icondownarrow"></i></span>
              {/* <div className="wrapper" v-show="!isShowUpArrow"> */}
              <div ref="navWrapper" className={`wrapper ${this.state.isShowUpArrow ? 'wrapper-active' : 'wrapper-native'}`}>
                  <ul className="nav-list content">
                  {this.state.navList1.map((item, index)=> <li className="nav-item" key={index}> 
                    <a className={this.state.currentIndex1==index?'nav-active':""}  href="##"  
                      onClick={() => {this.gotoLight(index)}}
                     >{item}</a>
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
          {/* 主体区域 */}
          <div className="home-main">
          {/* <!--轮播区域--> */}
            <SwiperCom/>
          {/* 导航栏区域 */}
            <PolicyDescList/>
          {/* <!--新品首发区域-----KingkongModule--> */}
            <KingkongModule/>
            {/* 新人专享礼 */}
            <GiftForNew/>
            {/* 品牌制造 */}
            <Make/>
          </div>
          
      </div>
    )
  }
}
