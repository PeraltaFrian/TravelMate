import React from 'react';

function ClearButton({ onClick }) {
  return (
    <section className="clear-btn-container">
      <button className="clear-btn" onClick={onClick}>
        Clear
      </button>
    </section>
  );
}

export default ClearButton;
