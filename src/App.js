import React, { Component } from "react";
import Fence from "./Fence.js";
import { Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" component={Fence} />
      </div>
    );
  }
}

export default App;
