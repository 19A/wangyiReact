import React, { Component } from 'react'
import { Route,BrowserRouter,Switch,Redirect} from "react-router-dom";
import Footer from "./components/footer";

export default class App extends Component {
  render() {
    return (
      <div className="app-container">
          <BrowserRouter>
            <Switch>
            <Route to="/" component={Footer}/>
            </Switch>
          </BrowserRouter >
      </div>
    )
  }
}
