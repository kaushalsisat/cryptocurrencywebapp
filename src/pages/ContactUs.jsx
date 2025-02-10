import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="container py-5 contact-page mt-4">
      <div className="row justify-content-center">
        {/* Contact Info Section */}
        <div className="col-lg-5 mb-4">
          <div className="card shadow-lg p-4" id="contact-section">
            <h2 className="fw-bold text-center c-h2">Contact Us</h2>
            <p className="text-center text-muted">
              Have questions? Get in touch with us.
            </p>
            <div className="mt-4">
              <div className="d-flex align-items-center mb-3">
                <FaPhone className="fs-4 me-3 FaPhone"/>
                <p className="mb-0 fw-bold">+1 234 567 890</p>
              </div>
              <div className="d-flex align-items-center mb-3">
                <FaEnvelope className="fs-4 me-3 FaEnvelope" />
                <p className="mb-0 fw-bold">support@cryptotracker.com</p>
              </div>
              <div className="d-flex align-items-center">
                <FaMapMarkerAlt className="fs-4 me-3 FaMapMarkerAlt" />
                <p className="mb-0 fw-bold">123 Crypto Street, NY, USA</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="col-lg-6">
          <div className="card shadow-lg p-4" id="contact-form">
            <h3 className="fw-bold text-center c-h3">Send Us a Message</h3>
            <form className="mt-3">
              <div className="mb-3">
                <label className="form-label fw-bold">Full Name</label>
                <input type="text" className="form-control" placeholder="Your Name" />
              </div>
              <div className="mb-3">
                <label className="form-label fw-bold">Email Address</label>
                <input type="email" className="form-control" placeholder="you@example.com" />
              </div>
              <div className="mb-3">
                <label className="form-label fw-bold">Message</label>
                <textarea className="form-control" rows="4" placeholder="Write your message..."></textarea>
              </div>
              <div className="d-grid">
                <button type="submit" className="btn fw-bold" id="c-button">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

