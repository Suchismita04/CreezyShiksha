import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
import "../styles/Home.css"
import "../styles/style.css"
// import "../styles/Responsive.css"


const Home = () => {

const [isDisabled,setIsDisabled]=useState(false)
useEffect(()=>{

const accessToken=localStorage.getItem('token')
console.log("token from home:",accessToken)
  if (accessToken && accessToken !== 'undefined' && accessToken !== '') {
    setIsDisabled(true)
    
  }
},[])
console.log("is disabled:",isDisabled)

  return (
    <>
   <div className='home-wrapper'>


      <div className='container-fluid vw-100 vh-100   align-items-center justify-content-center m-0 p-0' >
        <div className='container w-100 d-flex align-items-center'>
          <div className="row w-100 h-100  align-items-center  m-0">
            <div className='col-lg-6 col-md-12 text-center text-lg-left'>
              <h1 className='d-flex my-3 f-color '>Hey there,</h1>
              <h2 className='d-flex my-2 animated-text f-color  '>Welcome to CreezyShiksha</h2>
              <NavLink to="/form/signIn" role='button ' className="btn my-4 btn-primary"  style={{ pointerEvents: isDisabled ? 'none' : 'auto' }}>{isDisabled?'Already Sign In':'Sign In'}</NavLink>
            </div>
            <div className='col-lg-6 col-md-12 text-center text-lg-right image'>
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
