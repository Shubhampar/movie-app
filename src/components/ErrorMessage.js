import React from 'react';

const ErrorMessage = ({ error }) => {
  return (
    <div className="error-message">
      {error && (
        <div className="error-container">
          <p className="error-text">{error}</p>
        </div>
      )}
    </div>
  );
};

export default ErrorMessage;
