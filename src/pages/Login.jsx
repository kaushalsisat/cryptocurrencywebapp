import React from 'react'
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow log-card">
        <h3 className="text-center log-h3">Login</h3>
        <form>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" placeholder="Enter email" />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" placeholder="Enter password" />
          </div>
          <button className="btn w-100" id="log-btn">Login</button>
        </form>
        <p className="mt-3 text-center">
          Don't have an account? <Link to="/register" id='log-reg'>Register</Link>
        </p>
      </div>
    </div>
  );
}

export default Login