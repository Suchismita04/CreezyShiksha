
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react';


const SignInForm = (isOpen, onClose) => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: ''
    });
    const [successMessage, setSuccessMessage] = useState("")
    const api = axios.create({
        baseURL: '/api', // Check this URL
        withCredentials: true,
    });
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await api.post('/api/v1/users/signIn', formData);

            if (response.status === 201) {
                // Handle successful sign-in
                setSuccessMessage('Sign-in successful');
            } else {
                // Handle sign-in failure
                console.error(`Sign-in failed: ${response.data.message}`);
            }
            console.log(response)
        } catch (error) {
            console.error('Error during sign-in:', error);
        }
    };
    const handleButtonClick = () => {
        handleSubmit()
        if (successMessage) {
            onClose();
          }
    }
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    return (
        <>
            <div style={{ display: isOpen ? 'block' : 'none' }}>
                <form action='/api/v1/users/signIn' method="post" className='container needs-validation border border-success-subtle rounded mx-2 my-7' noValidate>
                    <button type="button" className="btn-close d-flex my-3 " aria-label="Close" style={{ "position": "relative", "left": "15rem" }} onClick={onClose}></button>
                      <img src="/public/signIn-dp.jpg" alt="dp" />
                    <div className="input-group flex-nowrap my-3 ">
                        <span className="input-group-text" id="addon-wrapping">@</span>
                        <input type="text" onChange={handleChange} name="fullName"
                            value={formData.fullName} className="form-control is-valid" placeholder="Full Name" aria-label="fullName" aria-describedby="addon-wrapping" />
                            {/* <div className="valid-feedback">
                                Looks good!
                            </div> */}
                    </div>
                    <div className="input-group flex-nowrap my-3 ">
                        <span className="input-group-text" id="addon-wrapping">@</span>
                        <input type="text" className="form-control is-invalid" onChange={handleChange} name="email"
                            value={formData.email} placeholder="Email" aria-label="Email" aria-describedby="addon-wrapping" />
                    </div>
                    <div className="input-group flex-nowrap my-3 ">
                        <span className="input-group-text" id="addon-wrapping">@</span>
                        <input type="password" className="form-control " placeholder="password" onChange={handleChange} name="password"
                            value={formData.password} aria-label="password" aria-describedby="addon-wrapping" />
                    </div>
                    <button className="btn btn-primary my-3 rounded" type="submit" value="Sign In" onClick={handleButtonClick}>Sign In</button>
                    {successMessage && (
                        <div className="alert alert-success" role="alert">
                            {successMessage}
                        </div>
                        
                    )}
                    {console.log(successMessage)}
                    <p className='secondary-text-emphasis'>Do you have an account? <Link to="/form/login" className='primary text-decoration-underline'>login</Link></p>
                </form>
            </div>

        </>
    );
};

export default SignInForm;

