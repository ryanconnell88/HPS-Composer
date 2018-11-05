import React from "react";
import { Row, Col } from "reactstrap";
import ConfigProvider from "../ConfigProvider/ConfigProvider";
import ConfigOnboarding from '../ConfigOnboarding/ConfigOnboarding';

import "./ConfigProviders.css";

const ConfigProviders = props => {
  let providers = props.providers.map((provider, index) => {
    return (
      <Col key={index}>
        <ConfigProvider
          provider={provider.providerName}
          date={provider.updateDate}
          img={provider.image}
          name={provider.updateName} 
        />
      </Col>
    );
  });

  let onboarding = props.onboarding.map((provider, index) => {
    return (
      <Col  key={index}>
        <ConfigOnboarding
          provider={provider.providerName}
          date={provider.updateDate}
          img={provider.image}
          name={provider.updateName}
          
        />
      </Col>
    );
  });

  return (
    <div className="ConfigProviders">
      <Row>
        {providers}
      </Row>
      <h5> Current Onboarding</h5>
      <Row>
        {onboarding}
      </Row>
    </div>
  );
};
export default ConfigProviders;
