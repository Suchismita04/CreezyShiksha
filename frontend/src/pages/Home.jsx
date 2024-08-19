import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
import "../styles/Home.css"
import "../styles/style.css"


const Home = () => {
  return (
    <>
   <div className='home-wrapper'>


      <div className='container-fluid vw-100 vh-100  d-flex  align-items-center justify-content-center m-0 p-0' >
        <div className='container w-100 d-flex align-items-center'>
          <div className="row w-100 h-100  align-items-center  m-0">
            <div className='col-lg text-center text-lg-left'>
              <h1 className='d-flex my-3 f-color '>Hey there,</h1>
              <h2 className='d-flex my-2 animated-text f-color '>Welcome to CreezyShiksha</h2>
              <NavLink to="/form/signIn" role='button ' className="btn my-4 btn-primary" >Sign In</NavLink>
            </div>
            <div className='col-lg image text-center text-lg-right'>
              <img src="/HomeImg.png" alt="error" className='img-fluid'/>
             
            </div>
          </div>

        </div>

      </div>
      </div>

    </>
  )
}
export default Home
