// src/components/Navbar.jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";


const Nav = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Logo</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-3">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Collections</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Self Assessment
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href='#'>videos</a>
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
