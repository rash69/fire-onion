import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'
const NotFoundPage = () => {
  return (
    <div className="container  not-found-area">
      <div className="row ">
        <div className="col not-found-content text-center">
          <h1>Error404</h1>
          <h3>Something went wrong</h3>
          <p>We're deeply sorry, but something went wrong. Please try to refresh the page or</p>
          <Link to="/">start over.</Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;