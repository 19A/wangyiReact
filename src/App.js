import React, { Component } from 'react'
import { BrowserRouter,Switch,Route } from "react-router-dom";

import Home from "./pages/home";
import Category from "./pages/category";
import Reco from "./pages/reco";
import Cart from "./pages/cart";
import Profile from "./pages/profile";

import Footer from "./components/footer";
export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route  path="/category" component={Category}></Route>
            <Route  path="/reco" component={Reco}></Route>
            <Route  path="/cart" component={Cart}></Route>
            <Route  path="/profile" component={Profile}></Route>
            <Route  path="/" component={Home}></Route>
          </Switch>
        </BrowserRouter>
        <Footer/>
      </div>
     
      
    )
  }
}
