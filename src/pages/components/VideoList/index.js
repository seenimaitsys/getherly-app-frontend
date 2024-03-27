import React from "react";
import "./index.scss";
import video from "../../../assert/video1.mp4";
import robot from "../../../assert/robot2.png";
import { Row, Container, Col } from "react-bootstrap";
const VideoList = () => {
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
        <Row style={{ width: "105%" }}>
          <Col sm={6}>
            <img
              src={robot}
              alt="robo"
              width={"80%"}
              height={"80%"}
              loading="lazy"
            ></img>
          </Col>
          <Col className="w-100">
            <div className="videolist-continer">
              {video_list.map((list, index) => {
                return (
                  <div className="d-flex align-items-center mt-5" key={index}>
                    <video width="30%" height="100px" controls>
                      <source src={list.video} type="video/mp4" />
                    </video>
                    <p>{list.video_title}</p>
                  </div>
                );
              })}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default VideoList;
