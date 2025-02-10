import React from "react";
import aboutImg from "/src/assets/about-crypto.jpg"; // Add an image
import { FaShieldAlt, FaExchangeAlt, FaChartLine } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div className="container my-5">
      {/* Hero Section */}
      <div className="row align-items-center text-center text-md-start">
        <div className="col-md-6">
          <h1 className="fw-bold a-heading">About <span className="a-span">CryptoPulse</span></h1>
          <p className="lead text-muted">
            CryptoPulse is a leading cryptocurrency tracking platform that provides real-time market insights, trends, and secure transactions.
          </p>
          {/* Centering the button on small screens and adding margin bottom */}
          <div className="text-center text-md-start mb-3">
            <NavLink className="a-learn px-4 py-2">Learn More</NavLink>
          </div>
        </div>
        <div className="col-md-6 text-center p-2 a-img shadow mt-2">
          <img src={aboutImg} alt="Crypto About" className="img-fluid rounded shadow" />
        </div>
      </div>

      {/* Key Features Section */}
      <div className="mt-5 text-center">
        <h2 className="fw-bold">Key Features</h2>
        <div className="row g-4 mt-3">
          <div className="col-md-4">
            <div className="card shadow p-4" id="ab-card">
              <FaShieldAlt size={40} className="a-icon mx-auto mb-3" />
              <h5>Secure Transactions</h5>
              <p className="text-muted">Our platform ensures highly secure and encrypted transactions.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow p-4" id="ab-card">
              <FaExchangeAlt size={40} className="a-icon mx-auto mb-3" />
              <h5>Real-time Market Updates</h5>
              <p className="text-muted">Get up-to-date crypto market trends and price tracking.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow p-4 ab-card" id="ab-card">
              <FaChartLine size={40} className="a-icon mx-auto mb-3" />
              <h5>Data-Driven Insights</h5>
              <p className="text-muted">AI-powered analytics for smarter investment decisions.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="mt-5 text-center">
        <h2 className="fw-bold">Why Choose CryptoPulse?</h2>
        <p className="text-muted">
          We provide the best tools and insights for crypto investors.
        </p>
        <div className="row g-4 mt-3">
          <div className="col-md-6">
            <div className="p-4 rounded shadow" id="ab-why">
              <h5>🔒 Highly Secure</h5>
              <p className="text-muted">Industry-standard encryption keeps your transactions safe.</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="p-4  rounded shadow" id="ab-why">
              <h5>📊 Market Analytics</h5>
              <p className="text-muted">AI-powered analysis for better investment planning.</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default About;
