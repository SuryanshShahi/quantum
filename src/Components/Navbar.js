import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <section className="fixed-top">
      <nav className="bg-info">
        <div className="container text-white d-flex align-items-center">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12 align-items-center justify-content-lg-start justify-content-center d-flex py-lg-0 py-md-0 py-3">
              <li
                className="d-flex align-items-center"
                style={{
                  borderRight: "1px solid #fff",
                  height: "30px",
                  width: "fit-content",
                }}
              >
                <span className="fa fa-clock-o pr-2" />{" "}
                <NavLink
                  to="/"
                  className="text-decoration-none text-white active pr-3"
                >
                  We are open 24/7&nbsp;
                </NavLink>
              </li>
              <li
                className="pl-4 d-flex align-items-center"
                style={{ width: "fit-content" }}
              >
                <span className="fa fa-envelope pr-2" />
                <NavLink to="/" className="text-decoration-none text-white">
                  xyz@gmail.com
                </NavLink>
              </li>
            </div>
            <div className="col-lg-6 col-md-6 col-12 justify-content-lg-end justify-content-md-end justify-content-center align-items-center d-flex">
              <ul className="ml-lg-auto align-items-center list-unstyled d-flex mt-lg-3 mt-md-3">
                <li className="">
                  <NavLink
                    to="/"
                    className="text-decoration-none px-2 text-white fa fa-twitter"
                  ></NavLink>
                </li>
                <li className="">
                  <NavLink
                    to="/"
                    className="text-decoration-none px-2 text-white fa fa-linkedin"
                  ></NavLink>
                </li>
                <li className="">
                  <NavLink
                    to="/"
                    className="text-decoration-none px-2 text-white fa fa-facebook"
                  ></NavLink>
                </li>
                <li className="">
                  <NavLink
                    to="/"
                    className="text-decoration-none px-2 text-white fa fa-instagram"
                  ></NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <nav className="navbar navbar-expand-lg navbar-light bg-light py-3">
        <div className="container">
          <NavLink to="/" className="navbar-brand" href="#">
            <span className="fa fa-sticky-note-o text-info font-weight-bolder" />{" "}
            Bisnes
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="active nav-item pl-3">
                <NavLink to="/" exact className="nav-link">
                  Home
                </NavLink>
              </li>
              <li className="nav-item pl-3">
                <NavLink to="/about" className="nav-link">
                  About
                </NavLink>
              </li>
              <li className="nav-item pl-3">
                <NavLink to="/project" className="nav-link">
                  Project
                </NavLink>
              </li>
              <li className="nav-item pl-3">
                <NavLink to="/blog" className="nav-link">
                  Blog
                </NavLink>
              </li>
              <li className="nav-item pl-3">
                <NavLink to="/services" className="nav-link">
                  Services
                </NavLink>
              </li>
              <li className="nav-item pl-3">
                <NavLink to="/contact" className="nav-link">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
}

export default Navbar;
