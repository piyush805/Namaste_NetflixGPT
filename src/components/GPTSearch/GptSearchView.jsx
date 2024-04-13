import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BACKGROUND_IMG } from "../../utils/constants";

const GptSearchView = () => {
  return (
    <div className="text-white  h-screen">
      <div className="absolute -z-20 ">
        <img
          src={BACKGROUND_IMG}
          alt="logo"
          className="w-screen h-screen  object-cover "
        />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearchView;
