import React from "react";
import "./index.scss";
import video from "../../../assert/video1.mp4";
import robot from "../../../assert/robot2.png";
import { Row, Container, Col } from "react-bootstrap";
import { UseGetScreenResolution } from "../GetScreenResolution";
const VideoList = () => {
  const [currentResolution] = UseGetScreenResolution();
  const video_list = [
    {
      video: video,
      video_title: "How do i add a family member?",
    },
    {
      video: video,
      video_title: "How do i add a family member?",
    },
    {
      video: video,
      video_title: "How do i add a family member?",
    },
    {
      video: video,
      video_title: "How do i add a family member?",
    },
    {
      video: video,
      video_title: "How do i add a family member?",
    },
    {
      video: video,
      video_title: "How do i add a family member?",
    },
    {
      video: video,
      video_title: "How do i add a family member?",
    },
  ];
  return (
    <>
      <Container fluid className="overflow-hidden">
        <Row style={{ width: "110%" }}>
          <Col lg={6} md={12}>
            <img
              src={robot}
              alt="robo"
              width={"80%"}
              height={"80%"}
              loading="lazy"
            ></img>
          </Col>
          <Col
            lg={6}
            md={12}
            // sm={6}
            className="mb-5 mb-xl-3 videolist-continer d-flex gap-5"
          >
            {/* <div className="videolist-continer w-100"> */}
            {video_list.map((list, index) => {
              return (
                <Row>
                  <Col key={index} lg={4} sm={5}>
                    <video
                      width={`100%`}
                      height="120px"
                      controls
                      title={list.video_title}
                    >
                      <source src={list.video} type="video/mp4" />
                    </video>
                  </Col>
                  <Col
                    className="d-flex align-items-center justify-content-center justify-content-lg-start justify-content-sm-start "
                    xs={12}
                    lg={6}
                    sm={6}
                  >
                    <p>{list.video_title}</p>
                  </Col>
                </Row>
              );
            })}
            {/* </div> */}
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default VideoList;
