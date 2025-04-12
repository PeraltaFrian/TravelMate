import React from 'react';

function LanguageSelector({ label, language, onChange, languages }) {
  return (
    <section className="language-select">
      <label htmlFor={label}>{label}: </label>
      <select id={label} value={language} onChange={onChange}>
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.name}
          </option>
        ))}
      </select>
    </section>
  );
}

export default LanguageSelector;
