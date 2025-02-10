import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '/src/assets/Logo.png'
const Footer = () => {
  return (
    <div className='container-fluid footer border p-5 mt-4'>
       <div className="row">
        <div className="col-12 col-sm-12 col-md-3 col-lg-3">
          <div className='footer-links'>
            <NavLink className="footer-brand fw-bold fs-4" to='' ><img src={Logo} alt="Logo" className="footer-logo"/>ryptoPulse</NavLink>
            <p className='text-secondary mt-4 fs-5'>&copy;2025 CryptoPulse</p> 
            <p className='social-media-links d-flex mt-3'>
              <a href="" className='nav-link text-primary fs-2'><i className="bi bi-facebook"></i></a>
              <a href="" className='nav-link text-danger fs-2'><i className="bi bi-instagram mx-2"></i></a>
              <a href="" className='nav-link text-primary fs-2'><i className="bi bi-twitter"></i></a>
              <a href="" className='nav-link text-success fs-2'><i className="bi bi-whatsapp mx-2"></i></a>
            </p>
            <p className='text-secondary mt-3 fs-5'><i className="bi bi-globe2"></i> Global | english</p>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-3 col-lg-3">
          <div className='footer-links'>
             <h3>Company</h3>
             <p>About</p>
             <p>Careers</p>
             <p>Blog</p>
             <p>Contact</p>
             <p>Legal & privacy</p>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-3 col-lg-3">
          <div className='footer-links'>
              <h3>Developers</h3>
              <p>Developer Platform</p>
              <p>Wallets</p>
              <p>Wallet SDK</p>
              <p>Coinbase App</p>
              <p>Exchange API</p>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-3 col-lg-3">
          <div className='footer-links'>
                <h3>Support</h3>
                <p>Help center</p>
                <p>Create account</p>
                <p>ID verification</p>
                <p>Payment methods</p>
                <p>Supported crypto</p>
          </div>
        </div>
       </div>
    </div>
  )
}

export default Footer
