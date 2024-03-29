import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import { useAuth } from './AuthContext';
import { useFormik } from 'formik';
import './HomePage.css';

const HomePage = () => {
  const { login, user } = useAuth();

  // Formik for login form
  const loginFormik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: (values) => {
      login(values);
    },
  });

  return (
    <div className="home-page-container">
      <h1 className="page-title">Hello Shopper!</h1>
      {user ? (
        <p className="user-greeting">Hello, {user.username}! You are ready to shop.</p>
      ) : (
        <>
          <div className="form-section">
            <h2 className="form-title">Login</h2>
            <form onSubmit={loginFormik.handleSubmit} className="form">
              <label className="form-label">
                Username:
                <input
                  type="text"
                  name="username"
                  onChange={loginFormik.handleChange}
                  value={loginFormik.values.username}
                  className="form-input"
                />
              </label>
              <br />
              <label className="form-label">
                Password:
                <input
                  type="password"
                  name="password"
                  onChange={loginFormik.handleChange}
                  value={loginFormik.values.password}
                  className="form-input"
                />
              </label>
              <br />
              <button type="submit" className="submit-button">
                Login
              </button>
            </form>
          </div>

          {/* Button to navigate to the register page */}
          <div className="register-button-container">
            <p>Don't have an account? </p>
            <Link to="/register" className="register-button">
              Register
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default HomePage;
