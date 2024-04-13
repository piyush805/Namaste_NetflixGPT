import React from "react";
import useMovieTrailer from "../../hooks/useMovieTrailer";
import { useSelector } from "react-redux";

const VideoBackground = (props) => {
  const { movieId } = props;
  useMovieTrailer(movieId);
  const trailerVideo = useSelector((state) => state.movies?.trailerVideo);

  return (
    <div className="mt-12  md:mt-8 lg:mt-0 -z-50">
      <iframe
        className="w-screen aspect-video "
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&showinfo=0&controls=0&repeat=1&mute=1&loop=1`}
        title="YouTube video player"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
