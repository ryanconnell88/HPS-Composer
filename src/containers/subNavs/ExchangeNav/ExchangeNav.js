import React, { Component } from 'react';
import './ExchangeNav.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav } from 'reactstrap';


class ExchangeNav extends Component {
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
      <div className="ExchangeNav">
        <Navbar color="light" light expand="md">
          <NavbarToggler className="sub-nav" onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar>
              
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default ExchangeNav;