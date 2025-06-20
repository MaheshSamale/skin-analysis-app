import React, { useRef } from 'react';
import Webcam from 'react-webcam';
import './yourStylesheet.css';

export default function WebcamCapture({ onCapture }) {
  const webcamRef = useRef(null);

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    onCapture(imageSrc);
  };

  return (
    <div className="webcam-container">
      <Webcam
        className="webcam"
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
      />
      <button className="purple-button" onClick={capture}>📸 Capture</button>
    </div>
  );
}
