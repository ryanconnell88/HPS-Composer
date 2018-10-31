import React from "react";
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

const FormHeader = props => {
  return (
    <div className="FormHeader">
      
      <Nav>
        <Col xs="6">
        <NavItem>
          <h5>{props.title}</h5>
        </NavItem>
        </Col>
        <Col className="env">
        <NavItem>
          <NavLink>
            <FontAwesomeIcon  icon="envelope" />
          </NavLink>
        </NavItem>
        </Col>
        <Col className="elp">
        <NavItem>
          <Dropdown  isOpen={props.isOpen} toggle={props.toggle}>
            <DropdownToggle
              tag="span"
              onClick={props.toggle}
              data-toggle="dropdown"
              aria-expanded={props.isOpen}
            >
              <FontAwesomeIcon icon="ellipsis-v" />
            </DropdownToggle>
            <DropdownMenu>
              <div className="dropdown-item" onClick={props.toggle}><FontAwesomeIcon icon="file-alt" /> Notes </div>
              <div className="dropdown-item" onClick={props.toggle}><FontAwesomeIcon icon="sliders-h" /> Customization </div>
              <div className="dropdown-item" onClick={props.toggle}><FontAwesomeIcon icon="clipboard" /> Add To-Do </div>
            </DropdownMenu>
          </Dropdown>
        </NavItem>
        </Col>
      </Nav>

      <hr />
    </div>
  );
};
export default FormHeader;
