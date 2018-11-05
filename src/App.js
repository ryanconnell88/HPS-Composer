import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faEnvelope,
  faEllipsisV,
  faFileAlt,
  faSlidersH,
  faClipboard,
  faUpload,
  faThLarge, 
  faEllipsisH,
  faCog
} from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import Console from "./containers/Console/Console";
import Landing from "./containers/Landing/Landing";
//add font awesome icons for later use
library.add(faEnvelope);
library.add(faEllipsisV);
library.add(faFileAlt);
library.add(faSlidersH);
library.add(faClipboard);
library.add(faUpload);
library.add(faThLarge);
library.add(faEllipsisH);
library.add(faCog);
//could just render console

class App extends Component {
  //set up browser router for routing and mount application
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Landing />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
