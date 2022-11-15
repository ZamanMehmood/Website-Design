import React from 'react';
import Navbar from './Navbar';
import "./homepage.scss";
import "./responsive.scss";
import icon1 from "../Assets/caree-Assets/icon1.png";
import icon2 from "../Assets/caree-Assets/icon2.png";
import icon3 from "../Assets/caree-Assets/icon3.png";
import icon4 from "../Assets/caree-Assets/icon4.png";
import icon5 from "../Assets/caree-Assets/icon5.png";
import icon6 from "../Assets/caree-Assets/icon6.png";
import icon7 from "../Assets/caree-Assets/icon7.png";
import icon8 from "../Assets/caree-Assets/icon8.png";

const ProjectManager = () => {
    return ( 
        <div>
            <Navbar />
            <div className="container">
        <h2 className="ror-junior">
          <span className="rails-title">
            Project Manager
          </span>
        </h2>
        <p>
          We immediately require ROR Software Engineers graduates from reputable
          universities and have good
          <br /> communication skills.
        </p>
        <span className="fw-bold">Job Details</span>

        <div className="job-details">
          <div className="pt-3">
            <span>Job Title</span>
            <span className="job-position">Junior RoR Developer</span>
          </div>
        </div>
        <div className="job-details">
          <div className="pt-3">
            <span>Location</span>
            <span className="job-position">Lahore</span>
          </div>
        </div>
        <div className="job-details">
          <div className="pt-3">
            <span>Qualification</span>
            <span className="qualification-detail">
              BS(CS,IT,SE)or relevant degree
            </span>
          </div>
        </div>
        <div className="job-details">
          <div className="pt-3">
            <span>Experience</span>
            <span className="experience-details">2 to 4 years</span>
          </div>
        </div>
        <div className="job-details">
          <div className="pt-3">
            <span>Job Type</span>
            <span className="job-position">On-Site</span>
          </div>
        </div>
        <div className="job-details">
          <div className="pt-3">
            <span>Total Openings</span>
            <span className="open-positions">1 or 2</span>
          </div>
        </div>
      </div>
      <div className="container mt-4">
        <span className="fw-bold">Job Description</span>
        <div className="description-details">
          <p>The required experience range is 2 to 5 years.</p>
          <p>
            Experience and outstanding knowledge of the Ruby on Rails framework
          </p>
          <p>Should be experienced with the Agile Development process.</p>
          <p>Must have a strong foundation in REST API's and XML</p>
          <p>Familiar with web services</p>
          <p>Used well-known ruby gems and plug-ins</p>
          <p>Experience in agile- test-driven development process</p>
          <p>Exceptional MySQL skills</p>
          <p>
            Expert in Angular, HTML, CSS, JavaScript (JQuery), and DIV based
            layouts
          </p>
          <p>Experience with React.js would be a huge plus.</p>
        </div>

        <h6 className="fw-bold">Perks & Benefits</h6>
        <p>
          We offer market-competitive salaries along with lucrative benefits
          like
        </p>
      </div>

      <div className="container">
        <div className="row ms-3">
          <div className="col-lg-3 ">
            <div className="main-boder">
              <img src={icon1} alt="" className="img-fluid"  />
              <h6>Paid Time Offs</h6>
              <p>
                Amet minim mollit non <br /> deseru
              </p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="main-boder">
              <img src={icon2} alt="" className="img-fluid" />
              <h6>Paid Time Offs</h6>
              <p>
                Amet minim mollit non <br /> deseru
              </p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="main-boder">
              <img src={icon3} alt="" className="img-fluid" />
              <h6>Paid Time Offs</h6>
              <p>
                Amet minim mollit non <br /> deseru
              </p>
            </div>{" "}
          </div>
          <div className="col-lg-3">
            <div className="main-boder">
              <img src={icon4} alt="" className="img-fluid" />
              <h6>Paid Time Offs</h6>
              <p>
                Amet minim mollit non <br /> deseru
              </p>
            </div>
          </div>
        </div>
        <div className="row mt-3 ms-3">
          <div className="col-lg-3">
          <div className="main-boder">
              <img src={icon5} alt="" className="img-fluid" />
              <h6>Paid Time Offs</h6>
              <p>
                Amet minim mollit non <br /> deseru
              </p>
            </div>
          </div>
          <div className="col-lg-3">
          <div className="main-boder">
              <img src={icon6} alt="" className="img-fluid" />
              <h6>Paid Time Offs</h6>
              <p>
                Amet minim mollit non <br /> deseru
              </p>
            </div>
          </div>
          <div className="col-lg-3">
          <div className="main-boder">
              <img src={icon7} alt="" className="img-fluid" />
              <h6>Paid Time Offs</h6>
              <p>
                Amet minim mollit non <br /> deseru
              </p>
            </div>
          </div>
          <div className="col-lg-3">
          <div className="main-boder">
              <img src={icon8} alt="" className="img-fluid" />
              <h6>Paid Time Offs</h6>
              <p>
                Amet minim mollit non <br /> deseru
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="work1">
        <h2>If you are looking for a  fun place to work, dont wait and apply right away</h2>
      </div>

          <div className=" container d-flex my-4">
          <button type="button" className="b-positions text-start">
              SCHEDULE A MEETING
            </button>
            <button type="button" className="btn btn-danger text-end ms-auto">Apply Now</button>
          </div>
    

        </div>
     );
}
 
export default ProjectManager;