export const Dynamic_Form = [
  {
    type: "text",
    placeholder: "Name",
    minLength: 2,
    maxLength: 20,
    name: "name",
    autoComplete: "off",
    className: "message-input d-flex w-100 align-items-start border-0 rounded",
    required: true,
    error: "required field.",
  },

  {
    type: "email",
    placeholder: "Email Address",
    className: "message-input d-flex w-100 align-items-start border-0 rounded",
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
    className: "message-input d-flex w-100 align-items-start border-0 rounded",
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
      "message-textarea d-flex w-100 align-items-start border-0 rounded",
    error: "Enter minimun 4 character.",
  },
];
