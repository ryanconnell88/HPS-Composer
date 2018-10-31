import React from "react";
import FormHeader from "../FormHeader/FormHeader";
import FormContainer from "../FormContainer/FormContainer";
import "./CarrierName.css";

const CarrierName = props => {
  return (
    <div className="CarrierName">
      <FormContainer>
        <FormHeader title="Name of the Carrier" />
        <input placeholder="Enter carrier name here"></input>
      </FormContainer>
    </div>
  );
};
export default CarrierName;
