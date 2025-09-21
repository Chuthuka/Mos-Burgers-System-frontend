import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
    setError(""); 
    setSuccess(""); 
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/api/user/login", credentials);
      if (response.status === 200) {
        setSuccess(" Login successful! Redirecting to dashboard...");
        setError("");
        setTimeout(() => {
          navigate("/customers");
        }, 4000);
      }
    } catch (err) {
      setError(" Invalid email or password");
      setSuccess("");
    }
  };

  
};

export default Login;
