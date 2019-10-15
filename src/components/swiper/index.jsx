import React, { Component } from 'react'

import "./swiper.styl";
import 'swiper/css/swiper.css'
export default class SwiperCom extends Component {
  render() {
    return (
      <div className="main-scroll swiper-container">
        <div className="scroll-list swiper-wrapper">
          <div className="swiper-slide">
            <li><img src="https://yanxuan.nosdn.127.net/ea5fde8d19b12c0e252365e713520cd6.jpg" alt="" /></li>
          </div>
          <div className="swiper-slide">
            <li><img src="https://yanxuan.nosdn.127.net/5e658f72294572822b65e09113ac4311.jpg" alt="" /></li>
          </div>
          <div className="swiper-slide">
            <li><img src="https://yanxuan.nosdn.127.net/d8645b184bb0b7c9e471d9212d283939.jpg" alt="" /></li>
          </div>
          <div className="swiper-slide">
            <li><img src="https://yanxuan.nosdn.127.net/5e658f72294572822b65e09113ac4311.jpg" alt="" /></li>
          </div>
        </div>
        <div className="swiper-pagination"></div>
      </div> 
    )
  }
}
