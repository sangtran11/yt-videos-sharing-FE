import React, { useState, useEffect } from "react";
import { Container, Row, Col, Stack } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchVideos } from "../../actions/video";
import EmbedVideos from "../YoutubeVideos/EmbedVideos";
import "./style.scss";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const videos = useSelector((state) => state.videos);
  useEffect(() => {
    dispatch(fetchVideos());
  }, [dispatch]);
  return (
    <Container className="mt-5">
      {videos.length > 0 ? (
        videos.map((item, index) => {
          return (
            <Row className="py-4 border-bottom" key={index}>
              <Col col={6} className="text-end">
                <EmbedVideos videoId={item.videoId} />
              </Col>
              <Col col={6}>
                <Stack gap={3}>
                  <p>
                    Creator: <b>{item.creator}</b>
                  </p>
                  <p>
                    CreatedAt:{" "}
                    <b>
                      {new Date(item.createdAt).toLocaleDateString("en-US")}
                    </b>
                  </p>
                </Stack>
              </Col>
            </Row>
          );
        })
      ) : (
        <p className="text-center">There is no data !!!</p>
      )}
    </Container>
  );
};
export default Home;
