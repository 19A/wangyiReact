import React, { Component } from 'react'

import "./l.styl";
import { reqHomeData } from "../../../../api/index";
export default class Make extends Component {
  state={
    personalShop:[],
    tagList:[]
  }
  async componentDidMount(){
    const res = await reqHomeData()
    console.log(res.data.personalShop)
    this.setState({
      personalShop: res.data.personalShop.slice(0,6),
      tagList: res.data.tagList
    })
    console.log(this.state.tagList)
  }
  render() {
    const {personalShop,tagList}=this.state
    return (
      <div className="make-container">
        {
          personalShop.map((item, index) =>
            (<div className="make-lists">
              <div className="make-header" key={index}>
                  <span>{item.name}</span>
                  <span className="more">
                    更多
                <i className="iconfont icondownarrow"></i>
                </span>
              </div>
              <div className="make-list">
                {tagList.map((item, index) =>
                  (
                      <div className="make-item" key={index}>
                        <span>{item.name}</span>
                        <div className="content">
                          <span>{item.floorPrice}元起</span>
                          <span>上新</span>
                        </div>
                      </div>
                  )
                )}
              </div>
              </div>
            ))
         }
        </div>
     
    )
  }     
}   
    
{/*     
    ( 
        <div className="make-container">
        {
          personalShop.map((item, index) =>
            (
              <div className="make-header" key={index}>
                <span>{品牌制造商直供}</span>
                <span className="more">
                  更多
              <i className="iconfont icondownarrow"></i>
                </span>
              </div>
            )
        }
        
        
      </div>
  }
 */}
