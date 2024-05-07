import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/icon-style.css'



const LogIn = () => {
    const [logInFormData, setlogInFormData] = useState({
        email : '',
        password : ''
})


const storeToken = (token) => {
    console.log("Received token:", token); 
    if (token) {
        localStorage.setItem('token', token);
        console.log("Token stored in localStorage:", token); 
    } else {
        console.error("Error: Token is undefined or null");
    }
};

//****** */ cotrolled and uncontrolled error /* *****
    const handleSubmit = async (event) => {
        console.log("Hello from login from handleSubmit  ")
        try {
            event.preventDefault();
            const response = await axios.post('/api/v1/users/logIn', logInFormData)
            console.log(response)
           
            if (response.status ===200) {
                setlogInFormData(response.data.message)
                console.log("user data:",response.data.user)
                const logInToken=response.data.accessToken
                console.log("token from login:",logInToken)
               storeToken(logInToken)
            }
            else{

                console.error("Login failed. Status:", response.status);
                // Assuming response.data.message contains an error message
                setlogInFormData(response.data.message);
            }
           
           
        } catch (error) {
            console.log("Error during logIn", error)
        }
    }
    const handleButtonClick = (event) => {
        console.log("Hello from login from handleButtonClick ")
        handleSubmit(event)
        
    }
    const handleChange = (event) => {
        console.log("Name", event.target.value)
        return setlogInFormData({ ...logInFormData, [event.target.name]: event.target.value })
    }
    return (
        <>
            <div >
                <form action="/api/v1/users/logIn" method="post" className='container border border-success-subtle rounded mx-2 my-3'>
                    <img src="/login-icon.jpg" alt="login-icon" className='d-flex img-fluid logIn-Img'/>
                    <div className="input-group flex-nowrap my-3 ">
                        <span className="input-group-text" id="addon-wrapping">@</span>
                        <input type="email" onChange={handleChange} className="form-control" name='email' value={logInFormData.email || ''} placeholder="email" aria-label="email" aria-describedby="addon-wrapping" />
                    </div>
                    <div className="input-group flex-nowrap my-3 ">
                        <span className="input-group-text" id="addon-wrapping">@</span>
                        <input type="password" onChange={handleChange} className="form-control " name='password' value={logInFormData.password || ''} placeholder="password" aria-label="password" aria-describedby="addon-wrapping" />
                    </div>
                    <button onClick={handleButtonClick} className="btn btn-primary my-3 rounded" type="submit" >LogIn</button>
                    <Link to="/form/forgetPassword" className='text-decoration-underline d-flex' style={{
                        "position": "relative",
                        "left": "68px",
                        "color":"white"
                    }}>Forget Password?</Link>
                    <p className='secondary-text-emphasis f-color'>Create an account <Link to="/form/signIn" className='primary text-decoration-underline f-color'>SignIn</Link></p>
                </form>
            </div>
        </>
    );
};

export default LogIn;