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
import { Container, Row, Col, Image } from "react-bootstrap";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { UseGetScreenResolution } from "../GetScreenResolution";
const AppFeatures = () => {
  const [currentResolution] = UseGetScreenResolution();
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
        className="d-flex flex-column justify-content-center align-items-center mt-5"
      >
        <Row className="w-100">
          <Col
            sm={2}
            className="app-features-demo-img d-flex justify-content-start flex-column d-none d-lg-block "
          >
            <Image
              src={robot}
              style={{ marginLeft: "-20%" }}
              alt="robo"
              width="100%"
              height="290.692px"
              loading="lazy"
            ></Image>
            <div>
              <Image
                src={appfeature}
                alt="how its work"
                loading="lazy"
                width={"100%"}
                className="rounded-4 "
              ></Image>
            </div>
          </Col>
          <Col className="d-flex d-lg-none">
            <Col>
              <Image
                src={appfeature}
                alt="how its work"
                loading="lazy"
                width={"60%"}
                fluid={true}
                style={{ borderRadius: "10px" }}
              ></Image>
            </Col>
            <Col>
              <Image
                src={image27}
                alt="how its work"
                loading="lazy"
                width={"60%"}
                style={{ borderRadius: "10px" }}
              ></Image>
            </Col>
          </Col>
          <Col
            lg={8}
            sm={12}
            className="app-features-contents d-flex align-items-center justify-content-start flex-column"
          >
            <h2
              style={{
                fontSize:
                  currentResolution <= 992
                    ? "clamp(10px, 5.2vw, 3.6rem)"
                    : " clamp(20px, 3.5vw, 3rem)",
              }}
            >
              Getherly is the Only App you need to<br></br> Connect with your
              Family<br></br> and watch your Network Grow.
            </h2>
            <Container
              fluid
              className="d-flex align-items-center justify-content-center gap-3 flex-column mt-4 mt-lg-5"
            >
              {featureList.map((value, index) => {
                return (
                  <AnimationOnScroll animateIn="animate__fadeIn" key={index}>
                    <Row className="d-flex align-items-center justify-content-center flex-column ">
                      <Col
                        className="d-flex align-items-center justify-content-center gap-2 "
                        sm={12}
                        xs={12}
                      >
                        <img src={value.img} alt="i" loading="lazy"></img>
                        <h4 className="h2">{value.Title}</h4>
                      </Col>

                      <Col className="app-feature-desc mt-2" sm={12} lg={10}>
                        <p>{value.Desc}</p>
                      </Col>
                    </Row>
                  </AnimationOnScroll>
                );
              })}
            </Container>
          </Col>
          <Col className="d-flex align-items-center justify-content-center flex-column d-none d-lg-block mt-5">
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
