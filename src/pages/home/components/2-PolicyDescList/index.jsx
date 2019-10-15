import React, { Component } from 'react'
import { reqHomeData } from "../../../../api/index";
import  "./l.styl";
export default class PolicyDescList extends Component {
  state={
    policyDescList:[]
  }
  async componentDidMount(){
    const result = await reqHomeData()
    this.setState({
      policyDescList:result.data.policyDescList
    })
    // console.log(this.state.policyDescList)
  }
  render() {
    const {policyDescList}=this.state
    return (
      <ul className="main-grow">
        {policyDescList.map((item,index)=>{
          return(
            <li key={index} >
              <img className="grow-icon iconfont" src={item.icon}></img>
              <span>{item.desc}</span>
            </li>
          )
        })}
      </ul>
    )
  }
}

