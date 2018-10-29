import React, { Component } from 'react';
import './CoreCarrier.css';
import HeaderNotification from '../../../components/HeaderNotification/HeaderNotification';
import lorem from '../../../assets/js/lorem';



class CoreCarrier extends Component {

  render() {
    return (
      <div className="CoreCarrier">
        <HeaderNotification header={lorem.header} text={lorem.text}/>
      </div>
    );
  }
}

export default CoreCarrier;