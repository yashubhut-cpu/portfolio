import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

function Button({ to, href, onClick, type = 'button', children, variant = 'primary', className = '' }) {
  const classNames = `btn btn-${variant} glass transition ${className}`;

  if (to) {
    return (
      <Link to={to} className={classNames}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classNames} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classNames}>
      {children}
    </button>
  );
}

export default Button;
