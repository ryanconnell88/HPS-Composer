import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faEllipsisV, faFileAlt, faSlidersH, faClipboard, faUpload } from '@fortawesome/free-solid-svg-icons';
import "./App.css";
import Console from "./containers/Console/Console";
library.add(faEnvelope);
library.add(faEllipsisV);
library.add(faFileAlt);
library.add(faSlidersH);
library.add(faClipboard);
library.add(faUpload);
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




