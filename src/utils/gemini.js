// Install:
// npm install @google/genai

import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: "AIzaSyADgj5_YiSETgIm3mNUsZa6r2z8OMo4nfw"
});

export async function askAI(prompt) {

  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",

    contents: [
      {
        role: "user",
        parts: [
          {
            text: prompt
          }
        ]
      }
    ]

  });

  return response.text;
}