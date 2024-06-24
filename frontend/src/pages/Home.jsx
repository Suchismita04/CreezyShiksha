import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
import "../styles/Home.css"
import "../styles/style.css"


const Home = () => {
  return (
    <>
      <div className='container' style={{ "position": "absolute", "left": "158px", "top": "120px" }}>
        <div className='container py-4 py-md-5 px-4 px-md-3 text-body-secondary'>
          <div className="row">
            <div className='col-lg'>
              <h1 className='d-flex my-3 f-color '>Hey there,</h1>
              <h2 className='d-flex my-2 animated-text f-color '>Welcome to CreezyShiksha</h2>
              <NavLink to="/form/signIn" role='button ' className="btn my-4 btn-primary" >Sign In</NavLink>
            </div>
            <div className='col-lg image'>
              <img src="/HomeImg.png" alt="error" />
             
            </div>
          </div>

        </div>

      </div>

    </>
  )
}
export default Home
