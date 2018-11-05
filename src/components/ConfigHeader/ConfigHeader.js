import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "reactstrap";

import "./ConfigHeader.css";

const ConfigHeader = props => (
  <div className="ConfigHeader">
    <nav>
      <ul>
        <li>
          <a>
            <FontAwesomeIcon className="header-icon" icon="th-large" />
          </a>
        </li>
        <li>
          <a  className="header-text">HPS Configurator</a>
        </li>
        <li>
          <a>
            <FontAwesomeIcon className="header-cog" icon="cog" />
          </a>
        </li>
        <li>
          <a>
            <FontAwesomeIcon className="header-ellipsis" icon="ellipsis-h" />
          </a>
        </li>
        <li>
          <Link to="/console/core/carrier-details">
            <Button className="new-provider">New Provider</Button>
          </Link>
        </li>
      </ul>
    </nav>
      
  </div>
);
export default ConfigHeader;
