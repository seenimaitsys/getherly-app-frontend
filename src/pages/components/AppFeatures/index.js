import React from "react";
import "./index.scss";
import image27 from "../../../assert/Image27.png";
import image28 from "../../../assert/Image28.png";
import Celebrating from "../../../assert/Celebrating.svg";
import RealTimeUpdates from "../../../assert/Real-Time Updates.svg";
import PreservingCulturalTraditions from "../../../assert/PreservingCulturalTraditions.svg";
import FosterInteractivity from "../../../assert/FosterInteractivity.svg";
import ShareableJoy from "../../../assert/ShareableJoy.svg";
import appfeature from "../../../assert/appfeature.gif";
import robot from "../../../assert/robot.png";
import { Container, Row, Col } from "react-bootstrap";
import { AnimationOnScroll } from "react-animation-on-scroll";
const AppFeatures = () => {
  const featureList = [
    {
      img: Celebrating,
      Title: "Celebrating Milestones",
      Desc: "From birthdays to graduations, mark every milestone with a  personalized touch Our video feature ensures that each significant moment  is highlighted and cherished, creating a treasure trove of memories.",
    },
    {
      img: RealTimeUpdates,
      Title: "Real-Time Updates",
      Desc: "Stay connected like never before. Share live updates, achievements,and spontaneous family moments instantly through captivating videos. Your family network becomes a lively, real-time reflection of your shared experiences.",
    },
    {
      img: PreservingCulturalTraditions,
      Title: "Preserving Cultural Traditions",
      Desc: "Pass down cultural heritage and traditions through visually rich videos. Whether it's a family recipe demonstration or a cultural ritual, our app becomes the digital canvas preserving the richness of your family's unique identity.",
    },
    {
      img: FosterInteractivity,
      Title: "Foster Interactivity",
      Desc: "Engage in a whole new way with video replies, comments, and collaborative creations. Spark conversations, share reactions, and strengthen the bonds within your family through the interactive magic of video communication.",
    },
    {
      img: ShareableJoy,
      Title: "Shareable Joy",
      Desc: "Spread joy effortlessly by sharing your family's laughter, successes, and heartwarming moments with a broader circle. Our app transforms your family's happiness into shareable content, radiating positivity across your extended family community.",
    },
  ];
  return (
    <>
      <Container
        fluid
        className="d-flex justify-content-center app-features-head"
      >
        {/* <p>APP FEATURES</p> */}
      </Container>
      <Container
        fluid
        className="d-flex flex-column justify-content-center align-items-center"
      >
        <Row className="w-100">
          <Col
            sm={2}
            className="app-features-demo-img d-flex justify-content-start flex-column"
          >
            <img
              src={robot}
              style={{ marginLeft: "-20%" }}
              alt="robo"
              width="100%"
              height="290.692px"
              loading="lazy"
            ></img>
            <div>
              <img
                src={appfeature}
                alt="how its work"
                loading="lazy"
                width={"100%"}
                style={{ borderRadius: "20px" }}
              ></img>
            </div>
          </Col>

          <Col
            sm={8}
            className="app-features-contents d-flex align-items-center justify-content-start flex-column"
          >
            <h2>
              Getherly is the Only App you need to<br></br> Connect with your
              Family<br></br> and watch your Network Grow.
            </h2>
            <Container
              fluid
              className="d-flex align-items-center justify-content-center gap-3 flex-column mt-5"
            >
              {featureList.map((value, index) => {
                return (
                  <AnimationOnScroll animateIn="animate__fadeIn" key={index}>
                    <Row className="d-flex align-items-center justify-content-center flex-column ">
                      <Row>
                        <Col className="d-flex align-items-center justify-content-center gap-2 ">
                          <img
                            src={value.img}
                            alt="i"
                            loading="lazy"
                            width={"30"}
                            height={"30"}
                          ></img>
                          <h4>{value.Title}</h4>
                        </Col>
                      </Row>
                      <Row className="app-feature-desc">
                        <p>{value.Desc}</p>
                      </Row>
                    </Row>
                  </AnimationOnScroll>
                );
              })}
            </Container>
          </Col>
          <Col className="d-flex align-items-center justify-content-center flex-column">
            <div>
              <img
                src={image27}
                alt="how its work"
                loading="lazy"
                width={"100%"}
                className="rounded-4 "
              ></img>
            </div>
            <div className="mt-5">
              <img
                src={image28}
                alt="how its work"
                loading="lazy"
                width={"100%"}
                className="rounded-4 mt-5"
              ></img>
            </div>
          </Col>
          {/* <Col sm={2}>
            <div>
              <img
                src={image27}
                alt="imagemobile"
                loading="lazy"
                width={"98%"}
              ></img>
            </div>

            <img
              style={{ marginTop: "17vh" }}
              src={image28}
              alt="imagemobile"
              loading="lazy"
              width={"98%"}
            ></img>
          </Col> */}
        </Row>
      </Container>
    </>

    //old code
    // <>
    //   <Container
    //     fluid
    //     className="d-flex justify-content-center app-features-head"
    //   >
    //     <p>APP FEATURES</p>
    //   </Container>
    //   <Container
    //     fluid
    //     className="d-flex flex-column justify-content-center align-items-center"
    //   >
    //     <Row className="w-100">
    //       <Col sm={3} className="d-flex justify-content-start">
    //         <img
    //           src={robot}
    //           style={{ marginLeft: "-5vh" }}
    //           alt=""
    //           width="200px"
    //           height="290.692px"
    //           loading="lazy"
    //         ></img>
    //       </Col>
    //       <Col sm={8} className="d-flex align-items-center">
    //         <p className="ss">
    //           Getherly is the Only App you need to<br></br> Connect with your
    //           Family<br></br> and watch your Network Grow.
    //         </p>
    //       </Col>
    //     </Row>
    //     <div className="feature-info-main-con">
    //       {List1.map((list, index) => {
    //         return (
    //           <div
    //             style={{
    //               display: "flex",
    //               width: "55vh",
    //             }}
    //             key={index}
    //           >
    //             <div style={{ marginRight: "10px" }}>
    //               <img src={list.img} alt="" loading="lazy"></img>
    //             </div>
    //             <div style={{ width: "400px", alignItems: "self-start" }}>
    //               <div className="info-heading">{list.Title}</div>
    //               <div className="info-inner-contend">{list.content}</div>
    //             </div>
    //           </div>
    //         );
    //       })}
    //     </div>
    //   </Container>
    // </>
  );
};

export default AppFeatures;
