import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_REACT_APP_OPENAI_KEY, // This is the default and can be omitted
  dangerouslyAllowBrowser: true,
});

export const openAiQuery = (msg) =>
  "Act as a Movie Recommendation system and suggestion some movies for the query " +
  msg +
  ". Only give me names of 5 movies, comma separated like the example result given ahead. Example: Result : Gadar, Sholay, Don,Golmaal, Koi Mil Gaya.";

export const openAiAPI = async (message) => {
  const chatCompletion = await openai.chat.completions.create({
    messages: [{ role: "user", content: openAiQuery(message) }],
    model: "gpt-3.5-turbo",
  });
  return chatCompletion;
};
