import React from "react";

import { Container, Image } from "react-bootstrap";
import dick from "../../assert/images/tick.svg";
import diament from "../../assert/images/diament.svg";
import email_to from "../../assert/images/email-to.svg";
import { UseGetScreenResolution } from "../GetScreenResolution";
const Privacy = () => {
  const [currentResolution] = UseGetScreenResolution();
  return (
    <>
      <Container className={`text-start d-flex flex-column gap-1`}>
        <h1 className="text-start mt-5">Privacy Policy</h1>
        <h6>
          Effective Date: <span className={`text-secondary`}>3/9/2025</span>
        </h6>
        <h6>
          Last Updated: <span className={`text-secondary`}>3/9/2025</span>
        </h6>
        <h2>1. Introduction</h2>
        <p
          className={`${
            currentResolution <= 992 ? `w-100` : "w-75"
          } ms-2 ms-lg-5`}
        >
          Welcome to <span className={`fw-bold`}>Getherly.</span> We respect
          your privacy and are committed to protecting your personal data. This
          Privacy Policy explains how we collect, use, store, and share your
          information when you use our platform.
        </p>
        <p className={`ms-2 ms-lg-5`}>
          By accessing or using <span className={`fw-bold`}>Getherly ,</span>
          you consent to the practices described in this policy.
        </p>
        <hr className={`fw-semibold `} />
        <h2>2. Information We Collect</h2>
        <span className={`ms-2 ms-lg-5`}>
          We collect the following types of information:
        </span>
        <h5 className={`mt-1 ms-2 ms-lg-5`}>2.1 Information You Provide</h5>
        <ul className={`ms-3 ms-lg-70`}>
          <li>Name, email, phone number, and profile information</li>
          <li>Content you upload, share, or pos</li>
          <li>Messages sent via our platform</li>
        </ul>
        <h5 className={`ms-2 ms-lg-5`}>
          2.2 Automatically Collected Information
        </h5>
        <ul className={`ms-3 ms-lg-70`}>
          <li>IP address, device information, and browser type</li>
          <li>Usage data (e.g., interactions with posts, likes, and shares)</li>
          <li>Cookies and tracking technologies</li>
        </ul>
        <h5 className={`ms-2 ms-lg-5`}>2.3 Third-Party Information</h5>
        <ul className={`ms-3 ms-lg-85`}>
          <li>
            Data from{" "}
            <span className={`fw-semibold `}>
              advertisers, analytics providers, and business partners
            </span>
          </li>
          <li>Publicly available information</li>
        </ul>
        <hr />
        <h2>3. How We Use Your Information</h2>
        <span className={`ms-2 ms-lg-5`}>We use your data to:</span>

        <div className={`d-flex align-items-center gap-1 ms-2 ms-lg-70`}>
          <Image
            src={dick}
            alt="how its work"
            loading="lazy"
            className=""
          ></Image>
          <span className={`m-0`}>
            {" "}
            Provide, improve, and personalize your experience
          </span>
        </div>
        <div className={`d-flex align-items-center gap-1 ms-2 ms-lg-70`} st>
          <Image
            src={dick}
            alt="how its work"
            loading="lazy"
            className=""
          ></Image>
          <span className={`m-0`}>
            {" "}
            Ensure platform security and prevent fraud
          </span>
        </div>
        <div className={`d-flex align-items-center gap-1 ms-2 ms-lg-70`}>
          <Image
            src={dick}
            alt="how its work"
            loading="lazy"
            className=""
          ></Image>
          <span className={`m-0`}>
            {" "}
            Deliver targeted ads and recommendations
          </span>
        </div>
        <div className={`d-flex align-items-center gap-1 ms-2 ms-lg-70`}>
          <Image
            src={dick}
            alt="how its work"
            loading="lazy"
            className=""
          ></Image>
          <span className={`m-0`}> Comply with legal obligations</span>
        </div>
        <hr />

        <h2>4. How We Share Your Information</h2>
        <span className={`ms-2 ms-lg-5`}>
          We do <span className={`fw-semibold`}>not</span> sell your personal
          data. However, we may share it with:
        </span>
        <ul className={`ms-2 ms-lg-70`}>
          <li>
            <span className={`fw-bold`}>Service Providers:</span> Cloud hosting,
            analytics, and customer support providers
          </li>
          <li>
            <span className={`fw-bold`}>Legal Authorities:</span> If required by
            law, subpoena, or to protect rights
          </li>
          <li>
            <span className={`fw-bold`}>Advertisers & Partners: </span> Only
            aggregated, anonymized data
          </li>
        </ul>
        <hr />
        <h2>5. Your Rights & Choices</h2>
        <span className={`ms-2 ms-lg-5`}>
          Depending on your location, you may have the following rights:
        </span>
        <div className={`d-flex align-items-center gap-1 ms-3 ms-lg-70`}>
          <Image
            src={diament}
            alt="diament"
            loading="lazy"
            width={`11px`}
            className="fs-12"
          ></Image>
          <span className={`m-0`}>
            <span className={`fw-semibold`}>Access & Portability</span> –
            Request a copy of your data
          </span>
        </div>
        <div className={`d-flex align-items-center gap-1 ms-3 ms-lg-70`}>
          <Image
            src={diament}
            alt="diament"
            loading="lazy"
            width={`11px`}
            className="fs-12"
          ></Image>
          <span className={`m-0`}>
            <span className={`fw-semibold`}>Deletion</span> – Request deletion
            of your personal data your data
          </span>
        </div>
        <div className={`d-flex align-items-center gap-1 ms-3 ms-lg-70`}>
          <Image
            src={diament}
            alt="diament"
            loading="lazy"
            width={`11px`}
            className="fs-12"
          ></Image>
          <span className={`m-0`}>
            <span className={`fw-semibold`}>Opt-Out</span> – Control ad
            personalization and cookies
          </span>
        </div>
        <span className={`ms-2 ms-lg-5`}>
          To exercise these rights, email{" "}
          <a className={``} href={`mailto:support@twigscorp.com`}>
            support@twigscorp.com
          </a>
        </span>
        <hr />
        <h2>6. Data Retention & Security</h2>
        <p className={` ms-2 ms-lg-5`}>
          We store your data as long as necessary for legal and operational
          purposes. Security measures include{" "}
          <span className={`fw-semibold`}>
            encryption, access controls, and threat monitoring.
          </span>
        </p>
        <hr />
        <h2>7. Cookies & Tracking Technologies</h2>
        <p className={`ms-2 ms-lg-5`}>
          We use cookies to enhance your experience. You can manage your cookie
          settings in your browser.
        </p>
        <hr />
        <h2>8. Children’s Privacy (COPPA Compliance)</h2>
        <p className={`ms-2 ms-lg-5`}>
          Our platform is{" "}
          <span className={`fw-semibold`}>not intended for users under 13</span>{" "}
          . If we discover a child’s data has been collected, we will delete it.
        </p>
        <hr />
        <h2>9. International Data Transfers</h2>
        <p className={`ms-2 ms-lg-5`}>
          For users outside the U.S., your data may be transferred and processed
          in{" "}
          <span className={`fw-semibold`}>
            the United States or other jurisdictions with differing privacy
            laws.
          </span>
        </p>
        <hr />
        <h2>10. Changes to This Policy</h2>
        <p className={`ms-2 ms-lg-5`}>
          We may update this Privacy Policy periodically. We will notify you of
          significant changes via{" "}
          <span className={`fw-semibold`}>email or in-app notification.</span>
        </p>
        <hr />
        <h2>11. Contact Information</h2>
        <span className={`ms-2 ms-lg-5`}>
          For privacy-related questions, contact:
        </span>
        <div className={`d-flex align-items-center gap-1 ms-2 ms-lg-5`}>
          <Image
            src={email_to}
            alt="support@twigscorp.com"
            loading="lazy"
            width={`18px`}
          ></Image>
          <a href={`mailto:support@twigscorp.com`} className={`m-0`}>
            support@twigscorp.com
          </a>
        </div>

        {/* ------------------------------------ */}
      </Container>
    </>
  );
};
export default Privacy;
