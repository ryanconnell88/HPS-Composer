import React, { Component } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  Nav,
  NavItem,
  NavLink,
  Col
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./FormHeader.css";

class FormHeader extends Component {
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
      <div className="FormHeader">
        <Nav>
          <Col xs="6">
            <NavItem>
              <h5>{this.props.title}</h5>
            </NavItem>
          </Col>
          <Col className="env">
            <NavItem>
              <NavLink>
                <FontAwesomeIcon icon="envelope" />
              </NavLink>
            </NavItem>
          </Col>
          <Col className="elp">
            <NavItem>
              <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle
                  tag="span"
                  onClick={this.toggle}
                  data-toggle="dropdown"
                  aria-expanded={this.state.dropdownOpen}
                >
                  <FontAwesomeIcon icon="ellipsis-v" />
                </DropdownToggle>
                <DropdownMenu>
                  <div className="dropdown-item" onClick={this.toggle}>
                    <FontAwesomeIcon icon="clipboard" /> Add To-Do
                  </div>
                  <div className="dropdown-item" onClick={this.toggle}>
                    <FontAwesomeIcon icon="file-alt" /> Notes
                  </div>
                  <div className="dropdown-item" onClick={this.toggle}>
                    <FontAwesomeIcon icon="sliders-h" /> Customization
                  </div>
                </DropdownMenu>
              </Dropdown>
            </NavItem>
          </Col>
        </Nav>

        <hr />
      </div>
    );
  }
}
export default FormHeader;
