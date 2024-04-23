import React, { useState } from 'react';
import './App.css';
import Home from './pages/Home.jsx';
import Nav from './components/Nav.jsx';
import SignInForm from './pages/SignInForm.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LogIn from './pages/LogIn.jsx';
import Footer from './components/Footer.jsx';
import ForgetPassword from './pages/ForgetPassword.jsx';
import Collections from './pages/Collections.jsx';
import MyAccount from './pages/MyAccount.jsx';

function App() {
 

  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Home  />} />
          <Route path="/form/signIn" element={<SignInForm  />} />
          <Route path="/form/logIn" element={<LogIn/>} />
          <Route path="/form/forgetPassword" element={<ForgetPassword/>} />
          <Route path='/collections' element={<Collections/>}/>
          <Route path='/myAccount' element={<MyAccount/>}/>
        </Routes>
        {/* <Footer/> */}
      </div>
    </Router>
  );
}

export default App;

