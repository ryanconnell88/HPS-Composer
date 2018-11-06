import React from 'react';
import { Button } from 'reactstrap';
import FormHeader from '../FormHeader/FormHeader';
import FormContainer from '../FormContainer/FormContainer';
import './LineType.css';

const LineType = props => {
  return (
    <div className="LineType">
      <FormContainer>
        <FormHeader title="Line of Business" />
        <Button>Health</Button>
        <Button>Dental</Button>
        <Button>Vision</Button>
        <Button>Pediatric Dental</Button>
        <Button>Short Term Life</Button>
        <Button>AD&D</Button>
      </FormContainer>
    </div>
  );
};
export default LineType;