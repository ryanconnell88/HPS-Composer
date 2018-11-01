import React, { Component } from 'react';
import './PprNav.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink, } from 'reactstrap';


class PprNav extends Component {
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
      <div className="PprNav">
        <Navbar color="light" light expand="md">
          <NavbarToggler onClick={this.toggle} className="sub-nav"/>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="#">Plan Information</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Benefits & CSR</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Rates</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Plan Coverage</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default PprNav;