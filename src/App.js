
import React, { useState } from 'react';
import ImageUploader from './components/ImageUploader';
import WebcamCapture from './components/WebcamCapture';
import ResultDisplay from './components/ResultDisplay';
import { analyzeSkin } from './api';
import './components/yourStylesheet.css';
function App() {
  const [image, setImage] = useState(null);
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    if (!image) return;
    setLoading(true);
    setResult('');
    try {
      const analysis = await analyzeSkin(image);
      setResult(analysis);
    } catch (error) {
      setResult(' Error analyzing image. Please try again.');
      console.error('Gemini API Error:', error);
    }
    setLoading(false);
  };

  return (
    <div className="landing-page">
      {/* Header */}
      <header className="hero-section">
        <h1 className="hero-title">✨ Smart Skin Analyzer</h1>
        <p className="hero-subtitle">
          Upload or capture a photo and let AI analyze your skin health in seconds!
        </p>
      </header>

      {/* How it works */}
      <section className="how-it-works">
        <h2>🛠️ How It Works</h2>
        <div className="card-container">
          <div className="info-card">
            <h3>Upload</h3>
            <p>Choose an image from your device or click a real-time selfie.</p>
          </div>
          <div className="info-card">
            <h3>Analyze</h3>
            <p>Our AI uses Gemini Flash to detect common skin concerns.</p>
          </div>
          <div className="info-card">
            <h3>Get Tips</h3>
            <p>Receive personalized skincare recommendations instantly.</p>
          </div>
        </div>
      </section>

      {/* Upload / Capture */}
      <section className="interaction-section">
        <ImageUploader onImageSelect={setImage} />
        <WebcamCapture onCapture={setImage} />

        {image && (
  <div className="preview-card">
    <img src={image} alt="Preview" className="preview-image" />
    <div className="button-container">
      <button className="purple-button" onClick={handleAnalyze} disabled={loading}>
        {loading ? 'Analyzing...' : '🔍 Analyze Skin'}
      </button>
    </div>
  </div>
)}

      </section>

      {/* Result */}
      <section className="result-section">
        {loading && <div className="loader"></div>}
        <ResultDisplay result={result} />
      </section>

      {/* Footer */}
      <footer className="footer">
        © {new Date().getFullYear()} Smart Skin Analyzer. Powered by Gemini AI.
      </footer>
    </div>
  );
}

export default App;
