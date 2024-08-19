import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/icon-style.css'
const ForgetPassword = () => {
    const [forgetPasswordData, setforgetPasswordData] = useState({
        email: '',
        newPassword: ''
    })
    const navigate=useNavigate()
    const [validationError, setValidationError] = useState({})
    const validateInput = () => {
        const errors = {}
        console.log("Starting validation")
        //validation for email
        if (!forgetPasswordData.email) {
            errors.email = "Email is required"
            console.log("Email is required")
        }
        else if (!/\S+@\S+\.\S+/.test(forgetPasswordData.email)) {
            errors.email = "Invalid Email Address"
            console.log("Invalid Email Address")
        }

        //validation for password

        if (!forgetPasswordData.newPassword) {
            errors.newPassword = "Password is required"
            console.log("Invalid Email Address")
        }
        else if (forgetPasswordData.newPassword.length < 6) {
            errors.newPassword = "Password must be at least 6 characters"
            console.log("Password must be at least 6 characters")
        }
        setValidationError(errors)
        return Object.keys(errors).length === 0
    }


    const handleSubmit = async (event) => {
        event.preventDefault()
        if (!validateInput()) {
            alert("Invalid email or password")
            console.log("invalid input from login ")
            return
        }
        try {
            const responce = await axios.post('/api/v1/users/forgetPassword', forgetPasswordData)
            if (responce.status === 200) {
                setforgetPasswordData(responce.data.message)
                alert(responce.data.message)
                navigate('/')
            }
            else {
                setforgetPasswordData(responce.data.message)
                alert(responce.data.message)
            }
        } catch (error) {
            console.log("Error during process", error)
        }
    }
   
    const handleChange = (event) => {
        return setforgetPasswordData({ ...forgetPasswordData, [event.target.name]: event.target.value })
    }
    return (
        <>
            <div>
                <form action="/api/v1/users/forgetPassword" onSubmit={handleSubmit} method="post" className='container border border-success-subtle rounded mx-2 my-3'>
                    <img src="/login-icon.jpg" alt="login-icon" className='d-flex img-fluid logIn-Img' />
                    <div className="input-group flex-nowrap my-3 ">
                        <span className="input-group-text" id="addon-wrapping">@</span>
                        <input type="email" onChange={handleChange} className="form-control" name='email' value={forgetPasswordData.email} placeholder="email" aria-label="email" aria-describedby="addon-wrapping" />
                    </div>
                    {validationError.email && <div className="text-light">{validationError.email}</div>}
                    <div className="input-group flex-nowrap my-3 ">
                        <span className="input-group-text" id="addon-wrapping">@</span>
                        <input type="password" onChange={handleChange} className="form-control " name='newPassword' value={forgetPasswordData.newPassword} placeholder="enter your new password" aria-label="newPassword" aria-describedby="addon-wrapping" />
                    </div>
                    {validationError.newPassword && <div className="text-light">{validationError.newPassword}</div>}
                    <button  className="btn btn-primary my-3 rounded" type="submit" >Submit</button>
                </form>
            </div>
        </>
    );
};

export default ForgetPassword;