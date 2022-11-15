import React, { useState } from "react";
import Navbar from "./Navbar";
import flat1 from "../Assets/flat1.svg";
import flat2 from "../Assets/flat2.svg";
import flat3 from "../Assets/flat3.svg";
import flat4 from "../Assets/flat4.svg";
import flat5 from "../Assets/flat5.svg";
import flat6 from "../Assets/flat6.svg";
import flat7 from "../Assets/flat7.svg";
import Frame from "../Assets/Frame.svg";
import s1 from "../Assets/s1.svg";
import s2 from "../Assets/s2.svg";
import s3 from "../Assets/s3.svg";
import s4 from "../Assets/s4.png";
import s5 from "../Assets/s5.png";
import rreact from "../Assets/Services Assets/rreact.png";
import aangular from "../Assets/Services Assets/aangular.png";
import jjs from "../Assets/Services Assets/jjs.png";
import vue from "../Assets/Services Assets/vue.svg";
import hhtml5 from "../Assets/Services Assets/hhtml5.svg";
import bbots from "../Assets/Services Assets/bbots.png";
import rails from "../Assets/Services Assets/rails.png";
import oracle from "../Assets/Services Assets/oracle.png";
import angle from "../Assets/Services Assets/angle.png";
import chash from "../Assets/Services Assets/chash.png";
import firebase from "../Assets/Services Assets/firebase.svg";
import micro from "../Assets/Services Assets/micro.png";
import ppostman from "../Assets/Services Assets/ppostman.png";
import ccy from "../Assets/Services Assets/ccy.png";
import sse from "../Assets/Services Assets/sse.png";
import amazon from "../Assets/Services Assets/amazon.png";
import sass from "../Assets/Services Assets/sass.png";
import Footer from "./Footer";

import "./homepage.scss";
import "./responsive.scss";

const Services = () => {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);
  const [show6, setShow6] = useState(false);
  const [show7, setShow7] = useState(false);


  return (
    <div>
      {/* navbar  */}
      <Navbar />
      {/* service section 1 */}
      <div className="container backg-image">
        <div className="row align-items-center">
          <div className="col-lg-6 sc2-1">
            <h3 className="ui-heading">UI/UX Designer</h3>
            <div>
              <p className="ui-para">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
              <p className="ui-para">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
              <div className="text-start learnMore-container">
                <button
                  type="button"
                  className="btn learnMore-button p-2"
                  onClick={() => setShow(!show)}
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-6 sc2-2">
            <img src={flat1} className="img-fluid" alt="main " />
          </div>
        </div>
      </div>

      {/* toggle section1 */}
      {show ? (
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h2>
                <span className="tools-heading">Tools Us</span>ed In This
                Service
              </h2>
              <div className="mt-5">
                <img src={s1} alt="" className="img-fluid ps-3" />
                <img src={s2} alt="" className="img-fluid ps-3" />
                <img src={s3} alt="" className="img-fluid ps-3" />
                <img src={s4} alt="" className="img-fluid ps-3" />
                <img src={s5} alt="" className="img-fluid ps-3" />
              </div>

              <div className="mt-5">
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>

              <button className="btn btn-danger">Let's Talk</button>
            </div>

            <div className="col-lg-6"></div>
          </div>
        </div>
      ) : (
        ""
      )}
     
      {/* service section 2 */}
      <div className="container backg-image">
        <div className="row align-items-center">
          <div className="col-lg-6 sc2-2">
            <img src={flat2} className="img-fluid" alt="main " />
          </div>
          <div className="col-lg-6 sc2-1">
            <h3 className="ui-heading">Web Development</h3>
            <div>
              <p className="ui-para">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
              <p className="ui-para">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
              <div className="text-end learnMore-containe">
                <button type="button" className="btn learnMore-button p-2" onClick={()=>setShow1(!show1)}>
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* toggle section 2 */}
      {show1 ? (
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h2>
                <span className="tools-heading">Tools Us</span>ed In This
                Service
              </h2>
              <div className="mt-5">
                <img src={rreact} alt="" className="img-fluid ps-2" />
                <img src={aangular} alt="" className="img-fluid ps-2" />
                <img src={jjs} alt="" className="img-fluid ps-2" />
                <img src={vue} alt="" className="img-fluid ps-2" />
                <img src={hhtml5} alt="" className="img-fluid ps-2" />
                <img src={bbots} alt="" className="img-fluid ps-2" />
                <img src={rails} alt="" className="img-fluid ps-2" />
                <img src={oracle} alt="" className="img-fluid ps-2" />
                 
              </div>

              <div className="mt-5">
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>

              <button className="btn btn-danger">Let's Talk</button>
            </div>

            <div className="col-lg-6"></div>
          </div>
        </div>
      ) : (
        ""
      )}
      {/* service section 3 */}
      <div className="container backg-image">
        <div className="row align-items-center">
          <div className="col-lg-6 sc2-1">
            <h3 className="ui-headings text-center">Mobile App Development</h3>
            <div>
              <p className="ui-para">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
              <p className="ui-para">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
              <div className="text-start learnMore-container">
                <button type="button" className="btn learnMore-button p-2" onClick={() => setShow2(!show2)}>
                  Learn More
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-6 sc2-2">
            <img src={Frame} className="img-fluid" alt="main " />
          </div>
        </div>
      </div>

      {/* toggle section3 */}

      {show2 ? (
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h2>
                <span className="tools-heading">Tools Us</span>ed In This
                Service
              </h2>
              <div className="mt-5">
              <img src={rreact} alt="" className="img-fluid ps-2" />
              <img src={jjs} alt="" className="img-fluid ps-2" />
              <img src={angle} alt="" className="img-fluid ps-2" />
              <img src={chash} alt="" className="img-fluid ps-2" />
              <img src={firebase} alt="" className="img-fluid ps-2" />
              
              </div>

              <div className="mt-5">
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>

              <button className="btn btn-danger">Let's Talk</button>
            </div>

            <div className="col-lg-6">
              <img src={micro} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      ) : (
        ""
      )}

      {/* service section 4 */}
      <div className="container backg-image">
        <div className="row align-items-center">
          <div className="col-lg-6 sc2-2">
            <img src={flat3} className="img-fluid" alt="main " />
          </div>
          <div className="col-lg-6 sc2-1">
            <h3 className="ui-headings text-center">CRM & ERP Development</h3>
            <div>
              <p className="ui-para">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
              <p className="ui-para">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
              <div className="text-end learnMore-containe">
                <button type="button" className="btn learnMore-button p-2" onClick={()=>setShow3(!show3)}>
                  Learn More   
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* toggle section 4 */}
      {show3 ? (
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h2>
                <span className="tools-heading">Tools Us</span>ed In This
                Service
              </h2>
              <div className="mt-5">
              <img src={ppostman} alt="" className="img-fluid ps-3" />
              <img src={ccy} alt="" className="img-fluid ps-3" />
              <img src={sse} alt="" className="img-fluid ps-3" /> 
              </div>

              <div className="mt-5">
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>

              <button className="btn btn-danger">Let's Talk</button>
            </div>

            <div className="col-lg-6">
              <img src={micro} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {/* service section 5 */}
      <div className="container backg-image">
        <div className="row align-items-center">
          <div className="col-lg-6 sc2-1">
            <h3 className="ui-headings text-center">Cloud Computing</h3>
            <div>
              <p className="ui-para">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
              <p className="ui-para">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
              <div className="text-start learnMore-container">
                <button type="button" className="btn learnMore-button p-2" onClick={()=> setShow4(!show4)}>
                  Learn More
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-6 sc2-2">
            <img src={flat4} className="img-fluid" alt="main " />
          </div>
        </div>
      </div>

      {/* toggle sectio 5  */}
      {show4 ? (
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h2>
                <span className="tools-heading">Tools Us</span>ed In This
                Service
              </h2>
              <div className="mt-5">
              <img src={amazon} alt="" className="img-fluid ps-3" />
              <img src={sass} alt="" className="img-fluid ps-3" />
              
              </div>

              <div className="mt-5">
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>

              <button className="btn btn-danger">Let's Talk</button>
            </div>

            <div className="col-lg-6">
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {/* service section 6 */}
      <div className="container backg-image">
        <div className="row align-items-center">
          <div className="col-lg-6 sc2-2">
            <img src={flat6} className="img-fluid" alt="main " />
          </div>
          <div className="col-lg-6 sc2-1">
            <h3 className="ui-headings text-center">SaaS Development</h3>
            <div>
              <p className="ui-para">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
              <p className="ui-para">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
              <div className="text-end learnMore-containe">
                <button type="button" className="btn learnMore-button p-2" onClick={()=>setShow5(!show5)}>
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {show5 ? (
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h2>
                <span className="tools-heading">Tools Us</span>ed In This
                Service
              </h2>
              <div className="mt-5">
              <img src={amazon} alt="" className="img-fluid ps-3" />
              <img src={sass} alt="" className="img-fluid ps-3" />
              
              </div>

              <div className="mt-5">
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>

              <button className="btn btn-danger">Let's Talk</button>
            </div>

            <div className="col-lg-6">
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
        
      {/* service section 8 */}
      <div className="container backg-image">
        <div className="row align-items-center">
          <div className="col-lg-6 sc2-1">
            <h3 className="ui-headings text-center">Payment Integration</h3>
            <div>
              <p className="ui-para">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
              <p className="ui-para">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
              <div className="text-start learnMore-container">
                <button type="button" className="btn learnMore-button p-2" onClick={()=>setShow6(!show6)}>
                  Learn More
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-6 sc2-2">
            <img src={flat6} className="img-fluid" alt="main " />
          </div>
        </div>
      </div>

       {/* toggle section 8  */}
       {show6 ? (
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h2>
                <span className="tools-heading">Tools Us</span>ed In This
                Service
              </h2>
              <div className="mt-5">
              <img src={ppostman} alt="" className="img-fluid ps-3" />
              <img src={ccy} alt="" className="img-fluid ps-3" />
              <img src={sse} alt="" className="img-fluid ps-3" /> 
              </div>

              <div className="mt-5">
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>

              <button className="btn btn-danger">Let's Talk</button>
            </div>

            <div className="col-lg-6">
              <img src={micro} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {/* service section 9 */}
      <div className="container backg-image">
        <div className="row align-items-center">
          <div className="col-lg-6 sc2-2">
            <img src={flat7} className="img-fluid" alt="main " />
          </div>
          <div className="col-lg-6 sc2-1">
            <h3 className="ui-headings text-center">Sqa Development</h3>
            <div>
              <p className="ui-para">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
              <p className="ui-para">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
              <div className="text-end learnMore-containe">
                <button type="button" className="btn learnMore-button p-2" onClick={()=>setShow7(!show7)}>
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {show7 ? (
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h2>
                <span className="tools-heading">Tools Us</span>ed In This
                Service
              </h2>
              <div className="mt-5">
              <img src={ppostman} alt="" className="img-fluid ps-3" />
              <img src={ccy} alt="" className="img-fluid ps-3" />
              <img src={sse} alt="" className="img-fluid ps-3" /> 
              </div>

              <div className="mt-5">
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>

              <button className="btn btn-danger">Let's Talk</button>
            </div>

            <div className="col-lg-6">
            </div>
          </div>
        </div>
      ) : (
        ""
      )}

      <Footer />
    </div>
  );
};

export default Services;
