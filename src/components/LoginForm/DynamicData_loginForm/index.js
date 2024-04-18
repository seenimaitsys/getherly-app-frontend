export const DynamicData_loginForm = [
  {
    src: require("../../../assert/heart_image.png"),
    alt: "heart_image",
    width: "20%",
    loading: "lazy",
    className: "me-60 top-45 position-absolute z-n1",
  },
  {
    src: require("../../../assert/star_image.png"),
    alt: "star_image",
    loading: "lazy",
    width: "20%",
    className: "me-60 top-100 position-absolute z-n1",
  },
  {
    src: require("../../../assert/round_message_image.png"),
    loading: "lazy",
    width: "7%",
    alt: "round_message_image",
    className: " me-n45 top-40 position-absolute z-n1",
  },
  {
    src: require("../../../assert/at_image.png"),
    loading: "lazy",
    alt: "at-image",
    width: "16%",
    className: "  me-n60 top-80 position-absolute z-n1",
  },

  {
    formData: [
      {
        type: "text",
        className: "login-input",
        name: "phone",
        id: "phone",

        required: true,
        readOnly: true,
        hidden: true,
        autoComplete: "off",
      },
      {
        type: "number",
        min: 0,
        id: "otp",
        maxLength: 6,
        minLength: 6,
        required: true,
        className:
          "login-input font-Poppins text-white fw-normal fs-20 h-44 rounded-22 border-custom-login-input-border bg-transparent ps-5 d-flex justify-content-center",
        name: "otp",
        placeholder: "Enter OTP",
        autoComplete: "off",
      },
    ],
  },
];
