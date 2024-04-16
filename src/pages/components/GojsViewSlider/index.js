import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import demoImg from "../../../assert/demo.png";
import robot from "../../../assert/image21.png";
import { Container, Button, Form, Col, Row, Image } from "react-bootstrap";
import { Modal } from "@mui/material";
import OrgChart from "../Gojs/Orgchart/index.js";
import Genogram from "../Gojs/GenogramLayout/index.js";
import IncrementalTree from "../Gojs/IncrementalTree/index.js";
import Header from "../Header/index.js";
import {
  SlickArrowLeft,
  SlickArrowRight,
  DynamicData_form,
} from "./GojsModel/index.js";
const GojsViewSlider = () => {
  const [show, setShow] = useState(false);
  const [nodeObject, setNodeObject] = useState({});
  const [diagramObject, setDiagramObject] = useState({});

  const handleClose = () => setShow(false);
  //for slider
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

        <div className=" mt-n7 d-flex align-items-center justify-content-end w-100 z-1">
          <div className="rounded-circle mt-6 h-8 bg-rounded-background d-flex align-items-center justify-content-center border border-info ">
            <p
              className="p-5 text-white font-Poppins fw-semibold"
              style={{ fontSize: "clamp(12px, 3.5vw, 20px)" }}
            >
              You can add your family
              <br /> members in editor view
            </p>
          </div>
          <Image src={robot} alt="robo" loading="lazy"></Image>
        </div>
      </Container>
      {/* input module */}
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
                className="w-100 gap-4 p-15 rounded-10 bg-add-persion-module d-flex flex-column justify-content-center"
                fluid
              >
                {DynamicData_form.map((data, index) => {
                  return (
                    <Row className="d-flex  " key={index}>
                      <Col lg={5} className="d-flex ">
                        <p className="font-Poppins fw-semibold fs-20 text-nowrap">
                          {" "}
                          {data.Input_Title.Title}
                        </p>
                        <p className="w-100 text-lg-end font-Poppins fw-semibold fs-20">
                          {" "}
                          :
                        </p>
                      </Col>
                      <Col>
                        <Form.Group as={Col}>
                          {data.Input_Type}
                          <Form.Control.Feedback
                            type="invalid"
                            className="text-start"
                          >
                            required field.
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                    </Row>
                  );
                })}
              </Container>
              <div className="d-flex justify-content-center">
                <Button
                  type="submit"
                  className="mt-4 w-50 rounded-pill  bg-login-submit-bg h-44"
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
