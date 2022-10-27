import React from "react";
import Navbar from "./Navbar";
import flat1 from "../Assets/flat1.svg";
import flat2 from "../Assets/flat2.svg";
import Frame from "../Assets/Frame.svg"

import "./homepage.scss";
import "./responsive.scss";


const Services = () => {
  return (
    <div>
        {/* navbar  */}
      <Navbar />
      {/* service section 1 */}
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 sc2-1">
            {/* <div > */}
              <h3 className="ui-heading">UI/UX Designer</h3>
            {/* </div> */}
            <div >
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
                <button type="button" className="btn learnMore-button p-2">
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

        {/* service section 2 */}
        <div className="container">
        <div className="row align-items-center">
        <div className="col-lg-6 sc2-2">
            <img src={flat2} className="img-fluid" alt="main " />
          </div>
          <div className="col-lg-6 sc2-1">
            {/* <div > */}
              <h3 className="ui-heading">Web Development</h3>
            {/* </div> */}
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
              <div className="text-end learnMore-container">
                <button type="button" className="btn learnMore-button p-2">
                 Learn More
                </button>
              </div>

            </div>
          </div>
         
        </div>
      </div>
         {/* service section 3 */}
         <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 sc2-1">
            {/* <div > */}
              <h3 className="ui-headings text-center">Mobile App Development</h3>
            {/* </div> */}
            <div >
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
                <button type="button" className="btn learnMore-button p-2">
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
    </div>
  );
};

export default Services;