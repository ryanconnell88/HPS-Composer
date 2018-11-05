import React from "react";
import logo2 from "../../assets/img/logo2.png";

import {  Link } from "react-router-dom";
import { Form, FormGroup, Input, Col, Button } from "reactstrap";
import "./Login.css";

const Login = props => (
  <div className="Login">
    <img src={logo2} alt="logo" />
    <Form>
      <FormGroup controlId="formHorizontalEmail">
        <Col sm={10}>
          <Input type="email" placeholder="Email" />
        </Col>
      </FormGroup>
      <FormGroup controlId="formHorizontalPassword">
        <Col sm={10}>
          <Input type="password" placeholder="Password" />
        </Col>
      </FormGroup>
      <FormGroup>
    <Col sm={10}>
    <Link to="/configurator"> <Button className="login-btn" type="submit"> Login</Button></Link>
    </Col>
  </FormGroup>
    </Form>
    
  </div>
);
export default Login;
