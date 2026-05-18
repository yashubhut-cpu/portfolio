import React from 'react';
import Button from '../components/Button.jsx';
import './Home.css';

function Home() {
  return (
    <div className="home-container fade-in">
      <div className="hero-section container">
        <div className="hero-content">
          <div className="hero-badge glass">
            <span>🚀 Available for Freelance & Full-time Roles</span>
          </div>
          <h1 className="hero-title">
            Hi, I am <span className="text-gradient">Yash Bhut</span>
          </h1>
          <h2 className="hero-subtitle">Crafting the Future of Web Applications</h2>
          <p className="hero-description">
            I am a passionate Full‑Stack Developer specializing in building high‑performance, responsive, and visually stunning web experiences. With expertise in React, Node.js, and modern CSS architectures, I bring creative concepts to life.
          </p>
          <div className="hero-actions">
            <Button to="/projects" variant="primary">View My Work</Button>
            <Button to="/contact" variant="outline">Let's Connect</Button>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-image-wrapper glass">
            <img src="/hero.png" alt="Developer Visual Space" className="hero-img" />
            <div className="glow-orb"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
