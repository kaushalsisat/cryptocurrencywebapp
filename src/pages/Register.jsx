import React from 'react'
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow reg-card">
        <h3 className="text-center register-h3">Register</h3>
        <form>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="text" className="form-control" placeholder="Enter name" />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" placeholder="Enter email" />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" placeholder="Enter password" />
          </div>
          <button className="btn w-100 " id="register-button">Register</button>
        </form>
        <p className="mt-3 text-center">
          Already have an account? <Link to="/" id='reg-log'>Login</Link>
        </p>
      </div>
    </div>
  )
}

export default Register