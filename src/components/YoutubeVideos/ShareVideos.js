import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { shareVideo } from "../../actions/video";

const initialState = {
  youtubeUrl: "",
  creator: "",
};
const ShareVideos = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const [formData, setFormData] = useState({
    ...initialState,
    creator: user?.result?.name,
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    console.log(e);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(shareVideo(formData, navigate));
  };
  useEffect(() => {
    if (!user) navigate("/signin");
  }, []);
  return (
    <Container component="main" className="mt-5">
      <Row className="justify-content-md-center">
        <Col sm={6} className="form-styles">
          <form onSubmit={handleSubmit}>
            <h3 className="text-center">Share a Youtube movie</h3>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Youtube URL</Form.Label>
              <Form.Control
                type="text"
                name="youtubeUrl"
                placeholder="Enter a URL"
                required
                onChange={handleChange}
                value={formData.email}
              />
            </Form.Group>
            <div className="text-center">
              <Button
                variant="primary"
                type="submit"
                className="justify-content-md-center"
              >
                Share
              </Button>
            </div>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default ShareVideos;
