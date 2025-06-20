
# ✨ Smart Skin Analyzer

An intelligent, AI-powered web application that analyzes skin from uploaded or captured images and provides detailed skincare insights and recommendations using Google's **Gemini 1.5 Flash** model.

---

## 🧪 Features

- 📸 Upload or capture an image of your skin  
- 🤖 Analyze the image using Gemini AI API  
- 🧾 View AI-detected skin concerns (e.g., acne, dryness, redness, wrinkles)  
- 💡 Receive personalized skincare tips  
- 🎨 Beautiful and responsive UI with drag-and-drop, 3D buttons, and animation effects  

---

## 📂 Project Structure

```
skin-analysis-app/
├── public/
├── src/
│   ├── components/
│   │   ├── ImageUploader.js
│   │   ├── ResultDisplay.js
│   │   ├── WebcamCapture.js
│   │   └── yourStylesheet.css
│   ├── api.js
│   └── App.js
├── .env
├── package.json
└── README.md
```

---

## 🔧 Setup Instructions

### ✅ Prerequisites

- [Node.js](https://nodejs.org) and npm installed  
- Google Gemini API Key (get one from [Google MakerSuite](https://makersuite.google.com/app))

---

### 📥 1. Clone the Repository

```bash
git clone https://github.com/<your-username>/skin-analysis-app.git
cd skin-analysis-app
```

---

### 🔑 2. Set Up Environment Variables

Create a `.env` file in the root directory and add the following line:

```env
REACT_APP_GEMINI_API_KEY=your_gemini_api_key_here
```

> ⚠️ **Important**: Never share your API key publicly.

---

### 📦 3. Install Dependencies

```bash
npm install
```

---

### ▶️ 4. Run the Application

```bash
npm start
```

This will start the React development server at:  
📍 [http://localhost:3000](http://localhost:3000)

---

## 🔍 Usage

1. Upload an image from your device or capture using your webcam.  
2. Click the **"🔍 Analyze Skin"** button.  
3. The Gemini AI model will process your image.  
4. Get a detailed analysis of your skin and personalized skincare tips.  

---

## 🛠 Technologies Used

| Tech            | Description                              |
|-----------------|------------------------------------------|
| React.js        | Front-end framework                      |
| CSS3            | Styling and animations                   |
| react-webcam    | Capture images from webcam               |
| Google Gemini   | AI model for image-based skin analysis   |
| dotenv          | Environment variable management          |

---

## 🌈 Styling Highlights

- 🎨 Custom purple-themed gradient buttons  
- 🖼️ Drag-and-drop image upload with hover effects  
- 🧊 Animated cards for a modern layout  
- 📱 Fully responsive design for mobile and desktop  
- 🔄 Smooth loader animation for API waiting state  
