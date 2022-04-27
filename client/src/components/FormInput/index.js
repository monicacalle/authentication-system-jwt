import React from "react";
import "./FormInput.css";

const FormInput = ({ handleChange, value, name, label, type }) => {
  return (
    <>
      <label className="form-input-label" htmlFor={name}>
        {label}
      </label>
      <input
        className="form-input"
        type={type || "text"}
        id={name}
        name={name}
        value={value}
        onChange={handleChange}
      />
    </>
  );
};

export default FormInput;
