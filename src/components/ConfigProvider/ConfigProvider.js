import React from "react";
import { Button } from "reactstrap";
//import testImg from "../../img/aetna.png";

import "./ConfigProvider.css";

const ConfigProvider = props => (
  
  <div className="ConfigProvider">
    <Button className="main-button" color="primary">Primary</Button>
    <div className="img-wrap">
      <img src={props.img} alt="test" />
    </div>
    <h4>{props.provider.charAt(0).toUpperCase() + props.provider.slice(1)}</h4>
    <p>Last Updated: {props.date}</p>
    <p>Last Updated By:{props.name}</p>
    <Button className="provider-button" color="danger">
      PROD
    </Button>
    <Button className="provider-button" color="info">
      UAT
    </Button>
    <Button className="provider-button" color="warning">
      QUA
    </Button>
    <Button className="provider-button" color="success">
      DEV
    </Button>
  </div>
);
export default ConfigProvider;
