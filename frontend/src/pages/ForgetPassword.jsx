import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/icon-style.css'
const ForgetPassword = () => {
    const [forgetPasswordData, setforgetPasswordData] = useState({
        email: '',
        newPassword: ''
    })

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const responce = await axios.post('/api/v1/users/forgetPassword', forgetPasswordData)
            if (responce.status === 200) {
                setforgetPasswordData(responce.data.message)
            }
            else {
                setforgetPasswordData(responce.data.message)
            }
        } catch (error) {
            console.log("Error during process", error)
        }
    }
    const handleButtonClick = () => {
        handleSubmit()
    }
    const handleChange = (event) => {
        return setforgetPasswordData({ ...forgetPasswordData, [event.target.name]: event.target.value })
    }
    return (
        <>
            <div>
                <form action="/api/v1/users/forgetPassword" method="post" className='container border border-success-subtle rounded mx-2 my-3'>
                    <img src="/login-icon.jpg" alt="login-icon" className='d-flex img-fluid logIn-Img' />
                    <div className="input-group flex-nowrap my-3 ">
                        <span className="input-group-text" id="addon-wrapping">@</span>
                        <input type="email" onChange={handleChange} className="form-control" name='email' value={forgetPasswordData.email} placeholder="email" aria-label="email" aria-describedby="addon-wrapping" />
                    </div>
                    <div className="input-group flex-nowrap my-3 ">
                        <span className="input-group-text" id="addon-wrapping">@</span>
                        <input type="password" onChange={handleChange} className="form-control " name='newPassword' value={forgetPasswordData.newPassword} placeholder="enter your new password" aria-label="newPassword" aria-describedby="addon-wrapping" />
                    </div>
                    <button onClick={handleButtonClick} className="btn btn-primary my-3 rounded" type="submit" >Submit</button>
                </form>
            </div>
        </>
    );
};

export default ForgetPassword;