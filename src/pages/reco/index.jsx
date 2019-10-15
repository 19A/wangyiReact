import React, { Component } from 'react'
import { Route,Switch,Redirect } from "react-router-dom";
import "./l.styl";
import  RecoHeader  from "./recoHeader/index";
import RecoFind from "./recofind/index";
import RecoSelect from "./recoSelect/index";
export default class Reco extends Component {

  render() {
    return (
      <div className="reco-container">
        <RecoHeader/>
    {/* <router-view/> */}
        <Switch>
          <Route path="/reco/select" component={RecoSelect}></Route>
          <Route path="/reco/find" component={RecoFind}></Route>
          <Redirect to="/reco/find" />
        </Switch>
   </div>
    )
  }
}
