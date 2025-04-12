import React, { useState } from 'react';
import axios from 'axios';
import LanguageSelector from './LanguageSelector';
import TranslatorInput from './TranslatorInput';
import TranslatorOutput from './TranslatorOutput';
import ErrorDisplay from './ErrorDisplay';
import ClearButton from './ClearButton';
import '../styles/Translator.css';

const Translator = ({ languages }) => {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [sourceLanguage, setSourceLanguage] = useState('en');
  const [targetLanguage, setTargetLanguage] = useState('es');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const speakText = (text, language) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = language === 'en' ? 'en-US' : language === 'es' ? 'es-ES' : 'en-US';
    window.speechSynthesis.speak(utterance);
  };

  const handleTranslate = async () => {
    if (!inputText.trim()) {
      setError('Please enter some text to translate.');
      return;
    }

    setLoading(true);
    setError('');
    setOutputText('');

    try {
      const apiKey = process.env.REACT_APP_MYMEMORY_API_KEY;
      const response = await axios.get('https://api.mymemory.translated.net/get', {
        params: {
          q: inputText,
          langpair: `${sourceLanguage}|${targetLanguage}`,
          key: apiKey,
        },
      });

      setOutputText(response.data.responseData.translatedText);
      speakText(inputText, sourceLanguage);
      speakText(response.data.responseData.translatedText, targetLanguage);
    } catch (error) {
      console.error('Error translating text:', error);
      setError('Translation failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setInputText('');
    setOutputText('');
    setError('');
  };

  return (
    <section className="translator-container">
      <TranslatorInput inputText={inputText} setInputText={setInputText} speakText={speakText} />
      <section className="centre-section">
        <section className="language-sector-section">
          <LanguageSelector 
            label="From" 
            language={sourceLanguage} 
            onChange={(e) => setSourceLanguage(e.target.value)} 
            languages={languages} 
          />
          <LanguageSelector 
            label="To" 
            language={targetLanguage} 
            onChange={(e) => setTargetLanguage(e.target.value)} 
            languages={languages} 
          />
        </section>
        <section className="button-section">
          <button className="translate-btn" onClick={handleTranslate} disabled={loading}>
            {loading ? 'Translating...' : 'Translate'}
          </button>
          <ClearButton onClick={handleClear} />
        </section>
      </section>
      {error && <ErrorDisplay message={error} />}
      <TranslatorOutput outputText={outputText} speakText={speakText} error={error} />
    </section>
  );
};

export default Translator;
