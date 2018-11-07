import React from 'react';
import FormHeader from '../../../../components/FormHeader/FormHeader';
import FormContainer from '../../../../components/FormContainer/FormContainer';
import './Info.css';

const Info = props => {
  return (
    <div className="Info">
      <FormContainer>
        <FormHeader title={props.title} />
      </FormContainer>
    </div>
  );
};
export default Info;