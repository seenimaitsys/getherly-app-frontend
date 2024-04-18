import React from "react";
import Header from "../Header";
import Fooder from "../Fooder";
import error_404_Page from "../../assert/404error.png";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
const PageNotFound = () => {
  return (
    <>
      <Header />
      <Container fluid>
        <Row className="d-flex align-items-center justify-content-center">
          <Col
            xl={5}
            className="d-flex flex-column align-items-center justify-content-center"
          >
            <Image
              src={error_404_Page}
              alt="404 not found!"
              width={"100%"}
              loading="lazy"
            ></Image>
            <h3
              className="fw-semibold fs-20 text-center text-pageNotfound "
              style={{ letterSpacing: "4px" }}
            >
              Oops! Page Not Found
            </h3>
            <a href="/">
              <Button
                className="border-custom-page-not-found-button  rounded-30 fw-normal fs-12 font-Poppins h-40 w-190 text-white mt-4"
                style={{ letterSpacing: "1px" }}
              >
                BACK TO HOME
              </Button>
            </a>
          </Col>
        </Row>
      </Container>
      <Fooder />
    </>
  );
};
export default PageNotFound;
