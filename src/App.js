import React, { Component } from 'react'
import { Route,BrowserRouter,Switch,Redirect} from "react-router-dom";
import Footer from "./components/footer";
import Home from "./pages/home";
import Category from "./pages/category";
import Reco from "./pages/reco";
import Cart from "./pages/cart";
import Profile from "./pages/profile";
export default class App extends Component {
  render() {
    return (
          <BrowserRouter>
             <div className = "app-container" >
              <Switch>
                <Route path="/category" component={Category}></Route>
                <Route path="/reco" component={Reco}></Route>
                <Route path="/cart" component={Cart}></Route>
                <Route path="/profile" component={Profile}></Route>
                <Route path="/home" component={Home}></Route>
                <Redirect to="/home"/>
              </Switch>
             <Footer/>
            </div>
        </BrowserRouter>
    )
  }
}

