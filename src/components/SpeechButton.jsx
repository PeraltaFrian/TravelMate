import React from 'react';
import { Volume2 } from 'lucide-react';

function SpeechButton({ text, onClick, label }) {
  return (
    <button className="speaker-btn" onClick={onClick}>
      <Volume2 size={24} /> {label}
    </button>
  );
}

export default SpeechButton;
