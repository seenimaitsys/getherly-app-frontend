import React from "react";
import { Container, Image } from "react-bootstrap";
// import { UseGetScreenResolution } from "../GetScreenResolution";
import pin from "../../assert/images/pin.svg";
import dick from "../../assert/images/tick.svg";
// import diament from "../../assert/images/diament.svg";
import email_to from "../../assert/images/email-to.svg";
const Terms = () => {
  // const [currentResolution] = UseGetScreenResolution();
  return (
    <>
      <Container className={`text-start d-flex flex-column gap-1`}>
        <h1 className="text-start mt-5">Terms of Service</h1>
        <h6>
          Effective Date: <span className={`text-secondary`}>3/9/2025</span>
        </h6>
        <h6>
          Last Updated: <span className={`text-secondary`}>3/9/2025</span>
        </h6>
        <h2>1. Acceptance of Terms</h2>
        <p className={`ms-2 ms-lg-5`}>
          By accessing getherly, you agree to be bound by these{" "}
          <span className={`fw-bold`}>Terms of Service ("Terms")</span> and our
          <span className={`fw-bold`}> Privacy Policy.</span>
        </p>
        <span className={`ms-2 ms-lg-5`}>
          If you do not agree, do not use our platform.
        </span>
        <hr />
        <h2>2. User Accounts & Responsibilities</h2>
        <h5 className={`ms-2 ms-lg-5`}>2.1 Account Creation</h5>
        <p className={`ms-3 ms-lg-85`}>
          You must be <span className={`fw-bold`}>at least 13 years old</span>{" "}
          to use <span className={`fw-bold`}>getherly.</span> You are
          responsible for:
        </p>
        <ul className={`ms-2 ms-lg-85`}>
          <li>
            Keeping your{" "}
            <span className={`fw-bold`}>password confidential</span>
          </li>
          <li>Not impersonating others or using false information</li>
        </ul>
        <h5 className={`ms-2 ms-lg-5`}>2.2 Prohibited Conduct</h5>
        <span className={`ms-3 ms-lg-85`}>
          You agree <span className={`fw-bold`}>NOT</span> to:
        </span>
        <div className={`d-flex align-items-center gap-1 mt-3 ms-3 ms-lg-90`}>
          <Image
            src={pin}
            alt="how its work"
            loading="lazy"
            className=""
          ></Image>
          <span className={`m-0`}>
            {" "}
            Post illegal, hateful, or misleading content
          </span>
        </div>
        <div className={`d-flex align-items-center gap-1 ms-3 ms-lg-90`}>
          <Image
            src={pin}
            alt="how its work"
            loading="lazy"
            className=""
          ></Image>
          <span className={`m-0`}>
            {" "}
            Violate copyrights, trademarks, or privacy rights
          </span>
        </div>
        <div className={`d-flex align-items-center gap-1 ms-3 ms-lg-90`}>
          <Image
            src={pin}
            alt="how its work"
            loading="lazy"
            className=""
          ></Image>
          <span className={`m-0`}> Use bots, scrapers, or automated tools</span>
        </div>
        <div className={`d-flex align-items-center gap-1 ms-3 ms-lg-90`}>
          <Image
            src={pin}
            alt="how its work"
            loading="lazy"
            className=""
          ></Image>
          <span className={`m-0`}> Harass, bully, or impersonate others</span>
        </div>
        <span className={`mt-3 ms-2 ms-lg-85`}>
          We reserve the right to{" "}
          <span className={`fw-bold`}>suspend or terminate</span> accounts that
          violate these rules.
        </span>
        <hr />
        <h2>3. Content Ownership & License</h2>
        <h5 className={`ms-2 ms-lg-5`}>3.1 Your Content</h5>
        <p className={`ms-3 ms-lg-85`}>
          You retain{" "}
          <span className={`fw-bold`}>ownership of the content you post,</span>{" "}
          but grant us a{" "}
          <span className={`fw-bold`}>
            non-exclusive, royalty-free, worldwide license
          </span>{" "}
          to display, distribute, and promote your content on our platform.
        </p>
        <h5 className={`ms-2 ms-lg-5`}>3.2 Platform Content</h5>
        <p className={`ms-3 ms-lg-85`}>
          All logos, trademarks, and software are{" "}
          <span className={`fw-bold`}>owned by getherly.</span> You may not
          reproduce or modify them
          <span className={`fw-bold`}> without permission.</span>
        </p>
        <hr />
        <h2>4. Advertisements & Monetization</h2>
        <ul className={`ms-2 ms-lg-5`}>
          <li>
            We may display{" "}
            <span className={`fw-bold`}>ads and sponsored content</span>
          </li>
          <li>
            You agree tha{" "}
            <span className={`fw-bold`}>
              your content may be used in advertising
            </span>
          </li>
          <li>
            Any <span className={`fw-bold`}>monetization features</span> (e.g.,
            creator payments) are subject to separate terms
          </li>
        </ul>
        <hr />
        <h2>5. Disclaimers & Limitation of Liability</h2>
        <div className={`d-flex align-items-center gap-1 ms-2 ms-lg-5`}>
          <Image
            src={pin}
            alt="how its work"
            loading="lazy"
            className=""
          ></Image>
          <span className={`m-0`}>
            {" "}
            <span className={`fw-bold`}>"AS-IS" SERVICE:</span> Getherly is
            provided{" "}
            <span className={`fw-bold`}>without warranties of any kind.</span>
          </span>
        </div>
        <div className={`d-flex align-items-center gap-1 ms-2 ms-lg-5`}>
          <Image
            src={pin}
            alt="how its work"
            loading="lazy"
            className=""
          ></Image>
          <span className={`m-0`}>
            {" "}
            <span className={`fw-bold`}>LIMITED LIABILITY:</span> We are{" "}
            <span className={`fw-bold`}>not liable</span> for user-generated
            content or third-party actions.
          </span>
        </div>
        <div className={`d-flex align-items-center gap-1 ms-2 ms-lg-5`}>
          <Image
            src={pin}
            alt="how its work"
            loading="lazy"
            className=""
          ></Image>
          <span className={`m-0`}>
            {" "}
            <span className={`fw-bold`}>DOWNTIME & ERRORS:</span> We do not
            guarantee uninterrupted service.
          </span>
        </div>
        <hr />
        <h2>6. Account Termination & Policy Violations</h2>
        <span className={`ms-2 ms-lg-5`}>We reserve the right to:</span>
        <div className={`d-flex align-items-center gap-1 ms-2 ms-lg-5`}>
          <Image
            src={dick}
            alt="how its work"
            loading="lazy"
            className=""
          ></Image>
          <span className={`m-0`}>
            Suspend or delete accounts for{" "}
            <span className={`fw-bold`}>policy violations</span>
          </span>
        </div>
        <div className={`d-flex align-items-center gap-1 ms-2 ms-lg-5`}>
          <Image
            src={dick}
            alt="how its work"
            loading="lazy"
            className=""
          ></Image>
          <span className={`m-0`}>
            Remove content that violates{" "}
            <span className={`fw-bold`}>
              copyright laws or community guidelines
            </span>
          </span>
        </div>
        <div className={`d-flex align-items-center gap-1 ms-2 ms-lg-5`}>
          <Image
            src={dick}
            alt="how its work"
            loading="lazy"
            className=""
          ></Image>
          <span className={`m-0`}>
            Cooperate with{" "}
            <span className={`fw-bold`}>law enforcement agencies</span> when
            required
          </span>
        </div>
        <hr />
        <h2>7. Governing Law & Dispute Resolution</h2>
        <ul className={`ms-2 ms-lg-5`}>
          <li>
            These Terms are governed by{" "}
            <span className={`fw-bold`}>Delaware, USA</span>
          </li>
          <li>
            Disputes must be resolved via{" "}
            <span className={`fw-bold`}>arbitration in Delaware, USA</span>
          </li>
          <li>
            <span className={`fw-bold`}>Class action waivers</span> apply (if
            enforceable)
          </li>
        </ul>
        <hr />
        <h2>8. Changes to Terms</h2>
        <p className={` ms-2 ms-lg-5`}>
          We may update these <span className={`fw-bold`}>Terms.</span>{" "}
          Continued use after changes constitutes{" "}
          <span className={`fw-bold`}>acceptance of the new terms.</span>
        </p>
        <hr />
        <h2>9. Contact Information</h2>
        <span className={`ms-2 ms-lg-5`}>For legal inquiries, contact:</span>
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
      </Container>
    </>
  );
};
export default Terms;
