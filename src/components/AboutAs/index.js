import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { UseGetScreenResolution } from "../GetScreenResolution";
import { AboutDesignData, Dynamic_image_about_page } from "./AboutDesignData";
import Spaker_img from "../../../src/assert/images/speaker.svg";
import Round_eclipse from "../../../src/assert/images/round-eclipse-img.svg";
const AboutAs = () => {
  const [currentResolution] = UseGetScreenResolution();

  return (
    <>
      <div>
        <div>
          <h1 className="text-center w-100 fw-800 text-custom-gray-600 font-Poppins display-4">
            Hello ! This is Getherly
          </h1>

          <div className="d-flex justify-content-center align-items-center w-100 position-relative mt-3">
            {" "}
            <p
              className="position-absolute text-custom-gray-500 font-Inter fw-normal h3 mt-xl-custom-5 mt-custom-3"
              // style={{
              //   marginTop: currentResolution <= 992 ? "3rem" : "5rem",
              // }}
            >
              We Connect Families.
            </p>
          </div>

          <Image
            {...Dynamic_image_about_page[0]}
            style={{ height: currentResolution <= 992 ? "12rem" : "" }}
          ></Image>
        </div>

        <div className="about-main-continer w-100 mt-3 mt-lg-5  d-flex align-items-start">
          <Image
            src={Round_eclipse}
            alt="round-eclips"
            className="d-none d-md-block d-xl-block d-xxl-block d-xxl-block"
            loading="lazy"
          ></Image>
          <Container fluid className="d-flex mt-3">
            <Col
              xl={7}
              className="mt-0 mt-lg-5  d-flex flex-column align-items-start justify-content-start text-start"
            >
              <Row>
                <Image src={Spaker_img} alt="ausoment" loading="lazy"></Image>
              </Row>
              <Row>
                <h2 className="mt-3 text-custom-gray-400 fw-bold font-Inter h1">
                  Who we are?
                </h2>
              </Row>
              <Row>
                <p className="text-custom-gray-300 font-Inter fw-normal mt-lg-4 mt-2 h3">
                  Getherly is a family app which helps you stay connected with
                  your family and create family trees and make your family
                  network even bigger , better and stronger. You canexplore
                  Family members and connect with them at ease.
                </p>
              </Row>
              <Row className="p-3">
                {AboutDesignData.map((items, index) => {
                  return (
                    <Container className="mt-lg-2 mt-0" key={index}>
                      <div className="d-flex align-items-center gap-1">
                        <Image {...Dynamic_image_about_page[1]}></Image>

                        <div className=" text-custom-gray-600 fw-medium font-Inter p-10 h4 w-93">
                          {items.content}
                        </div>
                      </div>
                    </Container>
                  );
                })}
              </Row>
            </Col>

            <Col xl={5} className=" d-none d-xl-block d-lg-none mt-5">
              <Image {...Dynamic_image_about_page[2]}></Image>
              <Image {...Dynamic_image_about_page[3]}></Image>
            </Col>
          </Container>
        </div>
      </div>
    </>
  );
};
export default AboutAs;
