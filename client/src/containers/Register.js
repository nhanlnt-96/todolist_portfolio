import React from "react";
import { Row, Col, Divider } from "antd";
import { withRouter } from "react-router";

import "../styles/Register.css";

const Register = () => {
  return (
    <div className="register">
      <Row className="register-header">
        <Col xs={24} sm={24} md={4} lg={4} className="header-logo">
          <h1>.todolist</h1>
        </Col>
        <Col xs={24} sm={24} md={20} lg={20} className="header-content">
          <h3>
            Already a member? <button>Sign in</button>
          </h3>
        </Col>
      </Row>
      <Divider style={{ marginTop: 0, backgroundColor: "#e3e7f1" }} />
      <Row className="register-form">
        <Col lg={12} className="register-title">
          <h2>.todolist</h2>
          <h2>Sign up</h2>
        </Col>
        <Col lg={12}>col-12</Col>
      </Row>
    </div>
  );
};

export default withRouter(Register);
