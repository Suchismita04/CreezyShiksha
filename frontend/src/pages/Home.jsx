import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
import "../styles/Animation.css"


const Home = (showForm) => {
  return (
    <>
      <div className='container' style={{ "position": "absolute", "left": "158px", "top": "120px" }}>

        <h1 className='d-flex my-3 '>Hey there,</h1>
        <h2 className='d-flex my-2 animated-text'>Welcome to CreezyShiksha</h2>
        <NavLink to="/form/signIn" role='button' className="btn btn-primary my-4" style={{ "position": "relative", "right": "500px" }} onClick={showForm}>Sign In</NavLink>

      </div>

    </>
  )
}
export default Home
