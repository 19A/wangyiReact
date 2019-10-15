
import React, { Component } from 'react'
import { reqHomeData } from "../../../../api/index";
import "./l.styl";
export default class index extends Component {
  state = {
    kingKongList: []
  }
  async componentDidMount() {
    const result = await reqHomeData()
    // console.log("kingKongList", result.data.kingKongModule.kingKongList)
    this.setState({
      kingKongList: result.data.kingKongModule.kingKongList
    })
    // console.log("111",this.state.kingKongList)
  }
  render() {
    const {kingKongList}=this.state
    // console.log(this.state)
    
    return (
      <ul className="main-navbox" >
        {kingKongList.map((item,index)=> 
          (
            <li className="nav-item" key={index}>
              <img src={item.picUrl} />
              <span>{item.text}</span>
            </li>
          )
        )}
      </ul>
    )
  }
}
