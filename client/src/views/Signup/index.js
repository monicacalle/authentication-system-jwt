import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import FormInput from "../../components/FormInput";
import { Context } from "../../store/appContext";
import "./Signup.css";

const Signup = () => {
  const { actions } = useContext(Context);
  const navigate = useNavigate();

  const [signupInfo, setLoginInfo] = useState({
    email: "",
    password: "",
    name: "",
    surname: "",
  });

  const handleChange = (e) => {
    const { value, name } = e.target;
    setLoginInfo({ ...signupInfo, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    actions.createUser(signupInfo, navigate);
  };

  const fields = [
    {
      label: "Nombre",
      value: signupInfo.name,
      handleChange,
      name: "name",
    },
    {
      label: "Apellido",
      value: signupInfo.surname,
      handleChange,
      name: "surname",
    },
    {
      label: "Email",
      value: signupInfo.email,
      handleChange,
      name: "email",
    },
    {
      label: "Contraseña",
      value: signupInfo.password,
      handleChange,
      name: "password",
      type: "password",
    },
  ];

  return (
    <form onSubmit={handleSubmit} className="login-form">
      {fields.map((field) => (
        <FormInput {...field} key={field.name} />
      ))}
      <br />
      <input type="submit" value="Enviar" className="login-submit" />
    </form>
  );
};

export default Signup;
