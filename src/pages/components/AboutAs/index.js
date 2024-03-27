import React from "react";
import "./index.scss";
import { Container, Row, Col } from "react-bootstrap";
import familyImg from "../../../assert/familyimg.png";

import check_circle from "../../../assert/check_circle.svg";
// import Header from "../../../pages/components/Header";
import readangleimg from "../../../assert/Rectangle1.png";
import readangleimg2 from "../../../assert/Rectangle2.png";

const AboutAs = () => {
  const listItems = [
    {
      content: "You can Text and call your Family Members with ease.",
    },
    {
      content:
        "Create a family network which allows you to easily stay in touch with them",
    },
    {
      content:
        "Post Photos and Videos of beautiful family moments and make the most out of the memories.",
    },
  ];
  return (
    <>
      <div className="family-img-continer ">
        <h2>Hello ! This is Getherly</h2>

        <div className="d-flex justify-content-center align-items-center w-100 position-relative">
          {" "}
          <p>We Connect Families.</p>
        </div>

        <img
          src={familyImg}
          alt="getherly-famliy"
          width={"100%"}
          loading="lazy"
        ></img>
      </div>

      <div className="about-main-continer ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="115"
          height="168"
          viewBox="0 0 115 168"
          fill="none"
          id="about-round-eclipse"
        >
          <circle
            cx="30.6074"
            cy="83.6074"
            r="83.6074"
            fill="url(#paint0_radial_53_200)"
            colorInterpolationFilters="0.6"
          />
          <g filter="url(#filter0_d_53_200)">
            <ellipse
              cx="20.3274"
              cy="106.817"
              rx="52.5358"
              ry="32.9122"
              fill="url(#paint1_linear_53_200)"
              colorInterpolationFilters="0.5"
              shapeRendering="crispEdges"
            />
            <path
              d="M72.3456 106.817C72.3456 115.663 66.6207 123.75 57.201 129.651C47.7885 135.547 34.7531 139.212 20.3274 139.212C5.90178 139.212 -7.13366 135.547 -16.5462 129.651C-25.9659 123.75 -31.6908 115.663 -31.6908 106.817C-31.6908 97.9707 -25.9659 89.8842 -16.5462 83.9831C-7.13366 78.0864 5.90178 74.4223 20.3274 74.4223C34.7531 74.4223 47.7885 78.0864 57.201 83.9831C66.6207 89.8842 72.3456 97.9707 72.3456 106.817Z"
              stroke="url(#paint2_linear_53_200)"
              strokeOpacity="0.6"
              strokeWidth="1.03515"
              shapeRendering="crispEdges"
            />
          </g>
          <circle
            cx="20.328"
            cy="76.1272"
            r="66.65"
            fill="url(#paint3_radial_53_200)"
          />
          <g filter="url(#filter1_d_53_200)">
            <ellipse
              cx="20.3278"
              cy="87.1471"
              rx="65.1615"
              ry="38.1208"
              fill="url(#paint4_linear_53_200)"
              colorInterpolationFilters="0.5"
              shapeRendering="crispEdges"
            />
            <path
              d="M84.9717 87.1471C84.9717 97.4141 77.8546 106.804 66.1426 113.656C54.443 120.5 38.2462 124.75 20.3278 124.75C2.40934 124.75 -13.7875 120.5 -25.487 113.656C-37.199 106.804 -44.3162 97.4141 -44.3162 87.1471C-44.3162 76.8801 -37.199 67.4901 -25.487 60.6384C-13.7875 53.7939 2.40934 49.5439 20.3278 49.5439C38.2462 49.5439 54.443 53.7939 66.1426 60.6384C77.8546 67.4901 84.9717 76.8801 84.9717 87.1471Z"
              stroke="url(#paint5_linear_53_200)"
              strokeOpacity="0.6"
              strokeWidth="1.03515"
              shapeRendering="crispEdges"
            />
          </g>
          <circle
            cx="20.3293"
            cy="76.1274"
            r="49.369"
            fill="url(#paint6_radial_53_200)"
          />
          <circle
            cx="20.3293"
            cy="76.1274"
            r="49.369"
            fill="url(#paint7_radial_53_200)"
          />
          <g filter="url(#filter2_d_53_200)">
            <ellipse
              cx="20.3296"
              cy="63.4811"
              rx="64.4987"
              ry="37.2392"
              fill="url(#paint8_linear_53_200)"
              colorInterpolationFilters="0.5"
              shapeRendering="crispEdges"
            />
            <path
              d="M84.3107 63.4811C84.3107 73.5013 77.272 82.6712 65.6783 89.365C54.0982 96.0509 38.0661 100.203 20.3296 100.203C2.59303 100.203 -13.439 96.0509 -25.0191 89.365C-36.6128 82.6712 -43.6516 73.5013 -43.6516 63.4811C-43.6516 53.461 -36.6128 44.2911 -25.0191 37.5973C-13.439 30.9114 2.59303 26.7596 20.3296 26.7596C38.0661 26.7596 54.0982 30.9114 65.6783 37.5973C77.272 44.2911 84.3107 53.461 84.3107 63.4811Z"
              stroke="url(#paint9_linear_53_200)"
              strokeOpacity="0.6"
              strokeWidth="1.03515"
              shapeRendering="crispEdges"
            />
          </g>
          <g filter="url(#filter3_d_53_200)">
            <ellipse
              cx="20.3271"
              cy="44.2515"
              rx="50.0491"
              ry="32.3504"
              fill="url(#paint10_linear_53_200)"
              colorInterpolationFilters="0.5"
              shapeRendering="crispEdges"
            />
            <path
              d="M69.8587 44.2515C69.8587 52.9504 64.4031 60.896 55.4362 66.692C46.4745 72.4846 34.063 76.0844 20.3271 76.0844C6.59117 76.0844 -5.82034 72.4846 -14.782 66.692C-23.749 60.896 -29.2045 52.9504 -29.2045 44.2515C-29.2045 35.5526 -23.749 27.6069 -14.782 21.8109C-5.82034 16.0183 6.59117 12.4186 20.3271 12.4186C34.063 12.4186 46.4745 16.0183 55.4362 21.8109C64.4031 27.6069 69.8587 35.5526 69.8587 44.2515Z"
              stroke="url(#paint11_linear_53_200)"
              strokeOpacity="0.6"
              strokeWidth="1.03515"
              shapeRendering="crispEdges"
            />
          </g>
          <g filter="url(#filter4_d_53_200)">
            <ellipse
              cx="20.3289"
              cy="33.0152"
              rx="31.1518"
              ry="21.1141"
              fill="url(#paint12_linear_53_200)"
              colorInterpolationFilters="0.5"
              shapeRendering="crispEdges"
            />
            <path
              d="M50.9632 33.0152C50.9632 38.6228 47.61 43.7592 42.0662 47.5167C36.5253 51.2722 28.8416 53.6117 20.3289 53.6117C11.8162 53.6117 4.1325 51.2722 -1.40837 47.5167C-6.95212 43.7592 -10.3053 38.6228 -10.3053 33.0152C-10.3053 27.4076 -6.95212 22.2711 -1.40837 18.5137C4.1325 14.7582 11.8162 12.4186 20.3289 12.4186C28.8416 12.4186 36.5253 14.7582 42.0662 18.5137C47.61 22.2711 50.9632 27.4076 50.9632 33.0152Z"
              stroke="url(#paint13_linear_53_200)"
              strokeOpacity="0.6"
              strokeWidth="1.03515"
              shapeRendering="crispEdges"
            />
          </g>
          <circle
            cx="20.328"
            cy="76.1272"
            r="66.65"
            fill="url(#paint14_radial_53_200)"
            colorInterpolationFilters="0.9"
          />
          <defs>
            <filter
              id="filter0_d_53_200"
              x="-38.9368"
              y="67.1762"
              width="120.599"
              height="81.3518"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="1.03515" dy="1.03515" />
              <feGaussianBlur stdDeviation="3.88183" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.440043 0 0 0 0 0.20092 0 0 0 0 0.679167 0 0 0 0.2 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_53_200"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_53_200"
                result="shape"
              />
            </filter>
            <filter
              id="filter1_d_53_200"
              x="-51.5623"
              y="42.2978"
              width="145.85"
              height="91.7688"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="1.03515" dy="1.03515" />
              <feGaussianBlur stdDeviation="3.88183" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.440043 0 0 0 0 0.20092 0 0 0 0 0.679167 0 0 0 0.2 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_53_200"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_53_200"
                result="shape"
              />
            </filter>
            <filter
              id="filter2_d_53_200"
              x="-50.8976"
              y="19.5135"
              width="144.525"
              height="90.0057"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="1.03515" dy="1.03515" />
              <feGaussianBlur stdDeviation="3.88183" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.440043 0 0 0 0 0.20092 0 0 0 0 0.679167 0 0 0 0.2 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_53_200"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_53_200"
                result="shape"
              />
            </filter>
            <filter
              id="filter3_d_53_200"
              x="-36.4506"
              y="5.17253"
              width="115.626"
              height="80.2282"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="1.03515" dy="1.03515" />
              <feGaussianBlur stdDeviation="3.88183" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.440043 0 0 0 0 0.20092 0 0 0 0 0.679167 0 0 0 0.2 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_53_200"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_53_200"
                result="shape"
              />
            </filter>
            <filter
              id="filter4_d_53_200"
              x="-17.5514"
              y="5.17253"
              width="77.831"
              height="57.7556"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="1.03515" dy="1.03515" />
              <feGaussianBlur stdDeviation="3.88183" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.440043 0 0 0 0 0.20092 0 0 0 0 0.679167 0 0 0 0.2 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_53_200"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_53_200"
                result="shape"
              />
            </filter>
            <radialGradient
              id="paint0_radial_53_200"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(30.6074 83.6074) rotate(90) scale(83.6074)"
            >
              <stop stopColor="#FF65C1" />
              <stop offset="1" stopColor="#FF65C1" stopOpacity="0" />
            </radialGradient>
            <linearGradient
              id="paint1_linear_53_200"
              x1="72.8631"
              y1="99.6932"
              x2="-32.1753"
              y2="107.274"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4E53BE" stopOpacity="0.5" />
              <stop offset="0.885417" stopColor="#FB33FF" stopOpacity="0.5" />
              <stop offset="1" stopColor="white" stopOpacity="0.5" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_53_200"
              x1="29.5097"
              y1="154.02"
              x2="36.0589"
              y2="81.1944"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <radialGradient
              id="paint3_radial_53_200"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(-46.322 100.373) rotate(-19.6638) scale(141.555)"
            >
              <stop offset="0.249306" stopColor="white" />
              <stop offset="0.48315" stopColor="#FF8FED" stopOpacity="0.5" />
              <stop offset="0.627037" stopColor="#220C7A" stopOpacity="0.5" />
            </radialGradient>
            <linearGradient
              id="paint4_linear_53_200"
              x1="85.4892"
              y1="78.896"
              x2="-44.6938"
              y2="88.9577"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4E53BE" stopOpacity="0.5" />
              <stop offset="0.885417" stopColor="#FB33FF" stopOpacity="0.5" />
              <stop offset="1" stopColor="white" stopOpacity="0.5" />
            </linearGradient>
            <linearGradient
              id="paint5_linear_53_200"
              x1="31.7169"
              y1="141.82"
              x2="38.8078"
              y2="57.383"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <radialGradient
              id="paint6_radial_53_200"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(36.1948 125.496) rotate(-107.749) scale(99.169)"
            >
              <stop offset="0.223958" stopColor="white" />
              <stop offset="0.466382" stopColor="#FFCEF1" />
              <stop offset="0.682292" stopColor="#B6B9FF" />
              <stop offset="0.881791" stopColor="white" />
            </radialGradient>
            <radialGradient
              id="paint7_radial_53_200"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(44.7215 125.496) rotate(-100.377) scale(135.421)"
            >
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </radialGradient>
            <linearGradient
              id="paint8_linear_53_200"
              x1="84.8282"
              y1="55.4209"
              x2="-44.0102"
              y2="65.5107"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4E53BE" stopOpacity="0.5" />
              <stop offset="0.885417" stopColor="#FB33FF" stopOpacity="0.5" />
              <stop offset="1" stopColor="white" stopOpacity="0.5" />
            </linearGradient>
            <linearGradient
              id="paint9_linear_53_200"
              x1="31.6028"
              y1="116.89"
              x2="38.4404"
              y2="34.3903"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint10_linear_53_200"
              x1="70.3761"
              y1="37.2494"
              x2="-29.7221"
              y2="44.2515"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4E53BE" stopOpacity="0.5" />
              <stop offset="0.885417" stopColor="#FB33FF" stopOpacity="0.5" />
              <stop offset="1" stopColor="white" stopOpacity="0.5" />
            </linearGradient>
            <linearGradient
              id="paint11_linear_53_200"
              x1="29.0748"
              y1="90.6487"
              x2="35.7132"
              y2="19.1034"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint12_linear_53_200"
              x1="51.4807"
              y1="28.4451"
              x2="-10.8504"
              y2="32.6033"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4E53BE" stopOpacity="0.5" />
              <stop offset="0.885417" stopColor="#FB33FF" stopOpacity="0.5" />
              <stop offset="1" stopColor="white" stopOpacity="0.5" />
            </linearGradient>
            <linearGradient
              id="paint13_linear_53_200"
              x1="25.7737"
              y1="63.2972"
              x2="30.3131"
              y2="16.6414"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <radialGradient
              id="paint14_radial_53_200"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(-6.44008 151.196) rotate(-65.1363) scale(210.169)"
            >
              <stop offset="0.249306" stopColor="white" />
              <stop offset="0.48315" stopColor="#FF8FED" stopOpacity="0.5" />
              <stop offset="0.627037" stopColor="#220C7A" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
        <Container fluid className="d-flex">
          <Row>
            <div className="about-info-content">
              <Row>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="64"
                  height="64"
                  viewBox="0 0 64 64"
                  fill="none"
                >
                  <path
                    d="M64 32C64 37.71 59.25 42.34 53.39 42.34C47.53 42.34 42.78 37.71 42.78 32C42.78 26.29 47.53 21.66 53.39 21.66C59.25 21.66 64 26.29 64 32ZM7.3 38.85H3.65C1.63 38.85 0 37.22 0 35.2V28.8C0 26.79 1.63 25.15 3.65 25.15H7.3V38.85Z"
                    fill="#2E2E2E"
                  />
                  <path
                    d="M17.07 46.82H15.56V44.39H17.07C17.29 44.39 17.47 44.57 17.47 44.79V46.43C17.47 46.64 17.29 46.82 17.07 46.82Z"
                    fill="#E0E2E0"
                  />
                  <path
                    d="M12.62 58.27C10.68 58.27 9.10001 56.7 9.10001 54.75V38.91H16.13V54.76C16.14 56.7 14.56 58.27 12.62 58.27Z"
                    fill="#2E2E2E"
                  />
                  <path
                    d="M7.49001 42.32L24.19 42.33V21.66H7.51001C5.85001 21.66 4.50001 22.97 4.50001 24.58L4.48001 39.38C4.48001 41.01 5.83001 42.32 7.49001 42.32Z"
                    fill="#E0E2E0"
                  />
                  <path
                    d="M52.77 56.71L22.99 42.34V21.66L52.77 7.29V56.71Z"
                    fill="#2E2E2E"
                  />
                  <path
                    d="M53.39 59.41C51.86 59.41 50.62 58.2 50.62 56.71V7.29C50.62 5.8 51.86 4.59 53.39 4.59C54.92 4.59 56.16 5.8 56.16 7.29V56.72C56.16 58.2 54.92 59.41 53.39 59.41Z"
                    fill="#E0E2E0"
                  />
                </svg>
              </Row>
              <Row>
                <h2>Who we are?</h2>
              </Row>
              <Row>
                <p>
                  Getherly is a family app which helps you stay connected with
                  your family and create family trees and make your family
                  network even bigger , better and stronger. You canexplore
                  Family members and connect with them at ease.
                </p>
              </Row>
              <Row className="p-3">
                {listItems.map((items, index) => {
                  return (
                    <Container
                      style={{
                        marginTop: "2vh",
                      }}
                      key={index}
                    >
                      <div className="d-flex align-items-center">
                        <img
                          alt="check"
                          src={check_circle}
                          loading="lazy"
                          width={"20px"}
                          height={"20px"}
                        ></img>

                        <div className="listitems">{items.content}</div>
                      </div>
                    </Container>
                  );
                })}
              </Row>
            </div>

            <Col className="about-design-image d-flex align-items-end flex-column justify-content-center">
              <img
                src={readangleimg}
                alt="family"
                loading="lazy"
                width={"70%"}
              ></img>
              <img
                src={readangleimg2}
                loading="lazy"
                className="design-img2"
                alt="yourFriends"
                width={"50%"}
              ></img>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
export default AboutAs;
