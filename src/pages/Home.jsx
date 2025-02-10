import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
import pstoreImg from "/src/assets/pstore.png";

const Home = () => {
  const [cryptos, setCryptos] = useState([]);
  const [loading, setLoading] = useState(true); // New state for spinner

  useEffect(() => {
    fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd")
      .then((response) => response.json())
      .then((data) => {
        setCryptos(data.slice(0, 6)); // Fetch top 6 cryptocurrencies
        setLoading(false); // Hide spinner once data is loaded
      })
      .catch((error) => {
        console.error("Error fetching crypto data:", error);
        setLoading(false); // Hide spinner in case of error
      });
  }, []);

  return (
    <div className="home-page">
      {/* -------------------Hero Section-Header--------------------------- */}
      <header className="text-center text-white p-5">
        <div className="container shadow p-4 header-content">
          <h1 className="fw-bold text-center">Track Live Cryptocurrency Prices</h1>
          <p className="lead">Get real-time updates on top cryptocurrencies.</p>
          <NavLink to="/markets" className="btn btn-lg" id="h-button">
            Learn More
          </NavLink>
        </div>
      </header>

      {/* -------------------Services We Provide Section ------------------------------*/}
      <section className="container mt-5">
        <h2 className="text-center fw-bold mb-4">Services We Provided</h2>
        <div className="row">
          {[
            { title: "Live Market Prices", desc: "Real-time tracking of crypto prices across multiple exchanges.", icon: "📊" },
            { title: "Portfolio Management", desc: "Monitor and manage your crypto investments with ease.", icon: "💰" },
            { title: "Crypto News Updates", desc: "Stay informed with the latest news in the crypto world.", icon: "📰" },
            { title: "Secure Wallet Integration", desc: "Connect your wallet safely and track your holdings.", icon: "🔒" },
          ].map((service, index) => (
            <div key={index} className="col-md-3 col-sm-6 my-3">
              <div className="card text-center p-3 shadow service-card" id="services-c">
                <div className="service-icon fs-3">{service.icon}</div>
                <h5 className="fw-bold hservice-h5">{service.title}</h5>
                <p className="text-muted">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------------------------Crypto Prices Section----------------------- */}
      <section className="container mt-5">
        <h2 className="text-center fw-bold mb-4">Live Trending Cryptocurrency Prices</h2>

        {/* Show Spinner While Loading */}
        {loading ? (
          <div className="text-center">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <div className="row">
            {cryptos.map((coin) => (
              <div key={coin.id} className="col-md-4 col-sm-6 my-3">
                <div className="card text-center shadow-lg p-3" id="h-card">
                  <img
                    src={coin.image}
                    alt={coin.name}
                    className="card-img-top mx-auto"
                    style={{ width: "50px" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{coin.name}</h5>
                    <p className="card-text fw-bold text-success">
                      ${coin.current_price.toLocaleString()}
                    </p>
                    <p
                      className={
                        coin.price_change_percentage_24h >= 0
                          ? "text-success"
                          : "text-danger"
                      }
                    >
                      {coin.price_change_percentage_24h.toFixed(2)}% (24h)
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* ----------------------------------Bitcoin Roadmap Section------------------------- */}
      <section className="container roadmap mt-5 shadow p-4 rounded">
        <h2 className="text-center fw-bold mb-3">Bitcoin Roadmap</h2>
        <div className="timeline">
          {[
            { year: "2009", title: "Bitcoin Created", desc: "Satoshi Nakamoto mined the first block (Genesis Block)." },
            { year: "2013", title: "Bitcoin Hits $1,000", desc: "Bitcoin price reaches $1,000 for the first time." },
            { year: "2017", title: "Bitcoin Hits $20,000", desc: "Bitcoin reaches an all-time high of $20,000." },
            { year: "2021", title: "Bitcoin Crosses $60,000", desc: "Mass adoption and institutional investments drive the price up." },
            { year: "2025", title: "Future Predictions", desc: "Experts predict new highs and more real-world applications." },
          ].map((event, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-year">{event.year}</div>
              <div className="timeline-content">
                <h5>{event.title}</h5>
                <p>{event.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Download App Section */}
      <section className="container play-store mt-5 text-center shadow p-4 mb-5 rounded">
        <h2 className="fw-bold">Download Our App</h2>
        <p className="text-muted">Get real-time crypto updates on your phone!</p>
        <div className="row ps-row align-items-center">
          {/* Mobile Mockup Image */}
          <div className="col-md-4 col-sm-12 my-3">
            <img src={pstoreImg} alt="Mobile App" className="img-fluid rounded mb-4" />
          </div>

          {/* QR Code */}
          <div className="col-md-4 col-sm-12 my-3">
            <img
              src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://play.google.com/store"
              alt="QR Code"
              className="img-fluid"
            />
            <p className="mt-2">Scan to Download</p>
          </div>

          {/* Play Store Button */}
          <div className="col-md-4 col-sm-12 my-3">
            <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play Store"
                className="img-fluid playstore-btn"
              />
            </a>
            <p className="mt-2">Click to Download</p>
          </div>
        </div>
      </section>
      <hr />
    </div>
  );
};

export default Home;
