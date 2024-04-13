import React from "react";
import lang from "../../utils/languageConstants";
import { useSelector } from "react-redux";

const VideoTitle = (props) => {
  const selectedLanguage = useSelector((state) => state.config.lang);
  const { title, overview } = props;
  return (
    <div className="pt-[60%] sm:pt-96 md:pt-36 lg:pt-64 px-4 sm:px-12  lg:px-16 text-white text-shadow absolute bg-gradient-to-r from-black/75  w-screen aspect-video ">
      <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold drop-shadow-lg w-full truncate">
        {title}
      </h1>
      <p className="hidden md:block py-6 text-sm sm:text-md md:text-lg w-2/3 sm:w-2/3 md:w-1/2 lg:w-1/3 drop-shadow-lg h-36 sm:h-48  text-clip overflow-hidden">
        {overview}
      </p>
      <div className="flex gap-4 text-sm sm:text-md md:text-xl">
        <div className="bg-slate-50/75 px-2 py-1 sm:px-4 sm:py-2 text-gray-800 font-bold rounded w-16 sm:w-20 md:w-28 flex items-center justify-center gap-2 cursor-pointer md:hover:bg-slate-50/50">
          <div>▶️ {lang[selectedLanguage].playButton}</div>
        </div>
        <div className="bg-zinc-400/75 px-3 py-1 sm:px-4 sm:py-2 text-white font-bold rounded min-w-16 sm:min-w-20 md:min-w-24 flex items-center justify-center gap-2 cursor-pointer md:hover:bg-zinc-400/50 ">
          <div>{lang[selectedLanguage].moreInfoButton}</div>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
