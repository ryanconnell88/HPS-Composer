import React, { Component } from 'react';
import './Console.css';
import TopNav from '../TopNav/TopNav';





class Console extends Component {
  //Main Container to be navigated to when making a new provider 
  render() {
    return (
      <div className="Console">
       <TopNav/>
      </div>
    );
  }
}

export default Console;