import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import ProgressModalTable from "./ProgressModalTable/ProgressModalTable";
import "./ProgressModal.css";

class ProgressModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div className="ProgressModal">
        <Button className="main" color="primary" onClick={this.toggle}>
          primary
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle} external={0}>
            <img src={this.props.img} alt="img" />
            <p>Last Updated: {this.props.date}</p>
            <p>Last Updated By: {this.props.name}</p>
          </ModalHeader>
          <ModalBody>
            <ProgressModalTable/>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>
              Exit
            </Button>{" "}
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ProgressModal;
