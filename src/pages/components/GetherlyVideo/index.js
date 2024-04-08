import React from "react";
import "./index.scss";
import video from "../../../assert/video1.mp4";
import { Container } from "react-bootstrap";

const GetherlyVideo = () => {
  return (
    <>
      <Container
        fluid
        className="d-flex justify-content-center align-items-center mt-5"
      >
        <video
          width="60%"
          height="100%"
          controls
          className="getherly-logo"
          autoPlay
        >
          <source src={video} type="video/mp4" />
        </video>
      </Container>
    </>
  );
};
export default GetherlyVideo;
