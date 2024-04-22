import map from "../../../assert/images/map.svg";
import email from "../../../assert/images/email.svg";
import phone from "../../../assert/images/Phone.svg";
export const DynamicData_contact = [
  {
    src: map,
    loading: "lazy",
    alt: "location",
    width: "15%",
  },
  {
    src: phone,
    loading: "lazy",
    alt: "location",
    className: "mb-1",
    style: { marginLeft: "-2vh" },
  },
  {
    src: email,
    loading: "lazy",
    alt: "email",
    width: "17%",
  },
  {
    href: "tell:1234567890",
    target: "_blank",
    rel: "noreferrer",
    title: "1234567890",
    className: "text-decoration-none",
  },
  {
    href: "mailto:support@twigscorp.com",
    target: "_blank",
    rel: "noreferrer",
    title: "support@twigscorp.com",
    className: "text-decoration-none",
  },
];
