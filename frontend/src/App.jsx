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

function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleOpenForm = () => {
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };

 

  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Home showForm={handleOpenForm} />} />
          <Route path="/form/signIn" element={<SignInForm isOpen={isFormOpen} onClose={handleCloseForm} />} />
          <Route path="/form/logIn" element={<LogIn/>} />
          <Route path="/form/forgetPassword" element={<ForgetPassword/>} />
          <Route path='/collections' element={<Collections/>}/>
        </Routes>
        {/* <Footer/> */}
      </div>
    </Router>
  );
}

export default App;

