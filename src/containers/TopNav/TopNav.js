import React, { Component } from 'react';
import { Route, Switch , NavLink as RRNavLink} from "react-router-dom";
import './TopNav.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink, } from 'reactstrap';
 
  import CoreNav from '../subNavs/CoreNav/CoreNav';
  import ExchangeNav from '../subNavs/ExchangeNav/ExchangeNav';
  import FinanceNav from '../subNavs/FinanceNav/FinanceNav';
  import OperationsNav from '../subNavs/OperationsNav/OperationsNav';
  import PprNav from '../subNavs/PprNav/PprNav';
  import SalesNav from '../subNavs/SalesNav/SalesNav';
  import SlpNav from '../subNavs/SlpNav/SlpNav';


class TopNav extends Component {
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
      <div className="TopNav">
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Dynamic Name</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink to="/core/carrier-details" tag={RRNavLink} >CORE</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/ppr" tag={RRNavLink}>PPR</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/exchange" tag={RRNavLink}>EXCHANGE LINK</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/slp" tag={RRNavLink}>SLP</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/sales" tag={RRNavLink}>SALES LINK</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/operations" tag={RRNavLink}>OPERATIONS</NavLink>
              </NavItem>
              <NavItem>
                <NavLink  to="/finance" tag={RRNavLink}>FINANCE & BILLING</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <Switch>
            <Route path="/core"  component={CoreNav}/>
            <Route path="/exchange" exact component={ExchangeNav}/>
            <Route path="/finance" exact component={FinanceNav}/>
            <Route path="/operations" exact component={OperationsNav}/>
            <Route path="/ppr" exact component={PprNav}/>
            <Route path="/sales" exact component={SalesNav}/>
            <Route path="/slp" exact component={SlpNav}/>
        </Switch>
      </div>
    );
  }
}

export default TopNav;