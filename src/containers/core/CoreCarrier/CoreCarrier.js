import React, { Component } from 'react';
import { Container } from 'reactstrap';
import './CoreCarrier.css';
import HeaderNotification from '../../../components/HeaderNotification/HeaderNotification';
import CarrierLogo from '../../../components/CarrierLogo/CarrierLogo';
import CarrierName from '../../../components/CarrierName/CarrierName';
import lorem from '../../../assets/js/lorem';

class CoreCarrier extends Component {
  
  render() {
    return (
      <div className="CoreCarrier">
        <Container>
          <HeaderNotification header={lorem.header} text={lorem.text} />
          <CarrierName/>
          <CarrierLogo/>
        </Container>
      </div>
    );
  }
}

export default CoreCarrier;
