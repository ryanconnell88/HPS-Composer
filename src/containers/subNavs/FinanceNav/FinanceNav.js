import React, { Component } from 'react';
import './FinanceNav.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav } from 'reactstrap';


class FinanceNav extends Component {
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
      <div className="FinanceNav">
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

export default FinanceNav;