import React from 'react';

function ErrorDisplay({ error }) {
  return error ? <p className="error">{error}</p> : null;
}

export default ErrorDisplay;
