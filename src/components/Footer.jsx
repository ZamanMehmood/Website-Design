import React,{ useState, useRef } from "react";
import straight from "../Assets/straight.svg";
import linkding from "../Assets/linkding.svg";
import facebook from "../Assets/facebook.svg";
import insta from "../Assets/insta.svg";
import call from "../Assets/call.svg";
import "./homepage.scss"; 
import "./responsive.scss";
import { Link } from "react-router-dom";
import Services from "./services";
// 
import emailjs from '@emailjs/browser';  // use emailjs service for sending email when user submit the form
// 

const Footer = () => {
  const Initial_Values = {
    user_name: '',
    user_email:'',
    user_number:'',
    contact_info: '',
    user_message: ''
  };
  const [formValues, setFormValues]=useState(Initial_Values);

  // console.log("form value", formValues);

  const handleChange = (e) =>{
    const {name, value} = e.target;
    setFormValues({...formValues, [name]:value})
  }

  // use  emailjs service for sending email when user submit the form   also send data using 
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
      <form className="footer-section" ref={form}  onSubmit={sendEmail} >
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mt-4">
              <div>
                <h5>How Can We Help You?</h5>
                <div className="d-flex">
                  <div className="me-4">
                    <label>Your Name</label>
                    <input type="text" className="input-box" name="user_name" onChange={handleChange} />
                  </div>
                  <div>
                    <label>Your Email Address</label>
                    <input type="email" className="input-box" name="user_email" onChange={handleChange}/>
                  </div>
                </div>

                <div className="d-flex mt-2">
                  <div className="">
                    <label className="d-block">Your Phone No</label>
                    <input type="number" className="input-box" name="user_number" onChange={handleChange}/>
                  </div>
                  <div className="contact-container">
                    <label>How Should We Contact You?</label>
                    <div className="ps-1">
                      <span className="email-radio-button">
                      <label
                        className="form-check-label"
                        for="flexRadioDefault2"
                      >Email</label>
                      <input
                        className="form-check-input"
                        type="radio"
                        name="contact_info"
                        value='contact-email'
                        id="flexRadioDefault2"
                        onChange={handleChange}
                      />
                      </span>
                     <span>
                     <label
                        className="form-check-label"
                        for="flexRadioDefault2"
                      >Phone</label>
                      <input
                        className="form-check-input"
                        type="radio"
                        name="contact_info"
                        id="flexRadioDefault2"
                        value='contact-phone'
                        onChange={handleChange}
                      />
                     </span>
                      
                    </div>
                  </div>
                </div>

                <div>
                  <h6>Message</h6>
                  <input type="text" className="message-box"  name="user_message" onChange={handleChange}/>
                </div>

                <div className="submit-button-container">
                  <input type='submit' value="Submit" className="submit-button" />
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
                    <span>
                      <a href="tel:123-456-7890" className="container-anchor">
                        (042)35312424
                      </a>
                    </span>
                  </div>
                  <p className="mt-2">
                    <a
                      href="https://www.google.com/maps/dir/31.4660635,74.250364/isoft+studios/@31.4662872,74.2486199,17z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x391903d3cba2bc91:0xd0bb34288eadafb2!2m2!1d74.2512532!2d31.466486"
                      className="container-anchor"
                    >
                      ISOFTSTUDIOS, 28-K, Johar Town, Lahore,54000
                    </a>
                  </p>
                  <div>
                    <a href="https://www.linkedin.com/company/isoft-studios/mycompany/">
                      <img src={linkding} className="img-fluid  " alt="" />
                    </a>
                    <a href="https://www.facebook.com/isoftstudio/">
                      <img src={facebook} className="img-fluid ps-2" alt="" />
                    </a>
                    <a href="https://www.instagram.com/isoft.studios/">
                      <img src={insta} className="img-fluid ps-2" alt="" />
                    </a>
                  </div>
                </div>
                <div className="ws2">
                  <h6>Looking for a job?</h6>
                  <img src={straight} className="img-fluid" alt="" />

                  <h6>Apply at</h6>
                  <h6 className="tany-text">hr@isoftstudios.com</h6>
                  <Link to="/contact">
                    <div>
                      <button className="application-button">
                        Application
                      </button>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="mt-4 useful-links-container">
                <h5>Useful Links</h5>
                <ul className="footer-unorder-list">
                  <li className="footer-order-list">
                    <Link to="/Services" className="container-anchor">
                      Services
                    </Link>
                  </li>
                  <li className="footer-order-list">
                    <Link to="/about" className="container-anchor">
                      About
                    </Link>
                  </li>
                  <li className="footer-order-list">
                    <Link to="/portfolio" className="container-anchor">
                     Portfolio
                    </Link>
                  </li>
                  <li className="footer-order-list">
                    <Link to="/career" className="container-anchor">
                      Career
                    </Link>
                  </li>
                  <li className="footer-order-list">
                    <Link to="/contact" className="container-anchor">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-sec">
          <div className="footer-content-container pt-4">
            <span className="ms-5">
              Amet minim mollit non deserunt ullamco est sit
            </span>
            <span className="ms-auto me-5">
              privacy policy | Terms & Conditions
            </span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Footer;

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import "./registerpage.scss";

// const RegisterPage = () => {
//   const [fullName, setFullName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [dateOfBirth, setdateOfBirth] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log("handle submit", fullName, email, password, dateOfBirth);

//     let pyaload = {
//       fullName,
//       email,
//       password,
//       gender: "Male",
//       dateOfBirth: "3/2/2022",
//     };

//     const apiCall = await axios.post(
//       "http://localhost:8081/users/register",
//       pyaload
//     );
//     console.log("apiCall", apiCall);
//   };

//   return (
//     <>
//       <form className="main-container mt-5" onSubmit={handleSubmit}>
//         <div className="row">
//           <div className="col-6 ">
//             <div className="m-2">
//               <label>Email*</label>
//               <input
//                 type="email"
//                 className="main-input"
//                 placeholder="Please Type your email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </div>
//             <div className="m-2">
//               <label>Dummy Number</label>
//               <input
//                 type="text"
//                 className="main-input"
//                 placeholder="Please enter"
//               />
//             </div>

//             <div className="m-2">
//               <label htmlFor="">Password*</label> <br />
//               <i className="fa fa-eye-slash main-icon"></i>
//               <input
//                 type="password"
//                 className="main-input"
//                 placeholder="Minimum 6 characters allowed"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//             </div>
//             <div className="d-flex mt-4 ms-5">
//               <span>Birthday</span>
//               <div className="d-flex">
//                 <select
//                   defaultValue={dateOfBirth}
//                   onChange={(e) => setdateOfBirth(e.target.value)}
//                 >
//                   <option>Month</option>
//                   <option>1</option>
//                   <option>1</option>
//                   <option>1</option>
//                 </select>
//                 <select
//                   defaultValue={dateOfBirth}
//                   onChange={(e) => setdateOfBirth(e.target.value)}
//                 >
//                   <option>Day</option>
//                   <option>1</option>
//                   <option>1</option>
//                   <option>1</option>
//                 </select>
//                 <select
//                   defaultValue={dateOfBirth}
//                   onChange={(e) => setdateOfBirth(e.target.value)}
//                 >
//                   <option>Year</option>
//                   <option>1</option>
//                   <option>1</option>
//                   <option>1</option>
//                 </select>
//               </div>
//             </div>
//           </div>
//           {/* // second form   */}
//           <div className="col-6  ">
//             <div className="m-2">
//               <label>Full Name*</label>
//               <input
//                 type="text"
//                 className="main-input"
//                 placeholder="Enter your fullName"
//                 value={fullName}
//                 onChange={(e) => setFullName(e.target.value)}
//               />
//             </div>
//             <div className="m-2">
//               <input type="checkbox" />
//               <span className="checkbox-text m-2">
//                 I'd like to receive exclusive offers and promotions via SMS
//               </span>
//             </div>
//             <button type="submit" className="main-inputs text-light">
//               SIGN UP
//             </button>
//             <p className="checkbox-text ">
//               By clicking “SIGN UP”, I agree to Daraz's{" "}
//               <span className="text-primary">Terms of Use</span> and{" "}
//               <span className="text-primary">Privacy Policy</span>
//             </p>
//             <div>
//               <p className="checkbox-text">Or, sign up with
//             <Link to="/login" className="m-1">Login</Link>

//               </p>
//               <button type="button" className="SignUpwith-email-button  ">
//                 Sign up with email
//               </button>

//             </div>
//             <div className="m-2">
//               <i className="fa fa-facebook facebook-icon text-light"></i>
//               <button className="btn btn-primary text-light facebook-field">
//                 Facebook
//               </button>
//               <i className="fa fa-google google-icon text-light"></i>
//               <button className="btn btn-danger text-light google-field m-1">
//                 Google
//               </button>
//             </div>
//           </div>
//         </div>
//       </form>
//     </>
//   );
// };

// export default RegisterPage;
