import React from "react";
import video from "../../assert/images/video1.mp4";
import { Container, Col } from "react-bootstrap";

const GetherlyVideo = () => {
  return (
    <>
      <Container
        fluid
        className="d-flex justify-content-center align-items-center mt-5"
      >
        <Col xl={7} sm={8} md={9} lg={7}>
          <video
            width="100%"
            height="100%"
            controls
            className="getherly-logo mt-10 rounded-20 shadow object-fit-cover"
            autoPlay
          >
            <source src={video} type="video/mp4" />
          </video>
        </Col>
      </Container>
    </>
  );
};
export default GetherlyVideo;
