import React from "react";

import "./FormContainer.css";

const FormContainer = props => {
  return (
    <div className="FormContainer">
      {props.children}
    </div>
  );
};
export default FormContainer;