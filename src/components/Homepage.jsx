import React from 'react';
import './homepage.scss';
import ISOFTSTUDIO from '../Assets/ISOFTSTUDIOS1.png'

  const Homepage = () => {
    return ( 
        <div>
        <nav className="navbar navbar-expand-lg navbar-success" style={{background: "#ffffff", height: "80px" }}>
        <div className="container-fluid">
            <a className="navbar-brand active" href="">
                <img src={ISOFTSTUDIO} alt="logo" className="img-fluid" width="180" height="60" />
                </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto ms-auto mb-2 mb-lg-0">
                    <li className=" nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            Company </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" href="#">Web Development</a></li>
                            <li><a className="dropdown-item" href="#">Cloud Computing</a></li>
                            <li><a className="dropdown-item" href="#">Quality Assurance</a></li>
                            <li><a className="dropdown-item" href="#">Mobile App Development</a></li>
                            <li><a className="dropdown-item" href="#">Payment Integration</a></li>
                            <li><a className="dropdown-item" href="#">E-Commerce Development</a></li>
                            <li><a className="dropdown-item" href="#">UI/UX Design</a></li>
                            <li><a className="dropdown-item" href="#">Saas Development</a></li>
                        </ul>
                    </li>
                    <li className=" nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdowns" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            Services </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdowns">
                            <li><a className="dropdown-item" href="#">Web Development</a></li>
                            <li><a className="dropdown-item" href="#">Cloud Computing</a></li>
                            <li><a className="dropdown-item" href="#">Quality Assurance</a></li>
                            <li><a className="dropdown-item" href="#">Mobile App Development</a></li>
                            <li><a className="dropdown-item" href="#">Payment Integration</a></li>
                            <li><a className="dropdown-item" href="#">E-Commerce Development</a></li>
                            <li><a className="dropdown-item" href="#">UI/UX Design</a></li>
                            <li><a className="dropdown-item" href="#">Saas Development</a></li>
                        </ul>
                    </li>
                    
                    <li className="nav-item">
                        <a className="nav-link" href="#">Career</a>
                    </li>
                    <li className=" nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="careersDropdown" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            Services </a>
                        <ul className="dropdown-menu" aria-labelledby="careersDropdown">
                            <li><a className="dropdown-item" href="#">Web Development</a></li>
                            <li><a className="dropdown-item" href="#">Cloud Computing</a></li>
                            <li><a className="dropdown-item" href="#">Quality Assurance</a></li>
                            <li><a className="dropdown-item" href="#">Mobile App Development</a></li>
                            <li><a className="dropdown-item" href="#">Payment Integration</a></li>
                            <li><a className="dropdown-item" href="#">E-Commerce Development</a></li>
                            <li><a className="dropdown-item" href="#">UI/UX Design</a></li>
                            <li><a className="dropdown-item" href="#">Saas Development</a></li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Contact</a>
                    </li>

                </ul>
                    <button type="button" className="btn btn-outline-danger text-dark">SCHEDULE A MEETING</button>
            </div>
        </div>
    </nav>
    </div>
     );
    }
 
export default Homepage;