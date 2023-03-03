import React from "react";

import './App.css';
import Gallery from './components/Gallery/Gallery';
import SignUpForm from './components/user/SignUpForm';
import LogInForm from './components/auth/LoginForm';
import EventView from './components/EventView/EventView';
import LandingPage from './components/LandingPage/LandingPage';
import { Routes, Route, useNavigate } from "react-router-dom";


function App() {

  return (
    <div className="container-fluid">

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/signup" element={<SignUpForm navigate={useNavigate()}/>} />
        <Route path="/login" element={<LogInForm navigate={useNavigate()} />} />
        <Route path="/event/:id" element={<EventView />} />
      </Routes>
    </div>
  );
}

export default App;