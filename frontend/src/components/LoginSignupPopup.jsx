import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const PopupWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const PopupContent = styled.div`
  background: #ffffff;
  width: 400px;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  animation: fadeIn 0.3s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const Title = styled.h2`
  text-align: center;
  font-size: 1.8rem;
  margin-bottom: 20px;
  color: #333;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;

  input {
    padding: 10px;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    outline: none;
    transition: border 0.3s;

    &:focus {
      border: 1px solid #007BFF;
    }
  }

  button {
    background-color: #007BFF;
    color: white;
    padding: 10px;
    font-size: 1rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s;

    &:hover {
      background-color: #0056b3;
    }
  }
`;

const ToggleLink = styled.p`
  text-align: center;
  margin-top: 10px;

  span {
    color: #007BFF;
    cursor: pointer;
    text-decoration: underline;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 0.9rem;
  text-align: center;
`;

const LoginSignupPopup = ({ onClose, onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ usernameOrEmail: "", password: "", username: "", email: "" });
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setFormData({ usernameOrEmail: "", password: "", username: "" });
    setErrorMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isLogin) {
        // Login request
        const response = await axios.post("http://localhost:5000/auth/login", {
          usernameOrEmail: formData.usernameOrEmail,
          password: formData.password,
        });

        const token = response.data.token; // JWT token
        localStorage.setItem("token", token); // Store token in localStorage
        localStorage.setItem("email", formData.usernameOrEmail); // Store email/username in localStorage
        onLogin(formData.usernameOrEmail); // Update Navbar with the logged-in email/username
      } else {
        // Sign-up request
        await axios.post("http://localhost:5000/auth/signup", {
          username: formData.username,
          email: formData.email,
          password: formData.password,
        });

        alert("Sign-up successful! Please log in.");
        toggleMode(); // Switch to login mode after sign-up
      }
    } catch (error) {
      const errorMsg =
        error.response?.data?.message || "Something went wrong. Please try again.";
      setErrorMessage(errorMsg);
    }
  };

  return (
    <PopupWrapper>
      <PopupContent>
        <Title>{isLogin ? "Welcome Back!" : "Create an Account"}</Title>
        <Form onSubmit={handleSubmit}>
          {isLogin ? (
            // Show 'usernameOrEmail' input only for login
            <input
              type="text"
              name="usernameOrEmail"
              placeholder="Username or Email"
              value={formData.usernameOrEmail}
              onChange={handleInputChange}
              required
            />
          ) : (
            // Show separate 'username' and 'email' fields for signup
            <>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleInputChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </>
          )}
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
          {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
          <button type="submit">{isLogin ? "Login" : "Sign Up"}</button>
        </Form>
        <ToggleLink>
          {isLogin ? (
            <>
              Don't have an account? <span onClick={toggleMode}>Sign up</span>
            </>
          ) : (
            <>
              Already have an account? <span onClick={toggleMode}>Login</span>
            </>
          )}
        </ToggleLink>
        <button onClick={onClose}>Close</button>
      </PopupContent>
    </PopupWrapper>
  );
};

export default LoginSignupPopup;


