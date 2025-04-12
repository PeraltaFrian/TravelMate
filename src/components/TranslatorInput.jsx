import React from 'react';
import SpeechButton from './SpeechButton';

function TranslatorInput({ inputText, setInputText, speakText }) {
  return (
    <section className="input-section">
      <h3>Original Text</h3>
      <textarea
        placeholder="Enter text to translate"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <SpeechButton text={inputText} onClick={() => speakText(inputText, 'en')} label="Pronounce (Original)" />
    </section>
  );
}

export default TranslatorInput;
