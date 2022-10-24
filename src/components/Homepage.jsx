import React from 'react';
import './homepage.scss';
import ISOFTSTUDIO from '../Assets/ISOFTSTUDIOS1.png';
import preview1 from '../Assets/preview1.png';

  const Homepage = () => {
    return ( 
        <div>
          {/* navbar section  */}
        <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
            <a className="navbar-brand active" href="">
                <img src={ISOFTSTUDIO} alt="logo" className="img-fluid isoft-image"  />
                </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto ms-auto mb-2 mb-lg-0">
                    
                    <li className=" nav-item dropdown">
                        <a className="nav-link dropdown-toggle p-2" href="#" id="navbarDropdowns" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            Services </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdowns">
                            <li><a className="dropdown-item" href="#">Web Development</a></li>
                            <li><a className="dropdown-item" href="#">Cloud Computing</a></li>
                            <li><a className="dropdown-item" href="#">QA</a></li>
                            <li><a className="dropdown-item" href="#">Mobile App Development</a></li>
                            <li><a className="dropdown-item" href="#">Payment Integration</a></li>
                            <li><a className="dropdown-item" href="#">E-Commerce Development</a></li>
                            <li><a className="dropdown-item" href="#">UI/UX Design</a></li>
                            <li><a className="dropdown-item" href="#">Saas Development</a></li>
                        </ul>
                    </li>
                    
                    <li className="nav-item">
                        <a className="nav-link p-2" href="#">About</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link p-2' href="">Portfolio</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link p-2' href="">Career</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link p-2" href="#">Contact</a>
                    </li>

                </ul>
                    <button type="button" className="btn btn-outline-danger text-dark">SCHEDULE A MEETING</button>
            </div>
        </div>
         </nav>
         {/* section #1 */}
         <section>
        <div className="first-section container-fluid mt-4">
            <div className="row">
                <div className="col-lg-6 mt-5">
                    <img src={preview1} className="img-fluid image-prevew" />
                </div>
                <div className="col-lg-6">
                    <div className='creative-container'>
                    <h3 className="fw-bold text-light creative-heading"> We are a Creative <br />
                     <span className='agency-heading'>Agency</span></h3>
                    </div>
                    <p className="text-light creative-headings">We create magnificent products through Technology</p>

                    <button type="button" className="btn btn-outline-dark text-dark getQuote p-2">Get a Quote</button>
                </div>
            </div>
        </div>
    </section>
    </div>
     );
    }
 
export default Homepage;