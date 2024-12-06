import React, { useState } from "react";
import { FaGoogle, FaFacebook, FaApple, FaEye, FaEyeSlash } from "react-icons/fa"; // Import social icons and eye icons
import "./LoginPage.css";

const LoginPage = () => {
  const [isCustomer, setIsCustomer] = useState(true); // Toggle between customer and repair man forms
  const [phoneOrEmail, setPhoneOrEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [specialty, setSpecialty] = useState("");

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

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match!");
      return;
    }

    setErrorMessage("");
    alert(isCustomer ? "Customer Signup successful!" : "Repair Man Signup successful!");
  };

  return (
    <div className="login-page">
      <div className="glass-container">
        <h1>Signup</h1>
        <div className="toggle-buttons">
          <button
            className={`toggle-btn ${isCustomer ? "active" : ""}`}
            onClick={() => setIsCustomer(true)}
          >
            Customer
          </button>
          <button
            className={`toggle-btn ${!isCustomer ? "active" : ""}`}
            onClick={() => setIsCustomer(false)}
          >
            Repair-Man
          </button>
        </div>
        <form className="signup-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" required />
          <input
            type="text"
            placeholder="Phone Number/Email"
            value={phoneOrEmail}
            onChange={(e) => setPhoneOrEmail(e.target.value)}
            required
          />
          {!isCustomer && (
            <select
              value={specialty}
              onChange={(e) => setSpecialty(e.target.value)}
              required
            >
              <option value="" disabled>
                Select Area of Specialty
              </option>
              <option value="Engine Repair Specialist">Engine Repair Specialist</option>
              <option value="Transmission Specialist">Transmission Specialist</option>
              <option value="Brake and Suspension Technician">Brake and Suspension Technician</option>
              <option value="Electric and Hybrid Vehicle Technician">Electric and Hybrid Vehicle Technician</option>
              <option value="Fleet Maintenance Specialist">Fleet Maintenance Specialist</option>
              <option value="Tire and Wheel Specialist">Tire and Wheel Specialist</option>
              <option value="Off-Road Vehicle Specialist">Off-Road Vehicle Specialist</option>
              <option value="Painting">Painting</option>
            </select>
          )}
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
          <div className="password-field">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
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
            {isCustomer ? "Signup as Customer" : "Signup as Repair-Man"}
          </button>
        </form>
        <div className="social-signup">
          <p>Or signup with:</p>
          <div className="social-icons">
            <a href="#google" aria-label="Signup with Google">
              <FaGoogle className="social-icon google-icon" />
            </a>
            <a href="#facebook" aria-label="Signup with Facebook">
              <FaFacebook className="social-icon facebook-icon" />
            </a>
            <a href="#apple" aria-label="Signup with Apple">
              <FaApple className="social-icon apple-icon" />
            </a>
          </div>
        </div>
        <div>
        <a href="/login" className="signin-btn">
            Already have an account? Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
