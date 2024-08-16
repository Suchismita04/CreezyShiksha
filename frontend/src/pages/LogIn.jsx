import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/icon-style.css'




const LogIn = () => {
    const [logInFormData, setlogInFormData] = useState({
        email: '',
        password: ''
    })
    const navigate = useNavigate();
    const [validationError, setValidationError] = useState({})



    const storeToken = (token) => {
        // console.log("Received token:", token); 
        if (token) {
            localStorage.setItem('token', token);
            // console.log("Token stored in localStorage:", token); 
        } else {
            console.error("Error: Token is undefined or null");
        }
    };

    //****** */ cotrolled and uncontrolled error /* *****

    const validateInput = () => {
        const errors = {}
        console.log("Starting validation")
        //validation for email
        if (!logInFormData.email) {
            errors.email = "Email is required"
            console.log("Email is required")
        }
        else if (!/\S+@\S+\.\S+/.test(logInFormData.email)) {
            errors.email = "Invalid Email Address"
            console.log("Invalid Email Address")
        }

        //validation for password

        if (!logInFormData.password) {
            errors.password = "Password is required"
            console.log("Invalid Email Address")
        }
        else if (logInFormData.password.length < 6) {
            errors.password = "Password must be at least 6 characters"
            console.log("Password must be at least 6 characters")
        }
        setValidationError(errors)
        return Object.keys(errors).length === 0
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!validateInput()) {
            alert("Invalid email or password")
            console.log("invalid input from login ")
            return
        }
        try {

            const response = await axios.post('/api/v1/users/logIn', logInFormData)
            // console.log("response from log in ui",response)

            if (response.status == 200) {
                setlogInFormData(response.data.message)
                // console.log("user data:",response.data.data.user)
                const logInToken = response.data.data.accessToken
                // console.log("access token from login:",logInToken)
                storeToken(logInToken)

            }
            else {

                console.error("Login failed. Status:", response.status);
                // Assuming response.data.message contains an error message
                setlogInFormData(response.data.message);
            }
            navigate('/')
            // notyf.success("You're logged in successfully")
            alert("You're logged in successfully !!!!")


        } catch (error) {
            console.log("Error during logIn", error)
        }
    }
    // const handleButtonClick = (event) => {

    //     handleSubmit(event)

    // }
    const handleChange = (event) => {
        // console.log("Name", event.target.value)
        return setlogInFormData({ ...logInFormData, [event.target.name]: event.target.value })
    }
    return (
        <>
            <div >
                <form action="/api/v1/users/logIn" onSubmit={handleSubmit} method="post" className='container border border-success-subtle rounded mx-2 my-3'>
                    <img src="/login-icon.jpg" alt="login-icon" className='d-flex img-fluid logIn-Img' />
                    <div className="input-group flex-nowrap my-3 ">
                        <span className="input-group-text" id="addon-wrapping">@</span>
                        <input type="email" onChange={handleChange} className="form-control" name='email' value={logInFormData.email || ''} placeholder="email" aria-label="email" aria-describedby="addon-wrapping" />
                    </div>
                    {validationError.email && <div className="text-light">{validationError.email}</div>}
                    <div className="input-group flex-nowrap my-3 ">
                        <span className="input-group-text" id="addon-wrapping">@</span>
                        <input type="password" onChange={handleChange} className="form-control" name='password' value={logInFormData.password || ''} placeholder="password" aria-label="password" aria-describedby="addon-wrapping" />
                    </div>
                    {validationError.password && <div className="text-light">{validationError.password}</div>}
                    <button  className="btn btn-primary my-3 rounded" type="submit" >LogIn</button>
                    <Link to="/form/forgetPassword" className='text-decoration-underline d-flex' style={{
                        "position": "relative",
                        "left": "68px",
                        "color": "white"
                    }}>Forget Password?</Link>
                    <p className='secondary-text-emphasis f-color'>Create an account <Link to="/form/signIn" className='primary text-decoration-underline f-color'>SignIn</Link></p>
                </form>
            </div>
        </>
    );
};

export default LogIn;