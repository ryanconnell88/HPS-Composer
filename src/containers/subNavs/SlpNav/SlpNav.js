import React, { Component } from 'react';
import './SlpNav.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav } from 'reactstrap';


class SlpNav extends Component {
  //sub-nav for SLP pages 
  //the following methods are for reactstrap navbar
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div className="SlpNav">
        <Navbar color="light" light expand="md">
          <NavbarToggler onClick={this.toggle} className="sub-nav"/>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default SlpNav;