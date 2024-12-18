import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [password, setPassword] = useState('');
    const [usernameOrEmail, setUsernameOrEmail] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/auth/login`, { usernameOrEmail, password });
            localStorage.setItem('token', response.data.token);
            navigate('/weather');
        } catch (error) {
            alert('Invalid credentials');
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <h1>Login</h1>
            <input type="text" placeholder="Username or Email" value={usernameOrEmail} onChange={(e) => setUsernameOrEmail(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Login</button>
        </form>
    );
}

export default Login;
