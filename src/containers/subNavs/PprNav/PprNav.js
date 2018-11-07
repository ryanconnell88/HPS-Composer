import React, { Component } from 'react';
import { Route, Switch, NavLink as RRNavLink } from "react-router-dom";
import './PprNav.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';
  import PlanInfo from "../../ppr/PlanInfo/PlanInfo";


class PprNav extends Component {
  //sub-nav for PPR pages 
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
      <div className="PprNav">
        <Navbar color="light" light expand="md">
          <NavbarToggler onClick={this.toggle} className="sub-nav"/>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink to="/console/ppr/plan-information" tag={RRNavLink}>Plan Information</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/console/ppr">Benefits & CSR</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/console/ppr">Rates</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/console/ppr">Plan Coverage</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        
          <Route path="/console/ppr/plan-information" exact component={PlanInfo}/>

        
      </div>
    );
  }
}

export default PprNav;