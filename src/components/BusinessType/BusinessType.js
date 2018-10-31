import React from 'react';
import { Button } from 'reactstrap';
import FormHeader from '../FormHeader/FormHeader';
import FormContainer from '../FormContainer/FormContainer';
import './BusinessType.css';

const BusinessType = props => {
  return (
    <div className="BusinessType">
      <FormContainer>
        <FormHeader title="Business Type" />
        <Button>Individual On-Exchange</Button>
        <Button>Individual Off-Exchange</Button>
        <Button>Group Off-Exchange</Button>
        <Button color="danger">Clear All</Button>
      </FormContainer>
    </div>
  );
};
export default BusinessType;
