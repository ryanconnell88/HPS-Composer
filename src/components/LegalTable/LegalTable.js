import React from "react";
import { Button, Table, Input } from "reactstrap";
import coreData from "../../assets/js/coreData";


import "./LegalTable.css";

const LegalTable = props => {
  let legalTableData = coreData.legalTableData.map((data, index) => {
    return (
      <tr>
        <td>{data.legalEntities}</td>
        <td>{data.address}</td>
      </tr>
    );
  });
  return (
    <div className="LegalTable">
      <Table striped>
        <thead>
          <tr>
            <th>Legal Entities</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {legalTableData}
        </tbody>
      </Table>
    </div>
  );
};
export default LegalTable;
