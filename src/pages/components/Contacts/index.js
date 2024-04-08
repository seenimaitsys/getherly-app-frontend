/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import "./index.scss";
import Header from "../Header";
// import { Row, Container, Form, Button, Col } from "react-bootstrap";
import MesssageForm from "../ContactForm";
import email from "../../../assert/email.svg";
import phone from "../../../assert/Phone.svg";
import map from "../../../assert/map.svg";

const AddressMap = () => {
  return (
    <>
      <div className="Address-card-container d-flex flex-column align-items-center w-100">
        <div>
          <Header page={"contact"} />
        </div>

        <div className="map-continer">
          <iframe
            src={
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25387.23478654725!2d-122.06115399490332!3d37.309248660190086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb4571bd377ab%3A0x394d3fe1a3e178b4!2sCupertino%2C%20CA%2C%20USA!5e0!3m2!1sen!2str!4v1645437305701!5m2!1sen!2str"
            }
            allowFullScreen=""
            loading="lazy"
          ></iframe>
          {/* <iframe
            src={
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.3325395304414!2d-122.01116148467422!3d37.33463524513264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb59127ce078f%3A0x18e1c3ce7becf1b!2sApple%20Park!5e0!3m2!1sen!2sin!4v1637309850935!5m2!1sen!2sin"
            }
            loading="lazy"
          /> */}
          <div className=" d-flex align-items-center justify-content-center ">
            <div className="gap-5 d-flex flex-column m-5">
              <div className="d-flex align-items-center gap-3">
                <img src={map} loading="lazy" alt="location"></img>

                <div>
                  <h6>Address</h6>
                  <p className=" text-start">Boston , USA</p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-1">
                <img
                  src={phone}
                  loading="lazy"
                  alt="location"
                  className="mb-1"
                  style={{ marginLeft: "-2vh" }}
                ></img>
                <div>
                  <h6>Phone</h6>
                  <a
                    href="tell:support@twigscorp.com"
                    target="_blank"
                    rel="noreferrer"
                    title="1234567890"
                    className="text-decoration-none"
                  >
                    <p className="address-desc text-start">1234567890</p>
                  </a>
                </div>
              </div>
              <div className="d-flex align-items-center ">
                <img src={email} loading="lazy" alt="email"></img>
                <div style={{ marginLeft: "5%" }}>
                  <h6>Email</h6>
                  <a
                    href="mailto:support@twigscorp.com"
                    target="_blank"
                    rel="noreferrer"
                    title="support@twigscorp.com"
                    className="text-decoration-none"
                  >
                    <p className="address-desc text-start">
                      support@twigscorp.com
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <MesssageForm />
      </div>
    </>
  );
};
export default AddressMap;
