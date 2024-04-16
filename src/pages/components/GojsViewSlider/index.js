import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import demoImg from "../../../assert/demo.png";
import "./index.scss";
import image21 from "../../../assert/image21.png";
import { Container, Button, Form, Col, Row, Image } from "react-bootstrap";
import { Modal } from "@mui/material";
import OrgChart from "../Gojs/Orgchart/index.js";
import Genogram from "../Gojs/GenogramLayout/index.js";
import IncrementalTree from "../Gojs/IncrementalTree/index.js";
import VectorNoborderDown from "../../../assert/VectorNo_border_Dowm.svg";
import Header from "../Header/index.js";
const GojsViewSlider = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [show, setShow] = useState(false);
  const [nodeObject, setNodeObject] = useState({});
  const [diagramObject, setDiagramObject] = useState({});

  const handleClose = () => setShow(false);
  const SlickArrowLeft = ({ currentSlide, style, slideCount, ...props }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      {...props}
      style={{
        ...style,

        width: "5vh",
        height: "10vh",
        marginLeft: "-5vh",
      }}
      className={
        "slick-prev slick-arrow" + (currentSlide === 0 ? " slick-disabled" : "")
      }
      aria-hidden="true"
    >
      <path
        d="M20.9001 26C21.0844 26.1909 21.337 26.3008 21.6024 26.3055C21.8677 26.3102 22.1241 26.2093 22.3151 26.025C22.506 25.8406 22.6159 25.588 22.6206 25.3226C22.6253 25.0573 22.5244 24.8009 22.3401 24.61L17.4301 19.61L22.3301 14.61C22.5163 14.4226 22.6208 14.1691 22.6208 13.905C22.6208 13.6408 22.5163 13.3873 22.3301 13.2C22.1438 13.0152 21.8924 12.9111 21.6301 12.91C21.4977 12.9105 21.3669 12.9373 21.245 12.9888C21.1231 13.0403 21.0127 13.1155 20.9201 13.21L15.3301 18.93C15.1498 19.1164 15.0491 19.3656 15.0491 19.625C15.0491 19.8843 15.1498 20.1335 15.3301 20.32L20.9001 26Z"
        fill="url(#paint0_linear_220_4)"
      />
      <path
        d="M20.26 36.3101C23.5709 36.3101 26.8074 35.3283 29.5602 33.4889C32.3131 31.6494 34.4587 29.035 35.7257 25.9762C36.9927 22.9173 37.3243 19.5515 36.6783 16.3042C36.0324 13.057 34.4381 10.0742 32.097 7.73309C29.7558 5.39196 26.773 3.79763 23.5258 3.15171C20.2786 2.50579 16.9127 2.8373 13.8539 4.10431C10.795 5.37132 8.1806 7.51694 6.34119 10.2698C4.50177 13.0227 3.51999 16.2592 3.51999 19.5701C3.52529 24.0082 5.29066 28.263 8.42887 31.4012C11.5671 34.5394 15.8219 36.3048 20.26 36.3101ZM20.26 4.83006C23.1753 4.83006 26.0251 5.69454 28.4491 7.3142C30.8731 8.93385 32.7623 11.2359 33.878 13.9293C34.9936 16.6227 35.2855 19.5864 34.7168 22.4457C34.148 25.305 32.7442 27.9314 30.6827 29.9928C28.6213 32.0542 25.9949 33.4581 23.1356 34.0268C20.2763 34.5956 17.3126 34.3037 14.6192 33.188C11.9259 32.0724 9.62378 30.1831 8.00413 27.7592C6.38448 25.3352 5.51999 22.4854 5.51999 19.5701C5.52528 15.6624 7.07994 11.9163 9.84308 9.15315C12.6062 6.39001 16.3523 4.83535 20.26 4.83006Z"
        fill="url(#paint1_linear_220_4)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_220_4"
          x1="22.6201"
          y1="19.58"
          x2="15.0301"
          y2="19.58"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0072D4" />
          <stop offset="1" stopColor="#7B15FF" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_220_4"
          x1="37.01"
          y1="19.5701"
          x2="3.51999"
          y2="19.5701"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0072D4" />
          <stop offset="1" stopColor="#7B15FF" />
        </linearGradient>
      </defs>
    </svg>
  );
  const SlickArrowRight = ({ currentSlide, style, slideCount, ...props }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      {...props}
      style={{
        ...style,

        width: "5vh",
        height: "10vh",
        marginRight: "-4vh",
      }}
      className={
        "slick-next slick-arrow" +
        (currentSlide === slideCount - 1 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
    >
      <path
        d="M19.0999 14C18.9156 13.8091 18.663 13.6992 18.3976 13.6945C18.1323 13.6898 17.8759 13.7907 17.6849 13.975C17.494 14.1594 17.3841 14.412 17.3794 14.6774C17.3747 14.9427 17.4756 15.1991 17.6599 15.39L22.5699 20.39L17.6699 25.39C17.4837 25.5774 17.3792 25.8309 17.3792 26.095C17.3792 26.3592 17.4837 26.6127 17.6699 26.8C17.8562 26.9848 18.1076 27.0889 18.3699 27.09C18.5023 27.0895 18.6331 27.0627 18.755 27.0112C18.8769 26.9597 18.9873 26.8845 19.0799 26.79L24.6699 21.07C24.8502 20.8836 24.9509 20.6344 24.9509 20.375C24.9509 20.1157 24.8502 19.8665 24.6699 19.68L19.0999 14Z"
        fill="url(#paint0_linear_219_38)"
      />
      <path
        d="M19.74 3.68994C16.4291 3.68994 13.1926 4.67173 10.4398 6.51114C7.68688 8.35055 5.54128 10.965 4.27426 14.0238C3.00725 17.0827 2.67575 20.4485 3.32166 23.6958C3.96758 26.943 5.56191 29.9258 7.90304 32.2669C10.2442 34.608 13.227 36.2024 16.4742 36.8483C19.7214 37.4942 23.0873 37.1627 26.1461 35.8957C29.205 34.6287 31.8194 32.4831 33.6588 29.7302C35.4982 26.9773 36.48 23.7408 36.48 20.4299C36.4747 15.9918 34.7093 11.737 31.5711 8.59882C28.4329 5.46061 24.1781 3.69523 19.74 3.68994ZM19.74 35.1699C16.8247 35.1699 13.9749 34.3055 11.5509 32.6858C9.12692 31.0662 7.23766 28.7641 6.12202 26.0707C5.00639 23.3773 4.71449 20.4136 5.28323 17.5543C5.85198 14.695 7.25583 12.0686 9.31725 10.0072C11.3787 7.94576 14.0051 6.54191 16.8644 5.97317C19.7237 5.40442 22.6874 5.69632 25.3808 6.81196C28.0741 7.92759 30.3762 9.81685 31.9959 12.2408C33.6155 14.6648 34.48 17.5146 34.48 20.4299C34.4747 24.3376 32.9201 28.0837 30.1569 30.8469C27.3938 33.61 23.6477 35.1646 19.74 35.1699Z"
        fill="url(#paint1_linear_219_38)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_219_38"
          x1="17.3799"
          y1="20.42"
          x2="24.9699"
          y2="20.42"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0072D4" />
          <stop offset="1" stopColor="#7B15FF" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_219_38"
          x1="2.99001"
          y1="20.4299"
          x2="36.48"
          y2="20.4299"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0072D4" />
          <stop offset="1" stopColor="#7B15FF" />
        </linearGradient>
      </defs>
    </svg>
  );
  const settings = {
    infinite: false,

    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    autoplay: false,

    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1.9,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
    arrows: true,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    // nextArrow: (
    //   <div>
    //     <div style={{ marginTop: "-60px", marginLeft: "2vh" }}>
    //       <svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         width="40"
    //         height="40"
    //         viewBox="0 0 40 40"
    //         fill="none"
    //       >
    //         <path
    //           d="M19.0999 14C18.9156 13.8091 18.663 13.6992 18.3976 13.6945C18.1323 13.6898 17.8759 13.7907 17.6849 13.975C17.494 14.1594 17.3841 14.412 17.3794 14.6774C17.3747 14.9427 17.4756 15.1991 17.6599 15.39L22.5699 20.39L17.6699 25.39C17.4837 25.5774 17.3792 25.8309 17.3792 26.095C17.3792 26.3592 17.4837 26.6127 17.6699 26.8C17.8562 26.9848 18.1076 27.0889 18.3699 27.09C18.5023 27.0895 18.6331 27.0627 18.755 27.0112C18.8769 26.9597 18.9873 26.8845 19.0799 26.79L24.6699 21.07C24.8502 20.8836 24.9509 20.6344 24.9509 20.375C24.9509 20.1157 24.8502 19.8665 24.6699 19.68L19.0999 14Z"
    //           fill="url(#paint0_linear_219_38)"
    //         />
    //         <path
    //           d="M19.74 3.68994C16.4291 3.68994 13.1926 4.67173 10.4398 6.51114C7.68688 8.35055 5.54128 10.965 4.27426 14.0238C3.00725 17.0827 2.67575 20.4485 3.32166 23.6958C3.96758 26.943 5.56191 29.9258 7.90304 32.2669C10.2442 34.608 13.227 36.2024 16.4742 36.8483C19.7214 37.4942 23.0873 37.1627 26.1461 35.8957C29.205 34.6287 31.8194 32.4831 33.6588 29.7302C35.4982 26.9773 36.48 23.7408 36.48 20.4299C36.4747 15.9918 34.7093 11.737 31.5711 8.59882C28.4329 5.46061 24.1781 3.69523 19.74 3.68994ZM19.74 35.1699C16.8247 35.1699 13.9749 34.3055 11.5509 32.6858C9.12692 31.0662 7.23766 28.7641 6.12202 26.0707C5.00639 23.3773 4.71449 20.4136 5.28323 17.5543C5.85198 14.695 7.25583 12.0686 9.31725 10.0072C11.3787 7.94576 14.0051 6.54191 16.8644 5.97317C19.7237 5.40442 22.6874 5.69632 25.3808 6.81196C28.0741 7.92759 30.3762 9.81685 31.9959 12.2408C33.6155 14.6648 34.48 17.5146 34.48 20.4299C34.4747 24.3376 32.9201 28.0837 30.1569 30.8469C27.3938 33.61 23.6477 35.1646 19.74 35.1699Z"
    //           fill="url(#paint1_linear_219_38)"
    //         />
    //         <defs>
    //           <linearGradient
    //             id="paint0_linear_219_38"
    //             x1="17.3799"
    //             y1="20.42"
    //             x2="24.9699"
    //             y2="20.42"
    //             gradientUnits="userSpaceOnUse"
    //           >
    //             <stop stopColor="#0072D4" />
    //             <stop offset="1" stopColor="#7B15FF" />
    //           </linearGradient>
    //           <linearGradient
    //             id="paint1_linear_219_38"
    //             x1="2.99001"
    //             y1="20.4299"
    //             x2="36.48"
    //             y2="20.4299"
    //             gradientUnits="userSpaceOnUse"
    //           >
    //             <stop stopColor="#0072D4" />
    //             <stop offset="1" stopColor="#7B15FF" />
    //           </linearGradient>
    //         </defs>
    //       </svg>
    //     </div>
    //   </div>
    // ),

    // prevArrow: (
    //   <div>
    //     <div style={{ marginTop: "-60px", marginLeft: "-5vh" }}>
    //       <svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         width="40"
    //         height="40"
    //         viewBox="0 0 40 40"
    //         fill="none"
    //       >
    //         <path
    //           d="M20.9001 26C21.0844 26.1909 21.337 26.3008 21.6024 26.3055C21.8677 26.3102 22.1241 26.2093 22.3151 26.025C22.506 25.8406 22.6159 25.588 22.6206 25.3226C22.6253 25.0573 22.5244 24.8009 22.3401 24.61L17.4301 19.61L22.3301 14.61C22.5163 14.4226 22.6208 14.1691 22.6208 13.905C22.6208 13.6408 22.5163 13.3873 22.3301 13.2C22.1438 13.0152 21.8924 12.9111 21.6301 12.91C21.4977 12.9105 21.3669 12.9373 21.245 12.9888C21.1231 13.0403 21.0127 13.1155 20.9201 13.21L15.3301 18.93C15.1498 19.1164 15.0491 19.3656 15.0491 19.625C15.0491 19.8843 15.1498 20.1335 15.3301 20.32L20.9001 26Z"
    //           fill="url(#paint0_linear_220_4)"
    //         />
    //         <path
    //           d="M20.26 36.3101C23.5709 36.3101 26.8074 35.3283 29.5602 33.4889C32.3131 31.6494 34.4587 29.035 35.7257 25.9762C36.9927 22.9173 37.3243 19.5515 36.6783 16.3042C36.0324 13.057 34.4381 10.0742 32.097 7.73309C29.7558 5.39196 26.773 3.79763 23.5258 3.15171C20.2786 2.50579 16.9127 2.8373 13.8539 4.10431C10.795 5.37132 8.1806 7.51694 6.34119 10.2698C4.50177 13.0227 3.51999 16.2592 3.51999 19.5701C3.52529 24.0082 5.29066 28.263 8.42887 31.4012C11.5671 34.5394 15.8219 36.3048 20.26 36.3101ZM20.26 4.83006C23.1753 4.83006 26.0251 5.69454 28.4491 7.3142C30.8731 8.93385 32.7623 11.2359 33.878 13.9293C34.9936 16.6227 35.2855 19.5864 34.7168 22.4457C34.148 25.305 32.7442 27.9314 30.6827 29.9928C28.6213 32.0542 25.9949 33.4581 23.1356 34.0268C20.2763 34.5956 17.3126 34.3037 14.6192 33.188C11.9259 32.0724 9.62378 30.1831 8.00413 27.7592C6.38448 25.3352 5.51999 22.4854 5.51999 19.5701C5.52528 15.6624 7.07994 11.9163 9.84308 9.15315C12.6062 6.39001 16.3523 4.83535 20.26 4.83006Z"
    //           fill="url(#paint1_linear_220_4)"
    //         />
    //         <defs>
    //           <linearGradient
    //             id="paint0_linear_220_4"
    //             x1="22.6201"
    //             y1="19.58"
    //             x2="15.0301"
    //             y2="19.58"
    //             gradientUnits="userSpaceOnUse"
    //           >
    //             <stop stopColor="#0072D4" />
    //             <stop offset="1" stopColor="#7B15FF" />
    //           </linearGradient>
    //           <linearGradient
    //             id="paint1_linear_220_4"
    //             x1="37.01"
    //             y1="19.5701"
    //             x2="3.51999"
    //             y2="19.5701"
    //             gradientUnits="userSpaceOnUse"
    //           >
    //             <stop stopColor="#0072D4" />
    //             <stop offset="1" stopColor="#7B15FF" />
    //           </linearGradient>
    //         </defs>
    //       </svg>
    //     </div>
    //   </div>
    // ),
  };

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form_Data = new FormData(event.target);
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      setShow(false);

      const tempNode = {
        name: form_Data.get("name"),
        relationship: form_Data.get("relationship"),
        phone: form_Data.get("phone"),
        pic: demoImg,
        parent: nodeObject.key,
      };
      diagramObject.startTransaction("add person");
      diagramObject.model.addNodeData(tempNode);
      const newnode = diagramObject.findNodeForData(tempNode);
      if (newnode) newnode.location = nodeObject.location;
      diagramObject.commitTransaction("add person");
      diagramObject.commandHandler.scrollToPart(newnode);
    }
    setValidated(true);
  };
  ///Modelstyle
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    border: "none !important",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  const Show_AddPersion_Model = (node, diagram) => {
    setShow(true);
    setNodeObject(node);
    setDiagramObject(diagram);
  };

  return (
    <>
      <Header />
      <Container
        fluid
        className="mt-2 d-flex flex-column align-items-center justify-content-center views-slider-container mb-5"
      >
        <h2
          className="mb-3 text-custom-gray-600 fw-800 font-Poppins"
          style={{ fontSize: "clamp(20px, 5vw, 40px)" }}
        >
          Hello ! Senthil Raj , you can access different views in web
        </h2>

        <Slider {...settings} className="image-slider w-90">
          <OrgChart Show_AddPersion_Model={Show_AddPersion_Model} />
          <IncrementalTree Show_AddPersion_Model={Show_AddPersion_Model} />
          <Genogram />
        </Slider>

        <div className="image-slider-bottam-design  mt-n7 d-flex align-items-center justify-content-end w-100 z-1">
          <div className="rounded-circle mt-6 h-8 bg-rounded-background d-flex align-items-center justify-content-center border border-info ">
            <p
              className="p-5 text-white font-Poppins fw-semibold"
              style={{ fontSize: "clamp(12px, 3.5vw, 20px)" }}
            >
              You can add your family
              <br /> members in editor view
            </p>
          </div>
          <Image src={image21} alt="robo" loading="lazy"></Image>
        </div>
      </Container>
      <Modal
        open={show}
        style={{ backdropFilter: "blur(10px)" }}
        onClose={handleClose}
      >
        <Container style={{ ...style }} fluid className="border-0">
          <Col lg={4}>
            <Form
              noValidate
              validated={validated}
              onSubmit={handleSubmit}
              className="d-flex flex-column "
            >
              <Container
                className="add-persion w-100 gap-4 p-15 rounded-10 bg-add-persion-module d-flex flex-column justify-content-center"
                fluid
              >
                <Row className="d-flex  ">
                  <Col lg={5} className="d-flex ">
                    <p className="font-Poppins fw-semibold fs-20"> Name</p>
                    <p className="w-100 text-end font-Poppins fw-semibold fs-20">
                      {" "}
                      :
                    </p>
                  </Col>
                  <Col>
                    <Form.Group as={Col}>
                      <Form.Control
                        type="text"
                        placeholder="Name"
                        maxLength="30"
                        name="name"
                        autoComplete="off"
                        className="addpersion-input d-flex  border-0 rounded"
                        required
                      />
                      <Form.Control.Feedback
                        type="invalid"
                        className="text-start"
                      >
                        required field.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>

                <Row className="d-flex  " fluid>
                  <Col
                    className="d-flex align-items-center justify-content-center"
                    lg={5}
                  >
                    <p className="font-Poppins fw-semibold fs-20">
                      {" "}
                      Relationship
                    </p>
                    <p className="w-100 text-end"> :</p>
                  </Col>
                  <Col className="d-flex">
                    <Form.Group
                      controlId="validationCustom02"
                      className="w-100 "
                    >
                      <Form.Select
                        required
                        className="addpersion-input  d-flex border-0 rounded"
                        autoComplete="off"
                        name="relationship"
                        role="button"
                        tabIndex="0"
                      >
                        <option value="" hidden>
                          Relationship
                        </option>
                        <option value="Father">Father</option>
                        <option value="mother">Mother</option>

                        <option value="Brother">Brother</option>
                        <option value="Sister">Sister</option>
                        <option value="Son">Son</option>
                      </Form.Select>

                      <Form.Control.Feedback type="invalid">
                        Enter valid input
                      </Form.Control.Feedback>
                    </Form.Group>
                    <div className="d-flex align-items-center justify-content-center">
                      <img
                        src={VectorNoborderDown}
                        alt="vector"
                        className={`position-absolute ${
                          validated ? "mb-4" : "mb-0"
                        }`}
                        role="button"
                        tabIndex="0"
                        style={{
                          marginRight: "2rem",
                        }}
                      ></img>
                    </div>
                  </Col>
                </Row>
                <Row className="d-flex ">
                  <Col
                    lg={5}
                    className="d-flex align-items-center justify-content-center"
                  >
                    <p className="text-nowrap font-Poppins fw-semibold fs-20">
                      Ph no
                    </p>
                    <p className="w-100 text-end"> :</p>
                  </Col>
                  <Col>
                    <Form.Group as={Col}>
                      <Form.Control
                        type="text"
                        placeholder="Name"
                        maxLength="30"
                        name="name"
                        autoComplete="off"
                        className="addpersion-input d-flex w-100 align-items-start border-0 rounded"
                        required
                      />
                      <Form.Control.Feedback
                        type="invalid"
                        className="text-start"
                      >
                        required field.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>
              </Container>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Button
                  type="submit"
                  className="mt-4 w-50 rounded-pill addpersion-submit"
                >
                  Submit
                </Button>
              </div>
            </Form>
          </Col>
        </Container>
      </Modal>
    </>
  );
};
export default GojsViewSlider;
