import userOfflineimg from "../../../assert/userOflineimg.png";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { UseGetScreenResolution } from "../GetScreenResolution";
const UserOfflinePage = () => {
  const [currentResolution] = UseGetScreenResolution();
  return (
    <>
      <Container
        fluid
        style={{ height: "100vh" }}
        className="d-flex flex-column align-items-center justify-content-center"
      >
        <Row className="d-flex flex-column align-items-center justify-content-center">
          <Col className="d-flex flex-column align-items-center justify-content-center">
            <h3
              className="fw-bold fs-25 text-center text-pageNotfound "
              style={{
                letterSpacing: `${currentResolution <= 489 ? "0px" : "4px"}`,
              }}
            >
              Oops! Seems like you are offline
            </h3>
            <Image
              src={userOfflineimg}
              alt="Offline"
              width={"100%"}
              loading="lazy"
            ></Image>
            <h3 className="fw-semibold fs-20 text-center text-pageNotfound ">
              Please check your internet connection
            </h3>
            <a href="/">
              <Button
                onClick={() => window.location.reload()}
                className="border-custom-page-not-found-button rounded-30 fw-normal fs-15 font-Poppins h-40 w-190 text-white mt-4"
                style={{ letterSpacing: "2px" }}
              >
                RETEY
              </Button>
            </a>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default UserOfflinePage;
