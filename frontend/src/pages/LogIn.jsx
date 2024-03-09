import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
const LogIn = () => {
    return (
        <>
            <div >
                <form action="/api/v1/users" method="post" className='container border border-success-subtle rounded mx-2 my-3'>
                    <button type="button" className="btn-close d-flex my-3 " aria-label="Close" style={{ "position": "relative", "left": "15rem" }}></button>
                    <img src="/public/login-icon.jpg" alt="login-icon" className='d-flex img-fluid' style={{"height": "13rem",
    "width": "16rem"}}/>
                    <div className="input-group flex-nowrap my-3 ">
                        <span className="input-group-text" id="addon-wrapping">@</span>
                        <input type="text" className="form-control" placeholder="Email" aria-label="Email" aria-describedby="addon-wrapping" />
                    </div>
                    <div className="input-group flex-nowrap my-3 ">
                        <span className="input-group-text" id="addon-wrapping">@</span>
                        <input type="password" className="form-control " placeholder="password" aria-label="password" aria-describedby="addon-wrapping" />
                    </div>
                    <input className="btn btn-primary my-3 rounded" type="submit" value="Sign In"></input>
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