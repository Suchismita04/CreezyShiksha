import React, { useState } from 'react';
import './App.css';
import Home from './pages/Home.jsx';
import Nav from './components/Nav.jsx';
import SignInForm from './pages/SignInForm.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LogIn from './pages/LogIn.jsx';

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
        </Routes>
      </div>
    </Router>
  );
}

export default App;

