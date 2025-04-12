import React from 'react';
import SpeechButton from './SpeechButton';

function TranslatorOutput({ outputText, speakText, error }) {
  const handlePronounce = () => {
    if (outputText.trim()) {
      speakText(outputText, 'es');  
    }
  };

  return (
    <section className="output-section">
      <h3>Translated Text</h3>
      <textarea readOnly value={outputText} />
        <section className="pronounce-btn-container">
            <SpeechButton text={outputText} onClick={handlePronounce} label="Pronounce (Translated)" />
        </section>
        {error && <p className="error">{error}</p>}
    </section>
  );
}

export default TranslatorOutput;

