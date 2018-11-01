import React, { Component } from "react";
import "./CoreNav.css";
import { Route, Switch , NavLink as RRNavLink} from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import CoreBusiness from "../../core/CoreBusiness/CoreBusiness";
import CoreCarrier from "../../core/CoreCarrier/CoreCarrier";
import CoreLegal from "../../core/CoreLegal/CoreLegal";
import CoreLine from "../../core/CoreLine/CoreLine";

class CoreNav extends Component {
  //sub-nav for core pages 
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
      <div className="CoreNav">
        <Navbar color="light" light expand="md">
          <NavbarToggler onClick={this.toggle} className="sub-nav"/>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink to="/core/carrier-details" tag={RRNavLink}>Carrier Details</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/core/business-details" tag={RRNavLink}>Business Details</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/core/line-of-business" tag={RRNavLink}>Line of Business</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/core/legal-entity" tag={RRNavLink}>Legal Entity</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <Switch>
            <Route path="/core/carrier-details" exact  component={CoreCarrier}/>
            <Route path="/core/business-details" exact component={CoreBusiness}/>
            <Route path="/core/line-of-business" exact component={CoreLine}/>
            <Route path="/core/legal-entity" exact component={CoreLegal}/>
        </Switch>
      </div>
    );
  }
}

export default CoreNav;
