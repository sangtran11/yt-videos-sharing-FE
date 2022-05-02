import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import "./styles.scss";
import { signin } from "../../actions/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const initialState = {
  email: "",
  password: "",
};

const Auth = () => {
  const [formData, setFormData] = useState(initialState);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSwitchMode = () => {
    navigate("/signup");
    setFormData(initialState);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signin(formData, navigate));
  };
  return (
    <Container component="main" className="mt-5">
      <Row className="justify-content-md-center">
        <Col sm={6} className="form-styles">
          <form onSubmit={handleSubmit}>
            <h3 className="text-center">Sign In</h3>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                required
                onChange={handleChange}
                value={formData.email}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                required
                onChange={handleChange}
                value={formData.password}
              />
            </Form.Group>
            <div className="text-center">
              <Button
                variant="primary"
                type="submit"
                className="justify-content-md-center"
              >
                Sign In
              </Button>
              <p className="mt-3 c-pointer" onClick={onSwitchMode}>
                Don't have an account? Sign Up
              </p>
            </div>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default Auth;
