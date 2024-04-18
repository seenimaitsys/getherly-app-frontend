import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import appcontent_Ellipse from "../../assert/image3.png";
import getherly_mobile_message from "../../assert/image4.png";

import { Button } from "@mui/material";
import { AppButtonProps, AppContent_ImageProps } from "./dynamicData";
import { UseGetScreenResolution } from "../GetScreenResolution";
const AppContent = () => {
  const [currentResolution] = UseGetScreenResolution();
  return (
    <>
      <Container fluid className="mt-4">
        <Row className="gap-1">
          <Col
            md={3}
            className="gap-5 d-flex d-md-none d-none d-md-block d-lg-block"
          >
            {AppContent_ImageProps.map((data, index) => {
              return (
                <React.Fragment key={index}>
                  <Image {...data}></Image>
                </React.Fragment>
              );
            })}
          </Col>
          <Col className="d-flex justify-content-center align-items-center ">
            <Col
              className="app-content  d-flex flex-column align-items-lg-end  align-items-sm-center align-items-md-center"
              md={12}
              lg={7}
              xxl={7}
              sm={12}
              xs={12}
            >
              <div className="d-flex flex-column align-items-center ">
                <h2
                  className={`text-appcontent-title font-Poppins fw-800 fst-normal lh-normal`}
                  style={{
                    fontSize:
                      currentResolution <= 992
                        ? "clamp(1.3rem, 9vw, 4.5rem)"
                        : "clamp(2rem, 4vw, 4.5rem)",
                  }}
                >
                  Discover, Connect,
                  <br /> Communicate and <br />
                  Celebrate with your <br />
                  family and relatives.
                </h2>

                <p
                  className="text-appcontent-desc font-Poppins  fst-normal lh-0 fw-medium text-center mt-2"
                  style={{
                    fontSize:
                      currentResolution <= 992
                        ? "clamp(10px, 4.6vw, 3.6rem)"
                        : " clamp(10px, 2vw, 1.8rem)",
                  }}
                >
                  Getherly is now available to Download from <br />
                  both Google Play store and App Store
                </p>

                <div className="d-flex  justify-content-around align-items-center gap-4">
                  {AppButtonProps.map((data, index) => {
                    return (
                      <a {...data.links} key={index}>
                        <Button
                          {...data.buttonProps}
                          className="text-decoration-none"
                        >
                          {data.btnName}{" "}
                        </Button>
                      </a>
                    );
                  })}
                </div>
              </div>
            </Col>

            <Col
              className="d-flex d-md-none d-none d-md-block d-lg-block"
              xxl={5}
            >
              <Col className=" d-flex align-items-start justify-content-end flex-column ">
                <div className="d-flex align-items-center justify-content-center flex-column">
                  <img
                    src={appcontent_Ellipse}
                    alt="appcontent_Ellipse"
                    className="z-1"
                    width={"50%"}
                    height={"100%"}
                    loading="lazy"
                  ></img>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="182"
                    height="105"
                    style={{ marginTop: "-30%" }}
                    viewBox="0 0 182 105"
                    fill="none"
                  >
                    <path
                      d="M90.9987 0.097404L181.043 52.1733L90.9987 104.249L0.954555 52.1733L90.9987 0.097404Z"
                      fill="url(#paint0_linear_201_165)"
                      colorInterpolationFilters="0.5"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_201_165"
                        x1="136.021"
                        y1="7.15126"
                        x2="45.9767"
                        y2="97.1954"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#6C7BFF" />
                        <stop offset="1" stopColor="#31B5FF" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="262"
                    height="123"
                    viewBox="0 0 262 123"
                    fill="none"
                    style={{ marginTop: "-35%" }}
                  >
                    <g filter="url(#filter0_f_201_164)">
                      <ellipse
                        cx="131"
                        cy="61.3326"
                        rx="122.884"
                        ry="53.6655"
                        fill="url(#paint0_radial_201_164)"
                        colorInterpolationFilters="0.6"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_f_201_164"
                        x="0.708538"
                        y="0.258953"
                        width="260.584"
                        height="122.147"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="BackgroundImageFix"
                          result="shape"
                        />
                        <feGaussianBlur
                          stdDeviation="3.70408"
                          result="effect1_foregroundBlur_201_164"
                        />
                      </filter>
                      <radialGradient
                        id="paint0_radial_201_164"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(131 61.3326) rotate(90) scale(53.6655 122.884)"
                      >
                        <stop stopColor="#739AFF" />
                        <stop offset="1" stopColor="#6978FF" stopOpacity="0" />
                      </radialGradient>
                    </defs>
                  </svg>
                </div>
                <img
                  src={getherly_mobile_message}
                  alt="getherly_mobile_message"
                  width={"100%"}
                  height={"100%"}
                ></img>
              </Col>
            </Col>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AppContent;
