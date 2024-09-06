import React from "react";
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">22IT118</div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="home">
        <h1>Welcome to 22IT118 Landing Page</h1>
        <p>Simple, elegant, and functional landing page.</p>
        <button className="cta-button">Learn More</button>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <h2>About Us</h2>
        <p>We are a team of professionals who provide the best services in the industry.</p>
      </section>

      {/* Services Section */}
      <section className="services" id="services">
        <h2>Our Services</h2>
        <div className="service-cards">
          <div className="service-card">
            <h3>Service 1</h3>
            <p>Quality service at affordable prices.</p>
          </div>
          <div className="service-card">
            <h3>Service 2</h3>
            <p>Best solutions for your business needs.</p>
          </div>
          <div className="service-card">
            <h3>Service 3</h3>
            <p>Expert consultation available 24/7.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; 2024 22IT118. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
