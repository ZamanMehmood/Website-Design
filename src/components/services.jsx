import React from "react";
import Navbar from "./Navbar";
import flat1 from "../Assets/flat1.svg";
import flat2 from "../Assets/flat2.svg";
import flat3 from "../Assets/flat3.svg";
import flat4 from "../Assets/flat4.svg";
import flat5 from "../Assets/flat5.svg";
import flat6 from "../Assets/flat6.svg";
import flat7 from "../Assets/flat7.svg";

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
              <h3 className="ui-heading">UI/UX Designer</h3>
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
              <h3 className="ui-headings text-center">Mobile App Development</h3>
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
         {/* service section 4 */}
         <div className="container">
        <div className="row align-items-center">
        <div className="col-lg-6 sc2-2">
            <img src={flat3} className="img-fluid" alt="main " />
          </div>
          <div className="col-lg-6 sc2-1">
              <h3 className="ui-headings text-center">CRM & ERP Development</h3>
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
              <div className="text-end learnMore-containe">
                <button type="button" className="btn learnMore-button p-2">
                 Learn More
                </button>
              </div>

            </div>
          </div>
         
        </div>
      </div>
      {/* service section 5 */}
      <div className="container">
        <div className="row align-items-center">
       
          <div className="col-lg-6 sc2-1">
              <h3 className="ui-headings text-center">Cloud Computing</h3>
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
            <img src={flat4} className="img-fluid" alt="main " />
          </div>
         
        </div>
      </div>
        {/* service section 6 */}
        <div className="container">
        <div className="row align-items-center">
        <div className="col-lg-6 sc2-2">
            <img src={flat6} className="img-fluid" alt="main " />
          </div>
          <div className="col-lg-6 sc2-1">
              <h3 className="ui-headings text-center">SaaS Development</h3>
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
              <div className="text-end learnMore-containe">
                <button type="button" className="btn learnMore-button p-2">
                 Learn More
                </button>
              </div>

            </div>
          </div>
          
         
        </div>
      </div>
      
      {/* service section 8 */}
      <div className="container">
        <div className="row align-items-center">
        
          <div className="col-lg-6 sc2-1">
              <h3 className="ui-headings text-center">Payment Integration</h3>
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
            <img src={flat6} className="img-fluid" alt="main " />
          </div>
         
        </div>
      </div>
       {/* service section 9 */}
       <div className="container">
        <div className="row align-items-center">
        <div className="col-lg-6 sc2-2">
            <img src={flat7} className="img-fluid" alt="main " />
          </div>
          <div className="col-lg-6 sc2-1">
              <h3 className="ui-headings text-center">SaaS Development</h3>
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
              <div className="text-end learnMore-containe">
                <button type="button" className="btn learnMore-button p-2">
                 Learn More
                </button>
              </div>

            </div>
          </div>
         
         
        </div>
      </div>
    </div>
  );
};

export default Services;