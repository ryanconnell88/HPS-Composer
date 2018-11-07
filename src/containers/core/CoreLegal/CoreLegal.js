import React, { Component } from "react";
import "./CoreLegal.css";
import { Container } from "reactstrap";
import HeaderNotification from "../../../components/HeaderNotification/HeaderNotification";
import CoreTable from "../../../components/CoreTable/CoreTable";
import LegalTable from "../../../components/LegalTable/LegalTable";
import lorem from "../../../assets/js/lorem";


class CoreLegal extends Component {
  ////container for the legal entity page
  render() {
    return (
      <div className="CoreLegal">
        <Container>
          <HeaderNotification header={lorem.header} text={lorem.text} />
          <CoreTable/>
          <LegalTable/>
        </Container>
      </div>
    );
  }
}

export default CoreLegal;
