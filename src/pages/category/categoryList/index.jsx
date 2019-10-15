import React, { Component } from 'react'
import BScroll from "better-scroll";
import "./l.styl";

export default class CategoryList extends Component {
  state = {
    currentIndex: 0, //默认第一个显示激活样式
    categoryL1List: "",
  }
  componentDidMount(){
    // console.log(this.props)
     new BScroll('.right-container',{
                scrollY : true,
                click: true
              })
  }
  componentWillReceiveProps(props){//该钩子函数是在props变化时自动调用
    // console.log(this.props,props)
    this.setState({
      currentIndex: props.currentIndex, //默认第一个显示激活样式
      categoryL1List: props.categoryL1List,//
    })
  }
  render() {
      const {categoryL1List, currentIndex}=this.state
    console.log(categoryL1List, currentIndex)
      return (
      <div className="right-container">
          <div className="category-right" v-if="categoryL1List">
            <div className="category-rightImg">
              <img src="http://yanxuan.nosdn.127.net/cb225335d4a438564040f00b448e8db8.png"/>
            </div>
            <ul className="category-rightContent">
              {
                categoryL1List[currentIndex] && categoryL1List[currentIndex].subCateList.map((item,index)=>(
                  <li key={index}>
                    <img src={item.wapBannerUrl}/>
                    <span>{item.name}</span>
                  </li>
                ))
              }
            </ul>
          </div>
      </div>
      ) 
  }
}
