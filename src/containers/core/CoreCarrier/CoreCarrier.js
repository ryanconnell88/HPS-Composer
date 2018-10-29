import React, { Component } from "react";
import { Container } from "reactstrap";
import "./CoreCarrier.css";
import HeaderNotification from "../../../components/HeaderNotification/HeaderNotification";
import CarrierName from "../../../components/CarrierName/CarrierName";
import lorem from "../../../assets/js/lorem";

class CoreCarrier extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }
  render() {
    return (
      <div className="CoreCarrier">
        <Container>
          <HeaderNotification header={lorem.header} text={lorem.text} />
          <CarrierName isOpen={this.state.dropdownOpen} toggle={this.toggle}/>
        </Container>
      </div>
    );
  }
}

export default CoreCarrier;
