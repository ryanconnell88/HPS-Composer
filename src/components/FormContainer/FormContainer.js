import React from "react";

import "./FormContainer.css";

const FormContainer = props => {
  //A component for adding box shadow to other components 
  return (
    <div className="FormContainer">
      {props.children}
    </div>
  );
};
export default FormContainer;