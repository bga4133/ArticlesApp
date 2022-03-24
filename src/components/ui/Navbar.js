import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
// Nav Menu
export const Navbar = () => {
  const navigate = useNavigate();
  const handleLogOut = () => {
    navigate("/login", {
      replace: true
    });
  };

  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark bg-white nav-styles nav-responsive">
        <Link
          className="navbar-brand text-dark logo animate__animated animate__pulse animation"
          to="/"
        >
          <span className="logo-text">N</span>
        </Link>

        <div className="navbar-collapse nav-responsive">
          <div className="navbar-nav nav-responsive">
            <NavLink
              className={({ isActive }) =>
                "nav-item nav-link text-dark" +
                (isActive ? "active text-dark" : "")
              }
              to="/new"
            >
              News
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                "nav-item nav-link text-dark" +
                (isActive ? "active text-dark" : "")
              }
              to="/search"
            >
              Search
            </NavLink>
          </div>
        </div>

        <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
          <ul className="navbar-nav ml-auto">
            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              className="nav-item nav-link text-info text-dark userName"
            ></motion.div>
            <button
              className="nav-item nav-link btn text-dark"
              onClick={handleLogOut}
            >
              ➡️
            </button>
          </ul>
        </div>
      </nav>
      <nav className="nav-mobile">
        <div className="flex mt-3">
          <div className="containerNavMobile">
            <Link
              className="navbar-brand text-dark logo animate__animated animate__pulse"
              to="/"
            >
              <span className="logo-text">N</span>
            </Link>
          </div>
          <span className="nav-item nav-link text-info text-dark userName"></span>
          <NavLink
            className={({ isActive }) =>
              "nav-item nav-link text-dark" +
              (isActive ? "active text-dark" : "")
            }
            to="/search"
          >
            🔎
          </NavLink>
          <button
            className="nav-item nav-link btn text-dark"
            onClick={handleLogOut}
          >
            ➡️
          </button>
        </div>
      </nav>
    </>
  );
};
