import React from "react";
import { Button } from "reactstrap";
//import testImg from "../../img/aetna.png";

import "./ConfigOnboarding.css";

const ConfigOnboarding = props => (
  
  <div className="ConfigOnboarding">
    <Button className="main-button" color="primary">Primary</Button>
    <div className="img-wrap">
      <img src={props.img} alt="test" />
    </div>
    <h4>{props.provider.charAt(0).toUpperCase() + props.provider.slice(1)}</h4>
    <p>Last Updated: {props.date}</p>
    <p>Last Updated By:{props.name}</p>
  </div>
);
export default ConfigOnboarding;