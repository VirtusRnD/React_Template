import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you are looking for does not exist or may have moved.</p>
      <Link to="/" className="home-link">Return to Home Page</Link>
    </div>
  );
};

export default NotFound; 