import React from "react";
import { Table, Input, Button, ButtonGroup } from "reactstrap";


import "./ProgressModalTable.css";

const ProgressModalTable = props => {
  
  return (
    <div className="ProgressModalTable">
      <Table bordered>
        <tbody>
          <tr>
            <td className="norm">Core</td>
            <td className="success">Carrier Details</td>
            <td className="success">Business Details</td>
            <td className="success">States</td>
            <td className="success">Legal Entities</td>
          </tr>
          <tr>
            <td className="norm">Product, Plans & Rating</td>
            <td className="success">Plan Info</td>
            <td className="success">Load Plans & Rates</td>
            <td className="danger">Coverage Edits</td>
          </tr>
          <tr>
            <td className="norm">Finance & Billing</td>
            <td className="success">Billing & Finance Info</td>
            <td className="warning">Configure Batch Jobs</td>
            <td className="success">Set Program Rules</td>
            <td className="success">Manage db Entries</td>
          </tr>
          <tr>
            <td className="norm">Exchangelink</td>
            <td className="success">WTX/WMB</td>
            <td className="success">EMC</td>
            <td className="success">Core Services</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};
export default ProgressModalTable;
