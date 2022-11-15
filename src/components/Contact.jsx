import React from "react";
import Navbar from "./Navbar";
import cp1 from "../Assets/contact-Assets/cp1.png";
import c1 from "../Assets/contact-Assets/c1.svg";
import c2 from "../Assets/contact-Assets/c2.svg";
import c3 from "../Assets/contact-Assets/c3.svg";
import c4 from "../Assets/contact-Assets/c4.svg";
import map from "../Assets/contact-Assets/map.png";
import Footer from "./Footer";

import "./homepage.scss";
import "./responsive.scss";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 pt-5">
              <h2>
                <span className="contact-heading">Contact</span> Us
              </h2>
              <h3 className="contact-detail pt-3">
                Let's Create Something Owesome Together!
              </h3>
              <button type="button" className="shadowl-cheading">
                SCHEDULE A MEETING
              </button>{" "}
            </div>
            <div className="col-lg-6">
              <img src={cp1} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>

      {/*  */}
      <section className="bg-contact">
        <div className="container">
          <h2 className="cs-1">
            Let's<span className="cs-2">Talk Ab</span>out
          </h2>
          <p>
            Do you have any questions? Requests? Ideas? Or maybe you simply want
            to chat with us to get to know us better? Whatever the reason,
            everything you need to contact us:)
          </p>
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="first-column">
                  <img src={c1} alt="" className="img-fluid contact-image" />
                  <h6 className="column-content1">Free Consultation</h6>
                </div>
                <div className="first-column">
                  <img src={c2} alt="" className="img-fluid contact-image" />
                  <h6 className="column-content1">Send a Message</h6>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="second-column">
                  <img src={c3} alt="" className="img-fluid contact-image1" />
                  <h6 className="column-content2">  <a href="tel:123-456-7890"> (042) 35312424</a></h6>
                </div>
                <div className="second-column">
                  <img src={c4} alt="" className="img-fluid contact-image1" />
                  <h6 className="column-content2">
                   <a href="mailto:hr@isoftstudios.com">
                   sales@isoftstudios.com <br />
                    hello@isoftstudios.com <br />
                    hr@isoftstudios.com
                   </a>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*  */}
      <section className="map-section">
        <div className="container">
          <div className="contact-parent">
            <h3>Do you want to be a part of our team?</h3>
            <button className="join-now">Join Now</button>
          </div>
        </div>
      </section>
      {/*  */}
      <section>
        {/* <img src={map} alt="" className="img-fluid" /> */}
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108890.71258881237!2d74.1918597430211!3d31.473731138728972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391903d3cba2bc91%3A0xd0bb34288eadafb2!2siSOFTSTUDIOS!5e0!3m2!1sen!2s!4v1668064325312!5m2!1sen!2s" width="100%" height="600" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
