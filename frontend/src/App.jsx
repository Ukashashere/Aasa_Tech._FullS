import './App.scss';
import Home from './components/Home';     /*Import, Here we have imported things*/
import Footer from './components/Footer';
import Book_Appointment from './components/Book_Appointment';
import HowItWorks from './components/HowItWorks';
import Navbar from './components/Navbar';
import LoginSignupPopup from "./components/LoginSignupPopup";
import React, { useEffect, useState } from "react";
import axios from "axios";


function App() {
  const [protectedData, setProtectedData] = useState(null);
  useEffect(() => {
    // Fetch protected data on component mount
    const fetchProtectedData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/protected-route", {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        setProtectedData(response.data); // Store the response data
      } catch (error) {
        console.error("Error fetching protected data:", error.response?.data || error.message);
      }
    };
    fetchProtectedData();
  }, []);


  const [showPopup, setShowPopup] = useState(true);
  const closePopup = () => {
    setShowPopup(false);
  };  

  return (
    <div className="App">
      {showPopup && <LoginSignupPopup onClose={closePopup} />}
      {/*{protectedData ? (
        <p>Protected Data: {JSON.stringify(protectedData)}</p>
      ) : (
        <p>Loading protected data...</p>
      )}*/}
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