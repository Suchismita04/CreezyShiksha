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
   
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const responce = await axios.post('/api/v1/users/logIn', logInFormData)
            if (responce.status === 200) {
                setlogInFormData(responce.data.message)
                const token=responce.data.token
                 localStorage.setItem('token',token)
            }
            else {
                setlogInFormData(responce.data.message)
            }
           
        } catch (error) {
            console.log("Error during logIn", error)
        }
    }
    const handleButtonClick = () => {
        handleSubmit()
    }
    const handleChange = (event) => {
        return setlogInFormData({ ...logInFormData, [event.target.name]: event.target.value })
    }
    return (
        <>
            <div >
                <form action="/api/v1/users/logIn" method="post" className='container border border-success-subtle rounded mx-2 my-3'>
                    <img src="/login-icon.jpg" alt="login-icon" className='d-flex img-fluid logIn-Img'/>
                    <div className="input-group flex-nowrap my-3 ">
                        <span className="input-group-text" id="addon-wrapping">@</span>
                        <input type="email" onChange={handleChange} className="form-control" name='email' value={logInFormData.email} placeholder="email" aria-label="email" aria-describedby="addon-wrapping" />
                    </div>
                    <div className="input-group flex-nowrap my-3 ">
                        <span className="input-group-text" id="addon-wrapping">@</span>
                        <input type="password" onChange={handleChange} className="form-control " name='password' value={logInFormData.password} placeholder="password" aria-label="password" aria-describedby="addon-wrapping" />
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