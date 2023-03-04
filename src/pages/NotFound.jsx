import React from "react";
import '@styles/NotFound.scss';

const NotFound = () => {
    return (
      <div className="error-container">
        <h1>404</h1>
        <p>Oops! Page not found</p>
        <a href="#" className="back-btn">
          Go Back
        </a>
        <div className="animation" />
      </div>
    );
}

export default NotFound;