import React from 'react';
import FormHeader from '../FormHeader/FormHeader';
import FormContainer from '../FormContainer/FormContainer';
import FileDropper from '../FileDropper/FileDropper';
import './CarrierLogo.css';

const CarrierLogo = props => {
  return (
    <div className="CarrierLogo">
      <FormContainer>
        <FormHeader title="Carrier Logo"/>
        <FileDropper/>
      </FormContainer>
    </div>
  );
};
export default CarrierLogo;