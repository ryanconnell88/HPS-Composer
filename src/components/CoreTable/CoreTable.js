import React from "react";
import { Table, Input, Button, ButtonGroup } from "reactstrap";
import coreData from "../../assets/js/coreData";

import "./CoreTable.css";

const CoreTable = props => {
  let coreTableData = coreData.coreTableData.map((data, index) => {
    return (
      <tr>
        <td>{data.businessType}</td>
        <td>{data.lineOfBusiness}</td>
        <td>{data.states}</td>
        <td>
          <Input type="select" name="select">
            <option>Legal Entity 1</option>
            <option>Legal Entity 2</option>
            <option>Legal Entity 3</option>
          </Input>
        </td>
        <td>
          <ButtonGroup>
            <Button color="success">Add</Button>
            <Button color="danger">Split</Button>
          </ButtonGroup>
          
        </td>
      </tr>
    );
  });
  return (
    <div className="CoreTable">
      <Table striped>
        <thead>
          <tr>
            <th>Business Type</th>
            <th>Line of Business</th>
            <th>State</th>
            <th>Legal Entities</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {coreTableData}
        </tbody>
      </Table>
    </div>
  );
};
export default CoreTable;
