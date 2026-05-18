import React, { useState } from 'react';
import Section from '../components/Section.jsx';
import Button from '../components/Button.jsx';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('Please fill out all fields.');
      return;
    }
    setStatus('Sending...');
    
    // Simulate API request
    setTimeout(() => {
      setStatus('Message sent successfully! I will get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <div className="contact-page fade-in">
      <Section id="contact" title="Get In Touch" subtitle="Have an exciting project idea, freelance opportunity, or just want to say hello? Drop a line!">
        
        <div className="contact-grid">
          
          {/* Info Panels */}
          <div className="contact-info-panel flex-center flex-direction-column">
            <div className="info-card glass transition">
              <div className="info-icon flex-center">📬</div>
              <div className="info-details">
                <h4>Email Address</h4>
                <p><a href="mailto:yashbhut@example.com">yashbhut@example.com</a></p>
              </div>
            </div>

            <div className="info-card glass transition">
              <div className="info-icon flex-center">📍</div>
              <div className="info-details">
                <h4>Current Location</h4>
                <p>Gujarat, India</p>
              </div>
            </div>

            <div className="info-card glass transition">
              <div className="info-icon flex-center">💼</div>
              <div className="info-details">
                <h4>Open to Work</h4>
                <p>Full‑Time & Freelance Contracts</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-wrapper glass">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  className="form-input glass transition" 
                  placeholder="John Doe" 
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  className="form-input glass transition" 
                  placeholder="john@example.com" 
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="5" 
                  value={formData.message} 
                  onChange={handleChange} 
                  className="form-input glass transition" 
                  placeholder="Let's build something epic together..." 
                  required
                ></textarea>
              </div>

              <div className="form-submit">
                <Button type="submit" variant="primary" className="submit-btn">
                  Send Message
                </Button>
              </div>

              {status && (
                <div className={`status-message glass ${status.includes('successfully') ? 'success' : status.includes('fill') ? 'error' : 'loading'}`}>
                  {status}
                </div>
              )}
            </form>
          </div>

        </div>

      </Section>
    </div>
  );
}

export default Contact;
