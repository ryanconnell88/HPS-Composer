import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Console from "./containers/Console/Console";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Console />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;




