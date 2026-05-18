import React, { useState } from 'react';
import Section from '../components/Section.jsx';
import Card from '../components/Card.jsx';
import './Projects.css';

function Projects() {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Frontend', 'Backend', 'Full‑Stack'];

  const projectsData = [
    {
      image: '/project1.png',
      title: 'NeonSpace SaaS platform',
      description: 'A fully interactive analytics dashboard featuring real-time data feeds, modular grids, custom HSL charts, and dark theme support.',
      tags: ['React', 'CSS Modules', 'ChartJS', 'Vite'],
      category: 'Frontend',
      link: 'https://github.com'
    },
    {
      image: '/project2.png',
      title: 'Quantum Portal Gateway',
      description: 'Highly secure payment orchestration API with multi-tenant routing, automated reconciliation flows, and region separation logic.',
      tags: ['NodeJS', 'Express', 'PostgreSQL', 'Redis'],
      category: 'Backend',
      link: 'https://github.com'
    },
    {
      image: '/project3.png',
      title: 'Aether Social network',
      description: 'A modern decentralized media platform utilizing real-time chat, glassmorphic themes, modular profiles, and direct media streaming.',
      tags: ['React', 'WebSockets', 'GraphQL', 'MongoDB'],
      category: 'Full‑Stack',
      link: 'https://github.com'
    }
  ];

  const filteredProjects = filter === 'All' 
    ? projectsData 
    : projectsData.filter(proj => proj.category === filter);

  return (
    <div className="projects-page fade-in">
      <Section id="projects" title="Featured Projects" subtitle="A curated collection of my latest work, highlighting clean code and interactive UX.">
        
        {/* Category Filters */}
        <div className="filter-wrapper flex-center">
          <div className="filter-container glass">
            {categories.map((cat, idx) => (
              <button 
                key={idx} 
                className={`filter-btn transition ${filter === cat ? 'active' : ''}`}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project, idx) => (
            <div key={idx} className="project-grid-item fade-in">
              <Card 
                image={project.image}
                title={project.title}
                description={project.description}
                tags={project.tags}
                link={project.link}
              />
            </div>
          ))}
        </div>

      </Section>
    </div>
  );
}

export default Projects;
