import React from 'react';
import './yourStylesheet.css';

export default function ResultDisplay({ result }) {
  if (!result) return null;

  return (
    <div className="result-container">
      <h2 className="result-title">🧾 Skin Analysis Result</h2>
      <div className="result-content">{result}</div>
    </div>
  );
}
