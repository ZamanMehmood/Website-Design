// import React from 'react';
// import ISOFTSTUDIO from "../Assets/ISOFTSTUDIOS1.png";
// import { Link } from 'react-router-dom';
// import "./homepage.scss";

// const Navbar = () => {
//     return (
//         <div>
//              {/* navbar section  */}
//       <nav className="navbar navbar-expand-lg ">
//         <div className="container-fluid">
//           <a className="navbar-brand active">
//             <Link to='/'>
//             <img
//               src={ISOFTSTUDIO}
//               alt="Image"
//               className="img-fluid isoft-image"
//             />
//             </Link>
//           </a>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav me-auto ms-auto mb-2 mb-lg-0">
//               <li className=" nav-item dropdown">
//                 <a
//                   className="nav-link dropdown-toggle p-2"
//                   href="#"
//                   id="navbarDropdowns"
//                   role="button"
//                   data-bs-toggle="dropdown"
//                   aria-expanded="false"
//                 >
//                   Services
//                 </a>
//                 <ul className="dropdown-menu" aria-labelledby="navbarDropdowns">
//                   <li>
//                     <a className="dropdown-item" href="#">
//                       Web Development
//                     </a>
//                   </li>
//                   <li>
//                     <a className="dropdown-item" href="#">
//                       Cloud Computing
//                     </a>
//                   </li>
//                   <li>
//                     <a className="dropdown-item" href="#">
//                       QA
//                     </a>
//                   </li>
//                   <li>
//                     <a className="dropdown-item" href="#">
//                       Mobile App Development
//                     </a>
//                   </li>
//                   <li>
//                     <a className="dropdown-item" href="#">
//                       Payment Integration
//                     </a>
//                   </li>
//                   <li>
//                     <a className="dropdown-item" href="#">
//                       E-Commerce Development
//                     </a>
//                   </li>
//                   <li>
//                     <a className="dropdown-item" href="#">
//                       UI/UX Design
//                     </a>
//                   </li>
//                   <li>
//                     <a className="dropdown-item" href="#">
//                       Saas Development
//                     </a>
//                   </li>
//                 </ul>
//               </li>

//               <li className="nav-item">
//                 <a className="nav-link p-2" href="#">
//                   About
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <Link to="/portfolio" className="nav-link p-2">
//                   Portfolio
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link p-2" href="">
//                   Career
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link p-2" href="#">
//                   Contact
//                 </a>
//               </li>
//             </ul>
//             {/* <button type="button" className="btn btn-outline-danger text-dark ">
//               SCHEDULE A MEETING
//             </button> */}
//             <button type="button" className="shadowl-heading">
//               SCHEDULE A MEETING
//             </button>
//           </div>
//         </div>
//       </nav>
//         </div>
//      );
// }

// export default Navbar;

import React from "react";
import ISOFTSTUDIO from "../Assets/ISOFTSTUDIOS1.png";
import { Link } from "react-router-dom";
import "./homepage.scss";

const Navbar = () => {
  return (
    <div>
      {/* navbar section  */}
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <a className="navbar-brand active">
            <Link to="/">
              <img
                src={ISOFTSTUDIO}
                alt="Image"
                className="img-fluid isoft-image"
              />
            </Link>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto ms-auto mb-2 mb-lg-0">
              <li className=" nav-item dropdown">
                <div className="btn-group">
                  <li className="nav-item">
                <Link to="/services" className="nav-link p-2">
                  Services
                </Link>
              </li>
                  <li
                    className=" dropdown-toggle dropdown-toggle-split"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    data-bs-reference="parent"
                  >
                    <span className="visually-hidden">Toggle Dropdown</span>
                  </li>
                  
                  <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Web Development
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Cloud Computing
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      QA
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Mobile App Development
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Payment Integration
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      E-Commerce Development
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      UI/UX Design
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Saas Development
                    </a>
                  </li>
                </ul>
                </div>
                
              </li>

              {/* <li className="nav-item">
                <a className="nav-link p-2" href="#">
                  About
                </a>
              </li> */}
              <li className="nav-item">
                <Link to="/about" className="nav-link p-2">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/portfolio" className="nav-link p-2">
                  Portfolio
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/career" className="nav-link p-2">
                  Career
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link p-2">
                  Contact
                </Link>
              </li>
            </ul>
         
            <button type="button" className="shadowl-heading">
              SCHEDULE A MEETING
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
