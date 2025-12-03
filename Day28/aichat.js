import { GoogleGenAI } from "@google/generative-ai";

const ai = new GoogleGenAI({apiKey:"AIzaSyAJA8E3Oeh-kn4B-EomrapuXhASPg6itew"});

async function main(msg) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: msg
  });
  return response.text;
}

// await main();

module.exports=main;