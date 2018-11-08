import React, { Component } from 'react';
import { Container } from "reactstrap";
import Info from "./Info/Info"
import HeaderNotification from "../../../components/HeaderNotification/HeaderNotification";
import './PlanInfo.css';
import lorem from "../../../assets/js/lorem";


class PlanInfo extends Component {
  

  render() {
    return (
      <div className="PlanInfo">
        <Container>
          <HeaderNotification header={lorem.header} text={lorem.text}/>
          <Info title="Plan Codes"/>
          <Info title="Rate Guarantee"/>
          <Info title="Sales Brochure"/>
          <Info title="Change Plan"/>
          <Info title="Age Rules"/>
        </Container>
      </div>
    );
  }
}

export default PlanInfo;