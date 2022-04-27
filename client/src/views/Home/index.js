import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../store/appContext";
import "./Home.css";

const Home = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    if (!store.isAuth) navigate("/login");
    else actions.getUser();
  }, [store.isAuth]);

  if (store.loading) return <h1>Cargando...</h1>;

  console.log("store.user", store);

  return (
    <>
      <h1>
        Bienvenido {store.user?.name} {store.user?.surname}
      </h1>

      <button className="home-logout" onClick={() => actions.logout()}>
        Cerrar Sesión
      </button>
    </>
  );
};

export default Home;
