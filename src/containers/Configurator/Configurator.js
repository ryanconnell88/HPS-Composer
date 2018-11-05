import React, { Component } from 'react';
import ConfigHeader from '../../components/ConfigHeader/ConfigHeader';
import ConfigProviders from '../../components/ConfigProviders/ConfigProviders';

import './Configurator.css';
import img1 from '../../assets/img/aetna.png';
import img2 from '../../assets/img/aig.png';
import img3 from '../../assets/img/cigna.png';
import img4 from '../../assets/img/florida-blue.png';
import img5 from '../../assets/img/united.png';
import img6 from '../../assets/img/wellmark.png';


class Configurator extends Component {
  state = {
    providers: [
      { providerName: "aetna", updateDate: "11/11/11", updateName: "Max", image:img1 },
      { providerName: "AIG", updateDate: "11/11/11", updateName: "Max", image:img2 },
      { providerName: "cigna", updateDate: "11/11/11", updateName: "Max", image:img3 },
      { providerName: "florida Blue", updateDate: "11/11/11", updateName: "Max", image:img4 }
    ],

    onboardingProviders: [
      { providerName: "united Healthcare", updateDate: "11/11/11", updateName: "Max", image:img5 },
      { providerName: "wellmark", updateDate: "11/11/11", updateName: "Max", image:img6 }
    ] 
  };

  render() {
    return (
      <div className="Configurator">
        <ConfigHeader/>
        <ConfigProviders onboarding={this.state.onboardingProviders} providers={this.state.providers}/>
      </div>
    );
  }
}

export default Configurator;