import React from 'react';
import Section from '../components/Section.jsx';
import './About.css';

function About() {
  const stats = [
    { value: '4+', label: 'Years Experience' },
    { value: '30+', label: 'Completed Projects' },
    { value: '15+', label: 'Happy Clients' },
    { value: '99%', label: 'Success Rate' }
  ];

  const timeline = [
    {
      year: '2024 - Present',
      role: 'Senior Frontend Developer',
      company: 'InnovateTech Labs',
      description: 'Lead developer for modern SaaS dashboard applications. Implemented scalable React architectures and mentored junior developers.'
    },
    {
      year: '2022 - 2024',
      role: 'Full-Stack Engineer',
      company: 'Quantum Solutions',
      description: 'Built high‑traffic REST APIs and GraphQL gateways using Node.js, Express, and microservices. Developed pixel‑perfect frontends.'
    },
    {
      year: '2020 - 2022',
      role: 'Junior Web Developer',
      company: 'PixelForge Studios',
      description: 'Scaffolded static and dynamic websites using HTML5, CSS3, JavaScript, and Tailwind CSS. Integrated content management systems.'
    }
  ];

  return (
    <div className="about-page fade-in">
      <Section id="about" title="About Me" subtitle="My Journey, My Story, My Expertise">
        
        {/* Intro Grid */}
        <div className="about-grid">
          <div className="about-bio glass">
            <h3>Who is <span className="text-gradient">Yash Bhut</span>?</h3>
            <p>
              I am a driven software craftsman who loves transforming complex problems into elegant, highly intuitive digital experiences. My goal is to build products that not only function beautifully but also capture user engagement.
            </p>
            <p>
              When I am not debugging code, you can find me exploring new Web3 tools, studying digital art styles, or building custom automation integrations. Let's create something extraordinary together!
            </p>
          </div>

          <div className="about-stats-grid">
            {stats.map((stat, idx) => (
              <div key={idx} className="stat-card glass transition">
                <span className="stat-value text-gradient">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Area */}
        <div className="timeline-section">
          <h3 className="timeline-section-title text-gradient">Professional Experience</h3>
          <div className="timeline-container">
            {timeline.map((item, idx) => (
              <div key={idx} className="timeline-item glass transition">
                <div className="timeline-dot"></div>
                <span className="timeline-year">{item.year}</span>
                <h4 className="timeline-role">{item.role}</h4>
                <h5 className="timeline-company">{item.company}</h5>
                <p className="timeline-desc">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

      </Section>
    </div>
  );
}

export default About;
