import './App.scss';
import Home from './Components/Home';     /*Import, Here we have imported things*/
import Footer from './Components/Footer';
import Book_Appointment from './Components/Book_Appointment';
import HowItWorks from './Components/HowItWorks';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Book_Appointment />
      <Home />         {/*Render, Here we have rendered the imported things*/}
      <HowItWorks />
      <Footer />
    </div>
  );
}

export default App;

/*
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Weather from './pages/Weather';
import Report from './pages/Report';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/weather" element={<Weather />} />
                <Route path="/report" element={<Report />} />
            </Routes>
        </Router>
    );
}

export default App;
*/