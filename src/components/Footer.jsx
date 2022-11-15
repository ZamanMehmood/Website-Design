import React from "react";
import straight from "../Assets/straight.svg";
import linkding from "../Assets/linkding.svg";
import facebook from "../Assets/facebook.svg";
import insta from "../Assets/insta.svg";
import call from "../Assets/call.svg";
import "./homepage.scss";
import "./responsive.scss";

const Footer = () => {
  return (
    <div>
      <section className="footer-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mt-4">
              <div>
                <h5>How Can We Help You?</h5>

                <div className="d-flex">
                  <div className="me-4">
                    <label>Your Name</label>
                    <input type="text" className="input-box" />
                  </div>
                  <div>
                    <label>Your Email Address</label>
                    <input type="text" className="input-box" />
                  </div>
                </div>

                <div className="d-flex mt-2">
                  <div className="">
                    <label>Your Name</label>
                    <input type="text" className="input-box" />
                  </div>
                  <div>
                    <label>How Should We Contact You?</label>
                    <div className="ps-1">
                      <span>Email</span>
                      <input type="radio" className="radio-button" />
                      <span>Phone</span>
                      <input type="radio" className="radio-button" />
                    </div>
                  </div>
                </div>

                <div>
                  <h6>Message</h6>
                  <input type="text" className="message-box" />
                </div>

                <div className="submit-button-container">
                  <button className="submit-button">Submit</button>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mws">
                <div className="ws1">
                  <h6>Contact</h6>
                  <img src={straight} className="img-fluid" alt="" />
                  <div>
                    <img src={call} className="img-fluid me-2" alt="" />
                    <span>(042)35312424</span>
                  </div>
                  <p className="mt-2">
                    ISOFTSTUDIOS, 28-K, Johar Town, Lahore,54000
                  </p>
                  <div>
                    <img src={linkding} className="img-fluid  " alt="" />
                    <img src={facebook} className="img-fluid ps-2" alt="" />
                    <img src={insta} className="img-fluid ps-2" alt="" />
                  </div>
                </div>
                <div className="ws2">
                  <h6>Looking for a job?</h6>
                  <img src={straight} className="img-fluid" alt="" />

                  <h6>Apply at</h6>
                  <h6 className="tany-text">tanya.hill@example.com</h6>
                  <div>
                    <button className="application-button">Application</button>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <h5>Useful Links</h5>
                <p>company</p>
                <p>services</p>
                <p>Blogs/News</p>
                <p>Career</p>
                <p>Contact</p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-sec">
          <div className="footer-content-container pt-4">
            <span className="ms-5">
              Amet minim mollit non deserunt ullamco est sit{" "}
            </span>
            <span className="ms-auto me-5">
              privacy policy | Terms & Conditions
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
