import React, { useState, useRef } from "react";
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

//  react-bototstrap modal
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import emailjs from '@emailjs/browser';  // use emailjs service for sending email when user submit the form



const Contact = () => {
  const InitialValues = {
    User_name: "",
    User_email: "",
    User_phone: "",
    User_company: "",
    User_message: ""
  };
  const [formValues, setFormValues] = useState(InitialValues);
  console.log("formVaues=====>", formValues)
  
    //  states for  react bootstrap modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
     
  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormValues({...formValues, [name]:value})
  }


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
     // add service id , template id, public key
    emailjs.sendForm('service_q13mh96', 'template_wuu212i', form.current, '_EdDeF0lUP-7k4y7h')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };


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
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <span className="text-primary">Your products :</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
                <form  ref={form} onSubmit={sendEmail}>
                  <div className="d-flex align-items-center">
                    {/* <label>Your Name</label> */}
                    <input 
                    name='User_name'
                    type="text"
                    className="contact-modal1"
                    placeholder="Name"
                    onChange={handleChange}
                     />
                    {/* <label>Your Email</label> */}
                    <input
                    name="User_email"
                    type="text"
                    className="contact-modal2"
                    placeholder="Email" 
                    onChange={handleChange}
                    />
                  </div>
                  <div className="d-flex align-items-center">
                    {/* <label>Your Password</label> */}
                    <input
                    name="User_phone"
                     type="text"
                    className="contact-modal3" 
                    placeholder="Phone"
                    onChange={handleChange}
                     />
                    {/* <label>Your Age</label> */}
                    <input
                    name="User_company"
                     type="text"
                     className="contact-modal4"
                      placeholder="Company" 
                      onChange={handleChange}
                      />
                  </div>
                  <textarea 
                    name="User_message"
                    id=""
                    cols="45" 
                    rows="4"
                    className="message-textarea"
                    onChange={handleChange}
                    >Message</textarea>

                </form>
                <span className="contact-file-icon">Attach file
                <i class="fa fa-file-text-o"></i>
                </span>

                <input className="contact-submit-button" value="Submit" type='button' />

        </Modal.Body>
        {/* <Modal.Footer>
          <h2>Footer</h2>
        </Modal.Footer> */}
      </Modal>
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
                <Button variant="light" onClick={handleShow}>
                  <a className="column-content1">Send a Message</a>
                  </Button>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="second-column">
                  <img src={c3} alt="" className="img-fluid contact-image1" />
                  <h6 >  <a href="tel:123-456-7890" className="column-content2"> (042) 35312424</a></h6>
                </div>
                <div className="second-column">
                  <img src={c4} alt="" className="img-fluid contact-image1" />
                  <h6>
                   <a href="mailto:hr@isoftstudios.com"  className="column-content2">
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
      <section>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108890.71258881237!2d74.1918597430211!3d31.473731138728972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391903d3cba2bc91%3A0xd0bb34288eadafb2!2siSOFTSTUDIOS!5e0!3m2!1sen!2s!4v1668064325312!5m2!1sen!2s" width="100%" height="600" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
