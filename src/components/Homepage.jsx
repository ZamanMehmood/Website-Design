import React from "react";
import "./homepage.scss";
import "./responsive.scss";
import ISOFTSTUDIO from "../Assets/ISOFTSTUDIOS1.png";
import preview1 from "../Assets/preview1.png";
import Frame from "../Assets/Frame.png";
import Vector1 from "../Assets/Vector1.png";
import Vector2 from "../Assets/Vector2.png";

const Homepage = () => {
  return (
    <div>
      {/* navbar section  */}
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand active">
            <img
              src={ISOFTSTUDIO}
              alt="Image"
              className="img-fluid isoft-image"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto ms-auto mb-2 mb-lg-0">
              <li className=" nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle p-2"
                  href="#"
                  id="navbarDropdowns"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Services{" "}
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdowns">
                  <li>
                    <a className="dropdown-item" href="#">
                      Web Development
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Cloud Computing
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      QA
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Mobile App Development
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Payment Integration
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      E-Commerce Development
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      UI/UX Design
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Saas Development
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <a className="nav-link p-2" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link p-2" href="">
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link p-2" href="">
                  Career
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link p-2" href="#">
                  Contact
                </a>
              </li>
            </ul>
            <button type="button" className="btn btn-outline-danger text-dark">
              SCHEDULE A MEETING
            </button>
          </div>
        </div>
      </nav>
      {/* section #1 */}
      <section>
        <div className="first-section container-fluid mt-4">
          <div className="row">
            <div className="col-lg-6 mt-5">
              <img src={preview1} className="img-fluid image-prevew" />
            </div>
            <div className="col-lg-6">
              <div className="creative-container">
                <h3 className="fw-bold text-light creative-heading">
                  {" "}
                  We are a Creative <br />
                  <span className="agency-heading">Agency</span>
                </h3>
              </div>
              <p className="text-light creative-headings">
                We create magnificent products through Technology
              </p>

              <button
                type="button"
                className="btn btn-outline-dark text-light getQuote p-2 "
              >
                Get a Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* section #2  */}
      <section className="second-section">
        <div className="container">
          <div className="col-lg-7 pt-3">
            <h1 className=" mt-4 key-values">Our Key Values</h1>
            <hr className="main-border" />
            <p className="key-text">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
            </p>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 first-column">
              <div className="column">
                <div className="col-lg-4 ms-auto">
                  <div>
                    <img
                      src={Vector1}
                      alt="vector 1"
                      className="img-fluid vector-image"
                    />
                    <div className="first-border">
                      <h5 className="interfere-heading">Interfere</h5>
                    </div>

                    <p className="first-text">
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet sint. Velit officia{" "}
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="sc2-d2">
                    <img
                      src={Vector2}
                      alt="vector 2"
                      className="img-fluid vector-image"
                    />
                    <div className="second-border">
                      <h5 className="interfere-heading">Excellence</h5>
                    </div>

                    <p className="first-text">
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet sint. Velit officia{" "}
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 ms-auto">
                  <div >
                    <img
                      src={Vector1}
                      alt="vector 1"
                      className="img-fluid vector-image"
                    />
                    <div className="third-border">
                      <h5 className="interfere-heading">Inovation</h5>
                    </div>

                    <p className="first-text">
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet sint. Velit officia{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <img
                src={Frame}
                className="img-fluid frame-image"
                alt="frame"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
