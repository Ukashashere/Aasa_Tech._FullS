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
