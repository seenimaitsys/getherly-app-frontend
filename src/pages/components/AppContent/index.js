import React from "react";
import "./index.scss";
import { Container, Row, Col, Image } from "react-bootstrap";
import image3 from "../../../assert/image3.png";
import image4 from "../../../assert/image4.png";

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
                  className="p-10"
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
                  style={{
                    fontSize:
                      currentResolution <= 992
                        ? "clamp(14px, 4.6vw, 3.6rem)"
                        : " clamp(10px, 2vw, 1.8rem)",
                  }}
                >
                  Getherly is now available to Download from <br />
                  both Google Play store and App Store
                </p>

                <div className="d-flex  justify-content-around align-items-center gap-4">
                  {/* <Button
                    type="button"
                    className="btn   btn-appstore text-white shadow "
                    size="lg"
                    style={{ fontWeight: "bold" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="currentColor"
                      className="bi bi-apple"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282" />
                      <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282" />
                    </svg>
                    App Store
                  </Button>
                  <Button
                    type="button"
                    className="btn btn-playstore text-white shadow "
                    size="lg"
                    style={{ fontWeight: "bold" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="currentColor"
                      className="bi bi-google-play"
                      viewBox="0 0 16 16"
                    >
                      <path d="M14.222 9.374c1.037-.61 1.037-2.137 0-2.748L11.528 5.04 8.32 8l3.207 2.96zm-3.595 2.116L7.583 8.68 1.03 14.73c.201 1.029 1.36 1.61 2.303 1.055zM1 13.396V2.603L6.846 8zM1.03 1.27l6.553 6.05 3.044-2.81L3.333.215C2.39-.341 1.231.24 1.03 1.27" />
                    </svg>
                    google play
                  </Button> */}
                  {AppButtonProps.map((data, index) => {
                    return (
                      <a {...data.links} key={index}>
                        <Button {...data.buttonProps}>{data.btnName} </Button>
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
                    src={image3}
                    alt="diamond"
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
                  src={image4}
                  alt="demoimage"
                  width={"100%"}
                  height={"100%"}
                  // style={{ marginLeft: "-10vh" }}
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
