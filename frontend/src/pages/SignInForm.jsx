
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react';


const SignInForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: ''
    });
    const navigate = useNavigate()
    const [successMessage, setSuccessMessage] = useState("")
    const [showErrors, setShowErrors] = useState(false);
    const [error, setError] = useState({});
    const api = axios.create({
        baseURL: '/api', // Check this URL
        withCredentials: true,
    });
    const handleSubmit = async (e) => {
        e.preventDefault();
        const newError = validateForm(formData);
        setError(newError)
        try {
            console.log("before  hit the api")
            const response = await api.post('/v1/users/signIn', formData);
            console.log("after hit the api")
            if (Object.keys(newError).length === 0) {
                if (response.status === 201) {
                    // Handle successful sign-in
                    setSuccessMessage('Sign-in successful');
                    console.log("success message:", successMessage)
                } else {
                    // Handle sign-in failure
                    navigate('/')
                    // notyf.success("You're logged in successfully")
                    alert(" User is already existed !!!!")
                    console.log("Hello from sign in")
                    console.error(`Sign-in failed: ${response.data.message}`);
                }
            }
            else {
                navigate('/')
                setShowErrors(true);
            }

        } catch (error) {
            // navigate('/')
            console.error('Error during sign-in:', error);
        }
    };

    const validateForm = (data) => {
        console.log("Starting validation from sign in page")
        const errors = {}
        if (!data.fullName.trim()) {
            errors.username = 'Username is required';
            console.log('Username is required')
        }
        if (!/\S+@\S+\.\S+/.test(data.email)) {
            errors.email = 'Email is invalid';
            console.log('Email is invalid')
        }
        if (data.password.length < 6) {
            errors.password = 'Password must be at least 6 characters long';
            console.log('Password must be at least 6 characters long')
        }

        return errors
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    return (
        <>
            <div >
                <form action='/api/v1/users/signIn' onSubmit={handleSubmit} method="post" className='container needs-validation border border-success-subtle rounded mx-2 my-7' noValidate>
                    <img src="/signIn-dp.jpg" alt="dp" />
                    <div className="input-group flex-nowrap my-3 ">
                        <span className="input-group-text" id="addon-wrapping">@</span>
                        <input type="text" onChange={handleChange} name="fullName"
                            value={formData.fullName} className="form-control" placeholder="Full Name" aria-label="fullName" aria-describedby="addon-wrapping" />
                    </div>
                    {error.username && <div className='text-light'>{error.username}</div>}
                    <div className="input-group flex-nowrap my-3 ">
                        <span className="input-group-text" id="addon-wrapping">@</span>
                        <input type="text" className="form-control " onChange={handleChange} name="email"
                            value={formData.email} placeholder="Email" aria-label="Email" aria-describedby="addon-wrapping" />
                    </div>
                    {error.email && <div className='text-light'>{error.email}</div>}
                    <div className="input-group flex-nowrap my-3 ">
                        <span className="input-group-text" id="addon-wrapping">@</span>
                        <input type="password" className="form-control " placeholder="password" onChange={handleChange} name="password"
                            value={formData.password} aria-label="password" aria-describedby="addon-wrapping" />
                    </div>
                    {error.password && <div className='text-light'>{error.password}</div>}
                    <button className="btn btn-primary my-3 rounded" type="submit" value="Sign In" >Sign In</button>

                    {console.log(successMessage)}
                    <p className='secondary-text-emphasis f-color'>Do you have an account? <Link to="/form/login" className='primary text-decoration-underline f-color'>login</Link></p>
                </form>
            </div>

        </>
    );
};

export default SignInForm;

