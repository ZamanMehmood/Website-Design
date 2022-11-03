import React from "react";
import Navbar from "./Navbar";
import Rectangle90 from "../Assets/caree-Assets/Rectangle90.svg";
import { Link } from "react-router-dom";
import "./homepage.scss";
import "./responsive.scss";

const Career = () => {
  return (
    <>
      <Navbar />

      <section>
        <div className="container-fluid ">
          <div className="row">
            <div className="col-lg-8 ">
              <img src={Rectangle90} alt="" className="img-fluid careebgImg" />
            </div>
            <div className="col-lg-4">
              <h2 className="sn1">
                <span className="work-heading">Work wi</span>th Us
              </h2>
              <p className="work-para">
                IF YOU APPROACH EVERY PROJECT WITH DRIVE AND WONDER AND REFUSE
                TO SETTLE UNTIL THE WORK IS AT ITS ABSOLUTE BEST THEN YOU MAY BE
                THE NEXT STELLAR ADDITION TO OUR ISOFT ROCKET TEAM.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-4 bgcareer">
        <div className="container">
          <h2 className="sn-5">
            <span className="sn-4">Interested In</span> Joining Us
          </h2>
          <p className="sn-3">
            Check out our current openings and apply to those that match your
            skills. If you dont see a match, you are still welcome to share your
            resume at
            <span className="career-email">careers@isoftstudios.com</span>. We
            continuously search our CV bank for new opportunities.
          </p>
          <h2 className="sn-7 fw-bold">Current Openings!</h2>
          <div className="f1-container fn-1">
            <h6>Senior ROR Developer</h6>
            <div className="d-flex">
              <p>minmum experience: 2 to 4 years</p>
              <div className="ms-auto">
                <Link to='/seniorRor-developer'>
                <button className="details-button">Details</button>
                </Link>
                <button className="apply-button">Apply More</button>
              </div>
            </div>
          </div>
          <div className="f1-container fn-1">
            <h6>Junior ROR Developer</h6>
            <div className="d-flex">
              <p>minimum experience: Fresh Graduate</p>
              <div className="ms-auto">
              <Link to='/juniorRor-developer'>
                <button className="details-button">Details</button>
                </Link>

                <button className="apply-button">Apply More</button>
              </div>
            </div>
          </div>
          <div className="f1-container fn-1">
            <h6>HR Intern</h6>
            <div className="d-flex">
              <p>minimum experience: Fresh Graduation</p>
              <div className="ms-auto">
              <Link to='/hr-intern'>
                <button className="details-button">Details</button>
                </Link>
                <button className="apply-button">Apply More</button>
              </div>
            </div>
          </div>
          <div className="f1-container fn-1">
            <h6>Project manager</h6>
            <div className="d-flex">
              <p>minimum experience: Fresh Graduation</p>
              <div className="ms-auto">
              <Link to='/project-manager'>
                <button className="details-button">Details</button>
                </Link>
                <button className="apply-button">Apply More</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Career;
