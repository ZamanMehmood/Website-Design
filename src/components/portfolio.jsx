import React from "react";
import Navbar from "./Navbar";
import "./homepage.scss";
import "./responsive.scss";
import groupp1 from "../Assets/portfolio-Assets/groupp1.svg";
import groupp2 from "../Assets/portfolio-Assets/groupp2.svg";
import groupp3 from "../Assets/portfolio-Assets/groupp3.svg";
import groupp4 from "../Assets/portfolio-Assets/groupp4.svg";
import groupp5 from "../Assets/portfolio-Assets/groupp5.svg";
import groupp6 from "../Assets/portfolio-Assets/groupp6.svg";
import groupp7 from "../Assets/portfolio-Assets/groupp7.svg";
import groupp8 from "../Assets/portfolio-Assets/groupp8.svg";
import groupp9 from "../Assets/portfolio-Assets/groupp9.svg";
import groupp10 from "../Assets/portfolio-Assets/groupp10.svg";
import groupp11 from "../Assets/portfolio-Assets/groupp11.svg";
import groupp12 from "../Assets/portfolio-Assets/groupp12.svg";
import groupp13 from "../Assets/portfolio-Assets/groupp13.svg";
import groupp14 from "../Assets/portfolio-Assets/groupp14.svg";
import groupp15 from "../Assets/portfolio-Assets/groupp15.svg";
import groupp16 from "../Assets/portfolio-Assets/groupp16.svg";
import Rec from "../Assets/portfolio-Assets/Rec.png";
import Group42 from "../Assets/portfolio-Assets/Group42.svg";
import Group44 from "../Assets/portfolio-Assets/Group44.svg";
import Group152 from "../Assets/portfolio-Assets/Group152.svg";
import html5 from "../Assets/portfolio-Assets/html5.svg";
import php from "../Assets/portfolio-Assets/php.svg";
import bootstrap from "../Assets/portfolio-Assets/bootstrap.svg";
import diamond from "../Assets/portfolio-Assets/diamond.svg";
import twill from "../Assets/portfolio-Assets/twill.png"

const Portfolio = () => {
  return (
    <div>
      <Navbar />
      <div className="container mt-3">
        <div className="row">
          <div className="col-lg-6 sc2-1">
            <h2 className="protfolio">
              <span className="portfolio-heading">Portfolio</span>
            </h2>
            <div className="mt-4">
              <h1 className="scs1">Lets Create Something Owesome Togather!</h1>
              <button
                type="button"
                className="shadowl-heading mt-5 meeting-button"
              >
                SCHEDULE A MEETING
              </button>
            </div>
          </div>
          <div className="col-lg-6 sc2-2">
            <img src={groupp1} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
      {/* section 2 portfolio  */}
      <section className="bg-1">
        <div className="container mt-3">
          <div className="row">
            <div className="col-lg-6 sc2-2">
              <img src={groupp2} alt="" className="img-fluid mt-5 " />
            </div>
            <div className="col-lg-6 sc2-1">
              <div className="mt-5">
                <img src={Rec} alt="" className="img-fluid m-2" />
                <img src={Rec} alt="" className="img-fluid m-2" />
                <img src={Rec} alt="" className="img-fluid m-2" />
              </div>
              <h3>technology</h3>
              <img src={Group42} alt="" className="img-fluid p-2" />
              <img src={Group44} alt="" className="img-fluid p-2" />
              <img src={Group152} alt="" className="img-fluid p-1" />

              <div>
                <button className="projects-button">View project</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section 3 portfolio  */}
      <section className="bg-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 sc2-1">
              <div className="mt-5">
                <h2>Short term Rental</h2>
                <img src={Rec} alt="" className="img-fluid m-2" />
                <img src={Rec} alt="" className="img-fluid m-2" />
                <img src={Rec} alt="" className="img-fluid m-2" />
              </div>
              <h3>technology</h3>
              <img src={html5} alt="" className="img-fluid p-2" />
              <img src={php} alt="" className="img-fluid p-2" />
              <img src={bootstrap} alt="" className="img-fluid p-2" />
              <img src={Group152} alt="" className="img-fluid p-1" />

              <div>
                <button className="projects-button1">View project</button>
              </div>
            </div>
            <div className="col-lg-6 sc2-2">
              <img src={groupp3} alt="" className="img-fluid mt-5 " />
            </div>
          </div>
        </div>
      </section>
      {/* section 4 portfolio  */}
      <section className="bg-3">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 sc2-2">
              <img src={groupp4} alt="" className="img-fluid mt-5 " />
            </div>
            <div className="col-lg-6 sc2-1">
              <div className="mt-5">
                <h2>One Stream</h2>
                <img src={Rec} alt="" className="img-fluid m-2" />
                <img src={Rec} alt="" className="img-fluid m-2" />
                <img src={Rec} alt="" className="img-fluid m-2" />
              </div>
              <h3>Technology</h3>
              <img src={Group44} alt="" className="img-fluid p-2" />
              <img src={Group152} alt="" className="img-fluid p-1" />
              <img src={bootstrap} alt="" className="img-fluid p-2" />
              <div>
                <button className="projects-button">View project</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section 5 portfolio  */}
      <section className="bg-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 sc2-1">
              <div className="mt-5">
                <h2>Look out door</h2>
                <img src={Rec} alt="" className="img-fluid m-2" />
                <img src={Rec} alt="" className="img-fluid m-2" />
                <img src={Rec} alt="" className="img-fluid m-2" />
              </div>
              <h3>technology</h3>
              <img src={diamond} alt="" className="img-fluid p-2" />
              <img src={bootstrap} alt="" className="img-fluid p-2" />
              <img src={Group152} alt="" className="img-fluid p-1" />

              <div>
                <button className="projects-button1">View project</button>
              </div>
            </div>
            <div className="col-lg-6 sc2-2">
              <img src={groupp5} alt="" className="img-fluid mt-5 " />
            </div>
          </div>
        </div>
      </section>
      {/* section 6 portfolio  */}
      <section className="bg-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 sc2-2">
              <img src={groupp6} alt="" className="img-fluid mt-5 " />
            </div>
            <div className="col-lg-6 sc2-1">
              <div className="mt-5">
                <h2>Firematic</h2>
                <img src={Rec} alt="" className="img-fluid m-2" />
                <img src={Rec} alt="" className="img-fluid m-2" />
                <img src={Rec} alt="" className="img-fluid m-2" />
              </div>
              <h3>Technology</h3>
              <img src={html5} alt="" className="img-fluid p-2" />
              <img src={php} alt="" className="img-fluid p-2" />
              <img src={bootstrap} alt="" className="img-fluid p-2" />
              <img src={Group152} alt="" className="img-fluid p-1" />
              <div>
                <button className="projects-button">View project</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section 7 portfolio  */}
      <section className="bg-6">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 sc2-1">
              <div className="mt-5">
                <h2>Govila</h2>
                <img src={Rec} alt="" className="img-fluid m-2" />
                <img src={Rec} alt="" className="img-fluid m-2" />
                <img src={Rec} alt="" className="img-fluid m-2" />
              </div>
              <h3>technology</h3>
              <img src={diamond} alt="" className="img-fluid p-2" />
              <img src={bootstrap} alt="" className="img-fluid p-2" />
              <img src={Group152} alt="" className="img-fluid p-1" />

              <div>
                <button className="projects-button1">View project</button>
              </div>
            </div>
            <div className="col-lg-6 sc2-2">
              <img src={groupp7} alt="" className="img-fluid mt-5 " />
            </div>
          </div>
        </div>
      </section>
         {/* section 8 portfolio  */}
         <section className="bg-7">
        <div className="container">
          <div className="row">
            
            <div className="col-lg-6 sc2-2">
              <img src={groupp8} alt="" className="img-fluid mt-5 " />
            </div>
            <div className="col-lg-6 sc2-1">
              <div className="mt-5">
                <h2>Store Front</h2>
                <img src={Rec} alt="" className="img-fluid m-2" />
                <img src={Rec} alt="" className="img-fluid m-2" />
                <img src={Rec} alt="" className="img-fluid m-2" />
              </div>
              <h3>Technology</h3>
              <img src={twill} alt="" className="img-fluid p-2" />
              <img src={bootstrap} alt="" className="img-fluid p-2" />
              <img src={Group152} alt="" className="img-fluid p-1" />
              <div>
                <button className="projects-button">View project</button>
              </div>
            </div>
          </div>
        </div>
      </section>
        {/* section 9 portfolio  */}
        <section className="bg-9">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 sc2-1">
              <div className="mt-5">
                <h2>Case Logger</h2>
                <img src={Rec} alt="" className="img-fluid m-2" />
                <img src={Rec} alt="" className="img-fluid m-2" />
                <img src={Rec} alt="" className="img-fluid m-2" />
              </div>
              <h3>technology</h3>
              <img src={diamond} alt="" className="img-fluid p-2" />
              <img src={bootstrap} alt="" className="img-fluid p-2" />
              <img src={Group152} alt="" className="img-fluid p-1" />

              <div>
                <button className="projects-button1">View project</button>
              </div>
            </div>
            <div className="col-lg-6 sc2-2">
              <img src={groupp9} alt="" className="img-fluid mt-5 " />
            </div>
          </div>
        </div>
      </section>
       {/* section 10 portfolio  */}
       <section className="bg-10">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 sc2-2">
              <img src={groupp10} alt="" className="img-fluid mt-5 " />
            </div>
            <div className="col-lg-6 sc2-1">
              <div className="mt-5">
                <h2>Guide Pointer</h2>
                <img src={Rec} alt="" className="img-fluid m-2" />
                <img src={Rec} alt="" className="img-fluid m-2" />
                <img src={Rec} alt="" className="img-fluid m-2" />
              </div>
              <h3>Technology</h3>
              <img src={twill} alt="" className="img-fluid p-2" />
              <img src={bootstrap} alt="" className="img-fluid p-2" />
              <img src={Group152} alt="" className="img-fluid p-1" />
              <div>
                <button className="projects-button">View project</button>
              </div>
            </div>
          </div>
        </div>
      </section>
       {/* section 11 portfolio  */}
       <section className="bg-11">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 sc2-1">
              <div className="mt-5">
                <h2>Kenmore</h2>
                <img src={Rec} alt="" className="img-fluid m-2" />
                <img src={Rec} alt="" className="img-fluid m-2" />
                <img src={Rec} alt="" className="img-fluid m-2" />
              </div>
              <h3>technology</h3>
              <img src={diamond} alt="" className="img-fluid p-2" />
              <img src={bootstrap} alt="" className="img-fluid p-2" />
              <img src={Group152} alt="" className="img-fluid p-1" />
              <div>
                <button className="projects-button1">View project</button>
              </div>
            </div>
            <div className="col-lg-6 sc2-2">
              <img src={groupp11} alt="" className="img-fluid mt-5 " />
            </div>
          </div>
        </div>
      </section>
        {/* section 12 portfolio  */}
        <section className="bg-12">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 sc2-2">
              <img src={groupp12} alt="" className="img-fluid mt-5 " />
            </div>
            <div className="col-lg-6 sc2-1">
              <div className="mt-5">
                <h2>Simple Space</h2>
                <img src={Rec} alt="" className="img-fluid m-2" />
                <img src={Rec} alt="" className="img-fluid m-2" />
                <img src={Rec} alt="" className="img-fluid m-2" />
              </div>
              <h3>Technology</h3>
              <img src={twill} alt="" className="img-fluid p-2" />
              <img src={bootstrap} alt="" className="img-fluid p-2" />
              <img src={Group152} alt="" className="img-fluid p-1" />
              <div>
                <button className="projects-button">View project</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section 13 portfolio  */}
      <section className="bg-13">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 sc2-1">
              <div className="mt-5">
                <h2>Your Mechanic</h2>
                <img src={Rec} alt="" className="img-fluid m-2" />
                <img src={Rec} alt="" className="img-fluid m-2" />
                <img src={Rec} alt="" className="img-fluid m-2" />
              </div>
              <h3>technology</h3>
              <img src={twill} alt="" className="img-fluid p-2" />
              <img src={Group42} alt="" className="img-fluid p-2" />
              <img src={Group152} alt="" className="img-fluid p-1" />
              <img src={bootstrap} alt="" className="img-fluid p-2" />
              <div>
                <button className="projects-button1">View project</button>
              </div>
            </div>
            <div className="col-lg-6 sc2-2">
              <img src={groupp13} alt="" className="img-fluid mt-5 " />
            </div>
          </div>
        </div>
      </section>
      {/* section 14 portfolio  */}
      <section className="bg-14">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 sc2-2">
              <img src={groupp14} alt="" className="img-fluid mt-5 " />
            </div>
            <div className="col-lg-6 sc2-1">
              <div className="mt-5">
                <h2>ParkPnp</h2>
                <img src={Rec} alt="" className="img-fluid m-2" />
                <img src={Rec} alt="" className="img-fluid m-2" />
                <img src={Rec} alt="" className="img-fluid m-2" />
              </div>
              <h3>Technology</h3>
              <img src={twill} alt="" className="img-fluid p-2" />
              <img src={bootstrap} alt="" className="img-fluid p-2" />
              <img src={Group152} alt="" className="img-fluid p-1" />
              <div>
                <button className="projects-button">View project</button>
              </div>
            </div>
          </div>
        </div>
      </section>
        {/* section 15 portfolio  */}
        <section className="bg-15">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 sc2-1">
              <div className="mt-5">
                <h2>Srvcly</h2>
                <img src={Rec} alt="" className="img-fluid m-2" />
                <img src={Rec} alt="" className="img-fluid m-2" />
                <img src={Rec} alt="" className="img-fluid m-2" />
              </div>
              <h3>technology</h3>
              <img src={twill} alt="" className="img-fluid p-2" />
              <img src={bootstrap} alt="" className="img-fluid p-2" />
              <div>
                <button className="projects-button1">View project</button>
              </div>
            </div>
            <div className="col-lg-6 sc2-2">
              <img src={groupp15} alt="" className="img-fluid mt-5 " />
            </div>
          </div>
        </div>
      </section>
         {/* section 16 portfolio  */}
         <section className="bg-16">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 sc2-2">
              <img src={groupp16} alt="" className="img-fluid mt-5 " />
            </div>
            <div className="col-lg-6 sc2-1">
              <div className="mt-5">
                <h2>ParkPnp</h2>
                <img src={Rec} alt="" className="img-fluid m-2" />
                <img src={Rec} alt="" className="img-fluid m-2" />
                <img src={Rec} alt="" className="img-fluid m-2" />
              </div>
              <h3>Technology</h3>
              <img src={twill} alt="" className="img-fluid p-2" />
              <img src={bootstrap} alt="" className="img-fluid p-2" />
              <img src={Group152} alt="" className="img-fluid p-1" />
              <div>
                <button className="projects-button">View project</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
