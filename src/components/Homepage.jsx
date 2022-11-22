import React from "react";
import "./homepage.scss";
import "./responsive.scss";
// import ISOFTSTUDIO from "../Assets/ISOFTSTUDIOS1.png";
import preview1 from "../Assets/preview1.png";
import Frame from "../Assets/Frame.png";
import Vector1 from "../Assets/Vector1.png";
import Vector2 from "../Assets/Vector2.png";
import group167 from "../Assets/group167.png";
import group168 from "../Assets/group168.png";
import group170 from "../Assets/group170.png";
import group171 from "../Assets/group171.png";
import Rectangle108 from "../Assets/Rectangle108.svg";
import Group39 from "../Assets/Group39.svg";
import Group42 from "../Assets/Group42.svg";
import Group45 from "../Assets/Group45.svg";
import Group44 from "../Assets/Group44.svg";
import mongo211 from "../Assets/mongo211.png";
import cassandara from "../Assets/cassandara.svg";
import oracle from "../Assets/oracle.svg";
import vue from "../Assets/vue.png";
import award1 from "../Assets/award1.svg";
import award2 from "../Assets/award2.png";
import award3 from "../Assets/award3.png";
import group173 from "../Assets/group173.svg";
import group182 from "../Assets/group182.png";
import Footer from "./Footer";
import Navbar from "./Navbar";




const Homepage = () => {
 
  return (
    <div>
      <Navbar />
      {/* section #1 */}
      <section>
        <div className="first-section container-fluid ">
          <div className="row align-items-center">
            <div className="col-lg-6 mt-5">
              <img src={preview1} className="img-fluid image-prevew" />
            </div>
            <div className="col-lg-6">
              <div className="first-container">
                <h1 className="text-light">we are a Creative Agency</h1>
              </div>
              <p className="text-light second-container">
                We create magnificent products through Technology
              </p>
              <div className="text-end third-container">
                <button type="button" className="btn getQuote p-2">
                  Get a Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* section #2  */}
      <section className="second-section">
        <div className="container">
          <div className="col-lg-7 pt-3">
            <h1 className=" mt-4 key-values">
              Our <span className="keyValues">Key Values</span>
            </h1>

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
                  <div>
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
              <img src={Frame} className="img-fluid frame-image" alt="frame" />
            </div>
          </div>
        </div>
      </section>

      {/* section # 4 */}

      <section className="third-section">
        <div className="offer">
          <h1 className="fist-heading">
            WHAT WE <span className="offer-span">OFFER</span>
          </h1>
          <p className="pargraph">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit..
          </p>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="row">
                <div className="col-6 ">
                  <img
                    src={group167}
                    className="img-fluid first-image"
                    alt=""
                  />
                </div>
                <div className="col-6 ">
                  <img
                    src={group168}
                    className="img-fluid second-image"
                    alt=""
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-6 ">
                  <img
                    src={group170}
                    className="img-fluid first-image"
                    alt=""
                  />
                </div>
                <div className="col-6 ">
                  <img
                    src={group171}
                    className="img-fluid second-image"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 ">
              <div className="webDevelopment">
                <h2 className="webheading">Web Development</h2>
                <p className="webparagraph">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit..
                </p>
              </div>
              {/* <div class="container ms-5"> */}
              <div className="grid-container">
                <div className="row pt-3 ">
                  <div className="col-lg-4 ">
                    <img src={Rectangle108} className="img-fluid" alt="" />
                  </div>
                  <div className="col-lg-4">
                    <img src={Group39} className="img-fluid" alt="" />
                  </div>
                  <div className="col-lg-4">
                    <img src={Group42} className="img-fluid" alt="" />
                  </div>
                </div>
                <div className="row pt-3 ">
                  <div className="col-lg-4 mt-2">
                    <img src={Group45} className="img-fluid" alt="" />
                  </div>
                  <div className="col-lg-4 mt-2">
                    <img src={Group44} className="img-fluid" alt="" />
                  </div>
                  <div className="col-lg-4 mt-2">
                    <img src={mongo211} className="img-fluid" alt="" />
                  </div>
                </div>
                <div className="row pt-3 ">
                  <div className="col-lg-4 mt-4">
                    <img src={cassandara} className="img-fluid" alt="" />
                  </div>
                  <div className="col-lg-4 mt-4">
                    <img src={oracle} className="img-fluid" alt="" />
                  </div>
                  <div className="col-lg-4 mt-2">
                    <img src={vue} className="img-fluid" alt="" />
                  </div>
                </div>
              </div>
              <div className="text-end learnMore-container">
                <button type="button" className="btn learnMore-button p-2">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* section # 5  */}
      <section className="triangle-background">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mss mt-2">
              <div>
                <h2>
                  <span className="engagement-heading">Engage</span>ment Model
                </h2>
                <p className="mt-3">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit..
                </p>
                <img src={group182} alt="" className="img-fluid" />
              </div>
            </div>
            <div className="col-lg-6"></div>
          </div>
        </div>
      </section>

      {/* section # 6 */}
      <section className="awardBgColor">
        <div className="container ">
          <div>
            <h2 className="text-center p-3">
              <span className="awards-heading">Awards</span>& Recognition
            </h2>
          </div>
          <div className="m-2">
            <img src={award1} alt="" className="img-fluid p-2" />
            <img src={award2} alt="" className="img-fluid p-2" />
            <img src={award3} alt="" className="img-fluid p-2" />
          </div>
        </div>
      </section>
    <Footer />
    </div>
  );
};

export default Homepage;
