// src/components/Navbar.jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/style.css";
import { Link } from 'react-router-dom';


const Nav = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Logo</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse nav-tabs" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-3">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="#">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">Collections</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">
            Self Assessment
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='#'>videos</Link>
        </li>
      </ul>
      {/* <div className="d-flex" >
      <a className="nav-link rounded-circle zindex-fixed bg-success" href='#'></a>
      </div> */}
    </div>
  </div>
</nav>
     
  


    </>
  );
};

export default Nav;
