import React from "react";
import Navbar from "./Navbar";
import "./homepage.scss";
import "./responsive.scss";
import about from "../Assets/About-Assets/about.svg";
import object from "../Assets/About-Assets/object.png";
import about1 from "../Assets/About-Assets/about1.svg";
import about2 from "../Assets/About-Assets/about2.png";
import about3 from "../Assets/About-Assets/about3.png";
import about4 from "../Assets/About-Assets/about4.png";
import about5 from "../Assets/About-Assets/about5.png";
//
import icon1 from "../Assets/caree-Assets/icon1.png";
import icon2 from "../Assets/caree-Assets/icon2.png";
import icon3 from "../Assets/caree-Assets/icon3.png";
import icon4 from "../Assets/caree-Assets/icon4.png";
import icon5 from "../Assets/caree-Assets/icon5.png";
import icon6 from "../Assets/caree-Assets/icon6.png";
import icon7 from "../Assets/caree-Assets/icon7.png";
import icon8 from "../Assets/caree-Assets/icon8.png";

const About = () => {
  return (
    <>
      <Navbar />
      {/* first section  */}

      <section >
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <img src={about} alt="" className="img-fluid" />
            </div>
            <div className="col-lg-6">
              <div className="About-first-section">
                <h2>isoftstudios,We are Your Digital Partner</h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* second section  */}
      <section className="map-section">
        <div className="container">
          <div className="contact-parent py-2">
            <h3>Do you want to be a part of our team?</h3>
            <button className="btn btn-danger ms-auto">
              Check Out Our Portfolio
            </button>
          </div>
        </div>
      </section>

      {/* third section  */}
      <section className="About-third-section">
        <div className="container">
          <h2 className="text-center py-2">
            Why <span className="isoftstu">IsofotStu</span>dios
          </h2>
          <p className="text-center mt-2">
            Our global reach and customer-centric approach make Systems your
            partner of choice
          </p>
          <div className="container">
            <div className="row">
              <div className="col-lg-3 mt-5">
                <img src={object} alt="" className="img-fluid " />
              </div>
              <div className="col-lg-9 ">
                <div className="d-flex about-first-container p-2">
                  <img src={about1} alt="" className="img-fluid" />
                  <div>
                    <h6 className="my-2">Proven Track Record</h6>
                    <p>
                      Our team goes above and beyond to provide total
                      satisfaction. Your happiness is always our foremost
                      priority.
                    </p>
                  </div>
                </div>
                {/*  */}
                <div className="d-flex about-second-container p-2">
                  <img src={about2} alt="" className="img-fluid" />
                  <div>
                    <h6 className="my-2">Proven Track Record</h6>
                    <p>
                      Our team goes above and beyond to provide total
                      satisfaction. Your happiness is always our foremost
                      priority.
                    </p>
                  </div>
                </div>
                {/*  */}
                <div className="d-flex about-second-container p-2">
                  <img src={about3} alt="" className="img-fluid" />
                  <div>
                    <h6 className="my-2">Proven Track Record</h6>
                    <p>
                      Our team goes above and beyond to provide total
                      satisfaction. Your happiness is always our foremost
                      priority.
                    </p>
                  </div>
                </div>
                <div className="d-flex about-second-container p-2">
                  <img src={about4} alt="" className="img-fluid" />
                  <div>
                    <h6 className="my-2">Proven Track Record</h6>
                    <p>
                      Our team goes above and beyond to provide total
                      satisfaction. Your happiness is always our foremost
                      priority.
                    </p>
                  </div>
                </div>
                <div className="d-flex about-first-container p-2">
                  <img src={about5} alt="" className="img-fluid" />
                  <div>
                    <h6 className="my-2">Proven Track Record</h6>
                    <p>
                      Our team goes above and beyond to provide total
                      satisfaction. Your happiness is always our foremost
                      priority.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* fourth section  */}
      <section className=" ">
        <div className="container">
          <h2 className="text-center py-2">We take care of our Isoft family</h2>
          <p className="text-center">
            Everything you need to do your best work
          </p>

          {/*  */}
          <div className="container">
            <div className="row ms-3">
              <div className="col-lg-3 ">
                <div className="main-boder">
                  <img src={icon1} alt="" className="img-fluid" />
                  <h6>Paid Time Offs</h6>
                  <p>
                    Amet minim mollit non <br /> deseru
                  </p>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="main-boder">
                  <img src={icon2} alt="" className="img-fluid" />
                  <h6>Paid Time Offs</h6>
                  <p>
                    Amet minim mollit non <br /> deseru
                  </p>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="main-boder">
                  <img src={icon3} alt="" className="img-fluid" />
                  <h6>Paid Time Offs</h6>
                  <p>
                    Amet minim mollit non <br /> deseru
                  </p>
                </div>{" "}
              </div>
              <div className="col-lg-3">
                <div className="main-boder">
                  <img src={icon4} alt="" className="img-fluid" />
                  <h6>Paid Time Offs</h6>
                  <p>
                    Amet minim mollit non <br /> deseru
                  </p>
                </div>
              </div>
            </div>
            <div className="row mt-3 ms-3">
              <div className="col-lg-3">
                <div className="main-boder">
                  <img src={icon5} alt="" className="img-fluid" />
                  <h6>Paid Time Offs</h6>
                  <p>
                    Amet minim mollit non <br /> deseru
                  </p>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="main-boder">
                  <img src={icon6} alt="" className="img-fluid" />
                  <h6>Paid Time Offs</h6>
                  <p>
                    Amet minim mollit non <br /> deseru
                  </p>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="main-boder">
                  <img src={icon7} alt="" className="img-fluid" />
                  <h6>Paid Time Offs</h6>
                  <p>
                    Amet minim mollit non <br /> deseru
                  </p>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="main-boder">
                  <img src={icon8} alt="" className="img-fluid" />
                  <h6>Paid Time Offs</h6>
                  <p>
                    Amet minim mollit non <br /> deseru
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
