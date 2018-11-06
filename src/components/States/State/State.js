import React from 'react';
import { Button } from 'reactstrap';
import './State.css';

const State = props => {
  return (
    <div className="State">
      <Button>{props.suf}</Button>
    </div>
  );
};
export default State;