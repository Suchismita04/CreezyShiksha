// src/components/Navbar.jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser} from '@fortawesome/free-solid-svg-icons';
import "../styles/style.css";
import { Link } from 'react-router-dom';

import "../styles/style.css"

const Nav = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    
    {/* <img src="/mainLogo.png" alt="error"  className="navbar-brand"  /> */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse nav-tabs" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-3">
        <li className="nav-item">
          <Link className="nav-link  f-color" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link f-color" to="/collections">Collections</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link f-color" to="/selfAssessment">
            Self Assessment
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link f-color" to='/aboutUs'>About Us</Link>
        </li>
      </ul>
      <ul>

      
    <Link className=" f-color" to='/myAccount'><FontAwesomeIcon className='large-icon' icon={faCircleUser} /></Link> 
     

      </ul>
    
     
    </div>
  </div>
</nav>
     
  


    </>
  );
};

export default Nav;
