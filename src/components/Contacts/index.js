import React from "react";
import Header from "../Header";
import { Image } from "react-bootstrap";
import MesssageForm from "../ContactForm";
import { UseGetScreenResolution } from "../GetScreenResolution";
import { DynamicData_contact } from "./DynamicData_contact";
import { Helmet, HelmetProvider } from "react-helmet-async";
const AddressMap = () => {
  const [currentResolution] = UseGetScreenResolution();
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Getherly-Contact</title>
          <meta
            name="description"
            content="Getherly is a family friendly social media app which helps you connect with your family and makes sure you have a fun experience with our features."
          />
          <meta property="og:title" content="Getherly-Contact" />
          <meta
            property="og:description"
            content="Getherly is a family friendly social media app which helps you connect with your family and makes sure you have a fun experience with our features."
          />
          <meta
            property="og:image"
            content="%PUBLIC_URL%/../src/assert/getherlyfooter.svg"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Getherly-Contact" />
          <meta property="og:url" content="https://www.getherly.net/contact" />
          <meta
            name="twitter:description"
            content="Getherly is a family friendly social media app which helps you connect with your family and makes sure you have a fun experience with our features."
          />
          <meta
            name="twitter:image"
            content="%PUBLIC_URL%/../src/assert/getherlyfooter.svg"
          />
          <meta name="twitter:url" content="https://www.getherly.net/contact" />
          <meta name="robots" content="index, follow" />

          <meta name="keywords" content="family, social media app" />
        </Helmet>
      </HelmetProvider>
      <div className="Address-card-container d-flex flex-column align-items-center w-100">
        <div className="w-100 h-366 bg-bg-image1 background-styles">
          <Header page={"contact"} />
        </div>

        <div
          className={` ${
            currentResolution <= 768 ? "d-flex flex-column w-90 mt-n30" : "w-75"
          }   rounded-30 background-styles d-flex mt-n6 bg-address-bg overflow-hidden  `}
        >
          <iframe
            title="Address : Boston , USA"
            src={
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25387.23478654725!2d-122.06115399490332!3d37.309248660190086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb4571bd377ab%3A0x394d3fe1a3e178b4!2sCupertino%2C%20CA%2C%20USA!5e0!3m2!1sen!2str!4v1645437305701!5m2!1sen!2str"
            }
            allowFullScreen
            className={`  h-26  ${
              currentResolution <= 768
                ? "w-100 iframe-radius-mobile"
                : "w-50 iframe-radius-desktop"
            }`}
          ></iframe>

          <div className=" d-flex align-items-center justify-content-center ">
            <div className="gap-5 d-flex flex-column m-5">
              <div className="d-flex align-items-center gap-3">
                <Image {...DynamicData_contact[0]}></Image>

                <div>
                  <h2 className="text-start fw-medium text-custom-gray-200 lh-30 font-Inter">
                    Address
                  </h2>
                  <p className="address-desc text-start fw-normal text-custom-gray-200  font-Inter h5">
                    Boston , USA
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-1">
                <Image {...DynamicData_contact[1]}></Image>
                <div>
                  <h2 className="text-start fw-medium text-custom-gray-200 lh-30 font-Inter">
                    Phone
                  </h2>
                  <a {...DynamicData_contact[3]}>
                    <p className="address-desc text-start fw-normal text-custom-gray-200  font-Inter h5">
                      1234567890
                    </p>
                  </a>
                </div>
              </div>
              <div className="d-flex align-items-center ">
                <Image {...DynamicData_contact[2]}></Image>
                <div className="ms-3">
                  <h2 className="text-start fw-medium text-custom-gray-200 lh-30 font-Inter">
                    Email
                  </h2>
                  <a {...DynamicData_contact[4]}>
                    <p className="address-desc text-start fw-normal text-custom-gray-200  font-Inter h5">
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
