import "react-international-phone/style.css";

import {
  InputAdornment,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import {
  defaultCountries,
  FlagImage,
  parseCountry,
  usePhoneInput,
} from "react-international-phone";

export const MuiPhone = ({ value, onChange, ...restProps }) => {
  const { inputValue, handlePhoneValueChange, inputRef, country, setCountry } =
    usePhoneInput({
      defaultCountry: "in",
      value,
      countries: defaultCountries,
      onChange: (data) => {
        onChange(data.phone);
      },
    });

  return (
    <TextField
      variant="standard"
      required
      autoComplete="off"
      sx={{
        input: {
          color: "white",
          marginTop: "3px",
          fontSize: "20px",
          "::placeholder": {
            color: "rgba(93, 197, 196, 0.50)",
            fontSize: "bold",
          },
        },
      }}
      placeholder=""
      className="text-white fw-normal fs-20 h-44 rounded-22 border-custom-login-input-border bg-transparent  w-100 d-flex justify-content-center"
      value={inputValue}
      onChange={handlePhoneValueChange}
      type="tel"
      inputRef={inputRef}
      InputProps={{
        disableUnderline: true,
        startAdornment: (
          <InputAdornment position="start" className="d-flex ms-2">
            <Select
              name="flag"
              MenuProps={{
                style: {
                  height: "300px",
                  width: "80%",
                  top: "10px",
                  left: "-3px",
                },
                transformOrigin: {
                  horizontal: "left",
                  vertical: "top",
                },
              }}
              sx={{
                width: "max-content",
                // Remove default outline (display only on focus)
                fieldset: {
                  display: "none",
                },
                '&.Mui-focused:has(div[aria-expanded="false"])': {
                  fieldset: {
                    display: "none",
                  },
                },
                // Update default spacing
                ".MuiSelect-select": {
                  padding: "8px",

                  paddingRight: "2px !important",
                },

                svg: {
                  right: 0,
                  display: "none",
                },
              }}
              value={country.iso2}
              onChange={(e) => setCountry(e.target.value)}
              renderValue={(value) => (
                <FlagImage iso2={value} style={{ display: "flex" }} />
              )}
            >
              {defaultCountries.map((c) => {
                const country = parseCountry(c);
                return (
                  <MenuItem key={country.iso2} value={country.iso2}>
                    <FlagImage
                      iso2={country.iso2}
                      style={{ marginRight: "8px" }}
                    />
                    <Typography marginRight="8px">{country.name}</Typography>
                    <Typography color="gray">+{country.dialCode}</Typography>
                  </MenuItem>
                );
              })}
            </Select>
          </InputAdornment>
        ),
      }}
      {...restProps}
    />
  );
};
