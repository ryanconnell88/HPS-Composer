import React from 'react';
import { Button } from 'reactstrap';
import FormHeader from '../FormHeader/FormHeader';
import FormContainer from '../FormContainer/FormContainer';
import './BusinessTypeAlt.css';

const BusinessTypeAlt = props => {
  return (
    <div className="BusinessTypeAlt">
      <FormContainer>
        <FormHeader title="Business Type" />
        <Button>Individual On-Exchange</Button>
        <Button>Individual Off-Exchange</Button>
        <Button>Group</Button>
      </FormContainer>
    </div>
  );
};
export default BusinessTypeAlt;