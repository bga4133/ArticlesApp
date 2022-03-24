import React from "react";
import { useNavigate } from "react-router-dom";
import Img from "../../images/undraw_web_devices_re_m8sc.svg";
import { motion } from "framer-motion";

// Screen del login
export const LoginScreen = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    // Vamos a la ruta de las noticias
    navigate("/new", {
      replace: true
    });
  };

  return (
    <>
      <header className="header-login">
        <div className="navbar-brand text-dark logo animate__animated animate__pulse logo-login logo-text animation ">
          N
        </div>
      </header>
      <div className=" flex">
        <div className="loginContainer1 flex">
          <h1 className="animate__animated animate__fadeIn login-text">
            Get the best news everyDay 📺🔍📰🗞️
          </h1>
          <h4 className="login-text mb-5">Sign in and enjoy the best news</h4>
          <img
            src={Img}
            alt={Img}
            className="animate__animated animate__fadeIn animation "
          />
        </div>
        <div className="logincontainer2 flex">
          <form action="" className="form-login flex">
            <h3>Welcome to news</h3>
            <p className="mb-5">The best app with the best news</p>
            <motion.input
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.7 }}
              type="text"
              placeholder="Username"
            />
            <motion.input
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.7 }}
              type="password"
              placeholder="password"
            />
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.7 }}
              className="btnLogin animate__animated animate__fadeIn"
              onClick={handleLogin}
            >
              Login
            </motion.button>
          </form>
        </div>
      </div>
    </>
  );
};
