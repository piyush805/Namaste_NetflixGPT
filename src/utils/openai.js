import OpenAI from "openai";
import { OPENAI_KEY } from "./constants";

const openai = new OpenAI({
  apiKey: OPENAI_KEY, // This is the default and can be omitted
  dangerouslyAllowBrowser: true,
});

export const openAiQuery = (msg) =>
  "Act as a Movie Recommendation system and suggestion some movies for the query " +
  msg +
  ". Only give me names of 5 movies, comma seperated like the example result given ahead. Example: Result : Gadar,Sholay,Don,Golmaal,Koi Mil Gaya.";

export const openAiAPI = async (message) => {
  const chatCompletion = await openai.chat.completions.create({
    messages: [{ role: "user", content: openAiQuery(message) }],
    model: "gpt-3.5-turbo",
  });
  return chatCompletion;
};
