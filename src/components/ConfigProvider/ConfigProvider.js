import React from "react";
import { Button } from "reactstrap";
import ProgressModal from "../../containers/ProgressModal/ProgressModal"

import "./ConfigProvider.css";

const ConfigProvider = props => (
  
  <div className="ConfigProvider">
    <ProgressModal img={props.img} name={props.name} date={props.date}/>
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
