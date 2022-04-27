import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import FormInput from "../../components/FormInput";
import { Context } from "../../store/appContext";
import "./Login.css";

const Login = () => {
  const { actions } = useContext(Context);
  const navigate = useNavigate();

  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { value, name } = e.target;
    setLoginInfo({ ...loginInfo, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    actions.login(loginInfo, navigate);
  };

  const fields = [
    {
      label: "Email",
      value: loginInfo.email,
      handleChange,
      name: "email",
    },
    {
      label: "Contraseña",
      value: loginInfo.password,
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

export default Login;
