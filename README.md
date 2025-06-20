
# ✨ Smart Skin Analyzer

An intelligent, AI-powered web application that analyzes skin from uploaded or captured images and provides detailed skincare insights and recommendations using Google's Gemini 1.5 Flash model.

---

## 🧪 Features

- 📸 Upload or capture an image of your skin
- 🤖 Analyze the image using Gemini AI API
- 🧾 View AI-detected skin concerns (acne, dryness, wrinkles, etc.)
- 💡 Get personalized skincare tips
- 🎨 Beautiful UI with drag-and-drop, 3D buttons, and animation effects

---

## 📂 Project Structure

skin-analysis-app/
├── public/
├── src/
│ ├── components/
│ │ ├── ImageUploader.js
│ │ ├── ResultDisplay.js
│ │ ├── WebcamCapture.js
│ │ └── yourStylesheet.css
│ ├── api.js
│ └── App.js
├── .env
├── package.json
└── README.md

yaml
Copy
Edit

---

## 🔧 Setup Instructions

### Prerequisites
- Node.js and npm installed (Download: https://nodejs.org)
- Google Gemini API Key (from https://makersuite.google.com/app)

---

### 1. 📥 Clone the Repository

```bash
git clone https://github.com/<your-username>/skin-analysis-app.git
cd skin-analysis-app
2. 🔑 Set up Environment Variables
Create a .env file in the root directory:


REACT_APP_GEMINI_API_KEY=your_gemini_api_key_here
3. 📦 Install Dependencies

npm install
4. 🧪 Run the App

npm start
This will start the React development server on http://localhost:3000.

🔍 Usage
Upload an image or use your webcam to capture one.

Click Analyze Skin.

Wait a few seconds while Gemini analyzes your skin.

View your analysis result and skincare suggestions.

🛠 Technologies Used
React.js – UI framework

CSS3 – Styling & animations

Webcam.js – Camera capture

Gemini Flash API – Skin analysis AI

🌈 Styling Highlights
🎨 Purple gradient buttons

🖼️ 3D drag-and-drop uploader

🧊 Animated cards and loader

📱 Responsive design
