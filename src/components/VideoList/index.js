import React from "react";
import robot from "../../assert/images/robot2.png";

import { Row, Container, Col } from "react-bootstrap";
// import { UseGetScreenResolution } from "../GetScreenResolution";
import { GetherlyVideoList } from "./GetherlyVideoLists";
const VideoList = () => {
  // const [currentResolution] = UseGetScreenResolution();

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
            className="d-flex flex-column h-700 border-custom-videolist-border bg-videolist-bg p-30 overflow-y-scroll rounded-start-20 mb-5 mb-xl-3 videolist-continer  gap-5"
          >
            {GetherlyVideoList.map((list, index) => {
              return (
                <Row key={index}>
                  <Col lg={4} sm={5}>
                    <video
                      // width={`${currentResolution <= 775 ? "80%" : "100%"}`}
                      height="120px"
                      controls
                      title={list.video_title}
                      className="rounded-2 shadow"
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
                    <p className="text-black font-Poppins fw-medium fs-25 p-10">
                      {list.video_title}
                    </p>
                  </Col>
                </Row>
              );
            })}
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default VideoList;
