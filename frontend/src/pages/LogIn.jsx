import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
const LogIn = () => {
    const [logInFormData,setlogInFormData]=useState([
        email='',
        passoward=''
    ])
    const handleChange=(event)=>{
       return setlogInFormData({...logInFormData,[event.target.name]:event.target.value})
    }
    const handleSubmit=(event)=>{
        event.preventDefult()
        try {
            const responce=axios.post('/api/v1/users/logIn',logInFormData)
            if (responce.status === 200) {
                setlogInFormData(responce.data.message)
            }
            else{
                setlogInFormData(responce.data.message)
            }
        } catch (error) {
            console.log("Error during logIn",error)
        }
    }
    const handleButtonClick=()=>{
        handleSubmit()
    }
    return (
        <>
            <div >
                <form action="/api/v1/users/logIn" method="post" className='container border border-success-subtle rounded mx-2 my-3'>
                    <button type="button" className="btn-close d-flex my-3 " aria-label="Close" style={{ "position": "relative", "left": "15rem" }}></button>
                    <img src="/public/login-icon.jpg" alt="login-icon" className='d-flex img-fluid' style={{"height": "13rem",
    "width": "16rem"}}/>
                    <div className="input-group flex-nowrap my-3 ">
                        <span className="input-group-text" id="addon-wrapping">@</span>
                        <input  type="email" onChange={handleChange} className="form-control" name='email' value={logInFormData.email} placeholder="Email" aria-label="Email" aria-describedby="addon-wrapping" />
                    </div>
                    <div className="input-group flex-nowrap my-3 ">
                        <span className="input-group-text" id="addon-wrapping">@</span>
                        <input type="password" onChange={handleChange} className="form-control " name='password' value={logInFormData.passoward} placeholder="password" aria-label="password" aria-describedby="addon-wrapping" />
                    </div>
                    <button onClick={handleButtonClick} className="btn btn-primary my-3 rounded" type="submit" value="LogIn"></button>
                    <Link to="/form/forgetPassword" className='text-decoration-underline d-flex' style={{
                        "position": "relative",
                        "left": "68px"
                    }}>Forget Password?</Link>
                    <p className='secondary-text-emphasis'>Create an account <Link to="/form/signIn" className='primary text-decoration-underline'>SignIn</Link></p>
                </form>
            </div>
        </>
    );
};

export default LogIn;