import React from "react";
import "./index.scss";

import { Container, Row, Col } from "react-bootstrap";

import downloadapp from "../../../assert/download.gif";
import Addfamilymembers from "../../../assert/Addfamilymembers.gif";
import StartConnecting from "../../../assert/StartConnecting.gif";
import Createclub from "../../../assert/StartConnecting.gif";
import Becomecontentcreator from "../../../assert/Becomecontentcreator.gif";
import Editandpostvideos from "../../../assert/Becomecontentcreator.gif";
import howitswork from "../../../assert/howitswork.gif";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Appinstruction = () => {
  const List = [
    {
      img: downloadapp,
      Title: "1.Download",
    },

    {
      img: Addfamilymembers,
      Title: "2.Add family member",
    },
    {
      img: StartConnecting,
      Title: "3.Start Connecting",
    },
    {
      img: Createclub,
      Title: "4.Create club",
    },
    {
      img: Becomecontentcreator,
      Title: "5.Become content creator ",
    },
    {
      img: Editandpostvideos,
      Title: "6.Edit and post videos ",
    },
  ];
  return (
    <>
      <Container
        style={{
          marginTop: "10%",
          overflowX: "hidden",
        }}
        fluid
      >
        <Row>
          <Col className="d-flex align-items-center justify-content-center ">
            <div>
              <img
                src={howitswork}
                alt="how its work"
                loading="lazy"
                width={"100%"}
                height={600}
                className="rounded-4 border border-dark"
              ></img>
            </div>
          </Col>

          <Col>
            <AnimationOnScroll
              animateIn="animate__fadeInRight"
              className="appinstruction-content"
            >
              <p className=" mt-4">How it Works</p>

              <Row>
                <p className="appinstruction-title mt-3">
                  Download the app, create your
                  <br /> family network, you're all set!
                </p>
              </Row>
              <Row>
                <p className="appinstruction-desc">
                  {" "}
                  You can download the app from both App store and play store
                  and start exploring your family members. Getherly provides
                  features such as wall and limelight where you can post videos
                  and photos to your family members. You can also create a
                  public club in limelight and kickstart your content creation
                  with our unique editing options.
                </p>
              </Row>
              <Container fluid>
                <div className="app-working-steps">
                  {List.map((value, index) => {
                    return (
                      <Row key={index}>
                        <Col>
                          <img
                            src={value.img}
                            width={"50"}
                            height={"50"}
                            alt=""
                          ></img>
                          <p>{value.Title}</p>
                        </Col>
                      </Row>
                    );
                  })}
                </div>
              </Container>
            </AnimationOnScroll>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Appinstruction;
