import React from "react";
import Login from '../Login/Login'

import "./LoginWrap.css";

const LoginWrap = props => {
  //A component for adding box shadow to other components 
  return (
    <div className="LoginWrap">
      <Login/>
    </div>
  );
};
export default LoginWrap;