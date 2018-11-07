import React, { Component } from "react";
import { Route, Switch, NavLink as RRNavLink } from "react-router-dom";
import "./TopNav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

import CoreNav from "../subNavs/CoreNav/CoreNav";
import ExchangeNav from "../subNavs/ExchangeNav/ExchangeNav";
import FinanceNav from "../subNavs/FinanceNav/FinanceNav";
import OperationsNav from "../subNavs/OperationsNav/OperationsNav";
import PprNav from "../subNavs/PprNav/PprNav";
import SalesNav from "../subNavs/SalesNav/SalesNav";
import SlpNav from "../subNavs/SlpNav/SlpNav";



class TopNav extends Component {
  //nav for sub-navs
  //the following methods are for reactstrap navbar
  constructor(props) {
    super(props);
    // for toggling the top navigation bar
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
      <div className="TopNav">
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/"><FontAwesomeIcon icon="th-large" /></NavbarBrand>
          <NavbarBrand href="/">Dynamic Name</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          {/*use navlinks to route to the switch */}
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink to="/console/core/carrier-details" tag={RRNavLink}>
                  CORE
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/console/ppr/plan-information" tag={RRNavLink}>
                  PPR
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/console/exchange" tag={RRNavLink}>
                  EXCHANGE LINK
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/console/slp" tag={RRNavLink}>
                  SLP
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/console/sales" tag={RRNavLink}>
                  SALES LINK
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/console/operations" tag={RRNavLink}>
                  OPERATIONS
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/console/finance" tag={RRNavLink}>
                  FINANCE & BILLING
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <Switch>
          {/* use switch to route to the subnavs */}
          <Route path="/console/core" component={CoreNav} />
          <Route path="/console/exchange"  component={ExchangeNav} />
          <Route path="/console/finance"  component={FinanceNav} />
          <Route path="/console/operations"  component={OperationsNav} />
          <Route path="/console/ppr"  component={PprNav} />
          <Route path="/console/sales"  component={SalesNav} />
          <Route path="/console/slp"  component={SlpNav} />
        </Switch>
      </div>
    );
  }
}

export default TopNav;
//
