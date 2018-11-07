import React from 'react';
import { Button, ButtonGroup, Col, Row } from 'reactstrap';
import FormHeader from '../FormHeader/FormHeader';
import FormContainer from '../FormContainer/FormContainer';
import State from "../States/State/State";
import states from "../../assets/js/states";
import './States.css';

const States = props => {
  let theStates = Object.keys(states).map((state, index) =>{
    return (
      <Col xs="2" sm="2" md="2" lg="2" key={index}>
        <State  suf={state}/>
      </Col>  
        
    ); 
  });
  return (
    <div className="States">
      <FormContainer>
        <FormHeader title="States" />
        <Row>
        {theStates}
        </Row>
        <ButtonGroup>
          <Button>Select All</Button>
          <Button>Copy All</Button>
          <Button>Clear All</Button>
        </ButtonGroup>
      </FormContainer>
    </div>
  );
};
export default States;