import React, { useState } from "react";
import { FaGoogle, FaFacebook, FaApple, FaEye, FaEyeSlash } from "react-icons/fa"; // Import social icons and eye icons
import "./LoginPage.css";


const LoginPage = () => {
  const [phoneOrEmail, setPhoneOrEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const isValidPhoneNumber = (input) => {
    const phoneRegex = /^\d{11}$/;
    return phoneRegex.test(input);
  };

  const isValidEmail = (input) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(input);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isValidPhoneNumber(phoneOrEmail) && !isValidEmail(phoneOrEmail)) {
      setErrorMessage("Please enter a valid phone number or email!");
      return;
    }

    if (!password) {
      setErrorMessage("Password cannot be empty!");
      return;
    }

    setErrorMessage("");
    alert("Login successful!");
  };

  return (
    <div className="login-page">
      <div className="glass-container">
        <h1>Login</h1>
        <form className="signup-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Phone Number/Email"
            value={phoneOrEmail}
            onChange={(e) => setPhoneOrEmail(e.target.value)}
            required
          />
          <div className="password-field">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span
              className="password-toggle-icon"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <button type="submit" className="submit-btn">
            Login
          </button>
        </form>
        <div className="social-signup">
          <p>Or login with:</p>
          <div className="social-icons">
            <a href="#google" aria-label="Login with Google">
              <FaGoogle className="social-icon google-icon" />
            </a>
            <a href="#facebook" aria-label="Login with Facebook">
              <FaFacebook className="social-icon facebook-icon" />
            </a>
            <a href="#apple" aria-label="Login with Apple">
              <FaApple className="social-icon apple-icon" />
            </a>
          </div>
        </div>
        <div>
          <a href="/Signup" className="signin-btn">
            Create an Account
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
