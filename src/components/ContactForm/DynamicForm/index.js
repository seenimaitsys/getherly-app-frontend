export const Dynamic_Form = [
  {
    type: "text",
    placeholder: "Name",
    minLength: 2,
    maxLength: 20,
    name: "name",
    autoComplete: "off",
    className:
      "message-input message-form-placeholder-style h-40 bg-contact-input-bg text-white fw-medium font-Poppins fs-18  d-flex w-100 align-items-start border-0 rounded p-3 shadow",
    required: true,
    error: "required field.",
  },

  {
    type: "email",
    placeholder: "Email Address",
    className:
      "message-input h-40 bg-contact-input-bg text-white fw-medium font-Poppins fs-18  d-flex w-100 align-items-start border-0 rounded p-3 shadow",
    minLength: 4,
    maxLength: 40,
    name: "email",
    autoComplete: "off",
    required: true,
    error: "Please provide a valid Email.",
  },

  {
    type: "text",
    placeholder: "subject",
    minLength: 5,
    maxLength: 400,
    name: "subject",
    autoComplete: "off",
    className:
      "message-input h-40 bg-contact-input-bg text-white fw-medium font-Poppins fs-18  d-flex w-100 align-items-start border-0 rounded p-3 shadow",
    required: true,
    error: "required field.",
  },
  {
    as: "textarea",
    placeholder: "Your message",
    rows: 8,
    name: "message",
    autoComplete: "off",
    required: true,
    className:
      "message-input bg-contact-input-bg text-white fw-medium font-Poppins fs-18 d-flex w-100 align-items-start border-0 rounded p-3 shadow",
    error: "Enter minimun 4 character.",
  },
];
