import React, { Component } from 'react';
import { Route } from "react-router-dom";


import './Landing.css';

import LoginWrap from '../../components/LoginWrap/LoginWrap';
import Console from '../Console/Console';
import Configurator from '../Configurator/Configurator';



class Landing extends Component {

  render() {
    return (
      <div className="Landing">
       <Route exact path="/" component={LoginWrap}></Route>
       <Route exact path="/configurator" component={Configurator}></Route>
       <Route  path="/console" component={Console}></Route>
      </div>
    );
  }
}

export default Landing;