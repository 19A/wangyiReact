import React, { Component } from 'react'
import BScroll from "better-scroll";
import CategoryList from "./categoryList/index";
import "./l.styl";
import { reqCategoryData } from "../../api/index";
export default class Category extends Component {
  state={
    currentIndex: 0, //默认第一个显示激活样式
    categoryL1List:"",
  }
  async componentDidMount(){
    const res = await reqCategoryData()
    this.setState({
      categoryL1List: res.data.categoryL1List
    })
    // console.log(this.state.categoryL1List),
     new BScroll('.category-left-wrapper', {
      scrollY: true,
      click: true
    })
  }
  goto=(index)=>{
    console.log(index)
    this.setState({
      currentIndex: index
    })
    console.log(this.state.currentIndex)
  }
  render() {
    const { currentIndex, categoryL1List}=this.state
    return (
      <div className="category">
     <div className="category-header">
        <i className="iconfont iconsousuo"></i>
          <input type="text" className="searchInput" placeholder="搜索商品，共xxxx款好商品"/>
     </div>
     <div className="category-main">
        <div className="line"></div>
        <div className="category-container" >
           <div className="category-left-wrapper"  v-if="categoryL1List">
              <ul className="category-left">
                {categoryL1List && categoryL1List.map((item,index)=>(
                  <li  key={index}
                    className={`left-item ${categoryL1List[currentIndex] === item ? 'active' : ''}`}
                    onClick={() => this.goto(index)}>
                    <a href="##">{item.name}</a>
                  </li>
                ))}
              </ul>
           </div>
            <CategoryList currentIndex={currentIndex} categoryL1List={categoryL1List}/>
        </div>
     </div>
    </div>
    )
  }
}
