import { GoogleGenAI } from "@google/genai";

export const getPetAdvice = async (userPrompt: string) => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userPrompt,
      config: {
        systemInstruction: "You are an AI assistant for 'PETS Veterinary - London Pet Supplies'. You provide friendly, professional, and caring advice to pet owners. You should mention that for specific medical emergencies, they should contact a veterinarian directly. Keep answers concise and helpful. Refer to 'PETS Veterinary' if appropriate.",
        temperature: 0.7,
      },
    });

    return response.text || "I'm sorry, I couldn't generate a response right now. Please try again or call us directly!";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Something went wrong. Please call our store for immediate assistance!";
  }
};