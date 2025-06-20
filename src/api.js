const GEMINI_API_KEY = process.env.REACT_APP_GEMINI_API_KEY;

// Main function to analyze skin using Gemini 1.5 Flash
export async function analyzeSkin(base64Image) {
  const requestBody = {
    contents: [{
      role: "user",
      parts: [
        {
          text: "Analyze this image for skin issues. List any skin problems (like acne, dryness, redness, wrinkles, etc.) and give detailed skincare recommendations to address them. and give me output without *"
        },
        {
          inlineData: {
            mimeType: "image/jpeg",
            data: base64Image.split(",")[1], // remove data:image/jpeg;base64,
          }
        }
      ]
    }]
  };

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${GEMINI_API_KEY}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(requestBody)
    }
  );

  const data = await response.json();

  if (data.candidates?.[0]?.content?.parts?.[0]?.text) {
    return data.candidates[0].content.parts[0].text;
  } else {
    return "⚠️ No response from Gemini.";
  }
}
