import React, { useState } from "react";
import styled from "styled-components";

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

const LoginSignupPopup = ({ onClose }) => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login/signup logic here
    console.log("Form submitted");
  };

  return (
    <PopupWrapper>
      <PopupContent>
        <Title>{isLogin ? "Welcome Back!" : "Create an Account"}</Title>
        <Form onSubmit={handleSubmit}>
          {!isLogin && (
            <input type="text" placeholder="Username" required />
          )}
          <input type="email" placeholder="Email Address" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">{isLogin ? "Login" : "Sign Up"}</button>
        </Form>
        <ToggleLink>
          {isLogin ? (
            <>
              Don't have an account?{" "}
              <span onClick={toggleForm}>Sign up</span>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <span onClick={toggleForm}>Login</span>
            </>
          )}
        </ToggleLink>
      </PopupContent>
    </PopupWrapper>
  );
};

export default LoginSignupPopup;
