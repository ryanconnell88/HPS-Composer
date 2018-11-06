import React, { Component } from "react";
import { Container, Button, Row, Col} from "reactstrap";
import HeaderNotification from "../../../components/HeaderNotification/HeaderNotification";
import BusinessTypeAlt from "../../../components/BusinessTypeAlt/BusinessTypeAlt";
import LineType from "../../../components/LineType/LineType";
import States from "../../../components/States/States";
import "./CoreLine.css";
import lorem from "../../../assets/js/lorem";

class CoreLine extends Component {
  //container for the line of business page
  render() {
    return (
      <div className="CoreLine">
        <Container>
          <HeaderNotification header={lorem.header} text={lorem.text} />
          <Row>
            <Col md="6" lg="3"><BusinessTypeAlt/></Col>
            <Col md="6" lg="3"><LineType/></Col>
            <Col lg="6"><States/></Col>
          </Row>
         
          <Button className="business-btn">Next</Button>
        </Container>
      </div>
    );
  }
}

export default CoreLine;
