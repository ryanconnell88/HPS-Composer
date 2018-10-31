import React, { Component } from 'react';
import { Container, Button } from 'reactstrap';
import HeaderNotification from '../../../components/HeaderNotification/HeaderNotification';
import BusinessType from '../../../components/BusinessType/BusinessType';
import './CoreBusiness.css';
import lorem from '../../../assets/js/lorem';



class CoreBusiness extends Component {

  render() {
    return (
      <div className="CoreBusiness">
      <Container>
        <HeaderNotification header={lorem.header} text={lorem.text} />
        <BusinessType/>
        <Button className="business-btn">Next</Button>
      </Container>
      </div>
    );
  }
}

export default CoreBusiness;
