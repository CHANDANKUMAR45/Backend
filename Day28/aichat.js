import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({apiKey:"AIzaSyAJA8E3Oeh-kn4B-EomrapuXhASPg6itew"});

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: "How are you",
  });
  console.log(response.text);
}

await main();

