import React from "react";

export default function Home() {
  const handleClick = () => {
    window.location.href = "/rounds";
  };

  return (
    <>
      <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-full flex flex-col items-center justify-center">
        <h1 className="text-white text-h1">
          Welcome to the Ultimate Movie Quiz!
        </h1>

        <i>
          <p className="text-white mt-[40px]">
            Lights, Camera, Action! Dive into the world of movies with our
            exciting quiz. Challenge yourself with a variety of movie-related
            questions. From classic films to the latest blockbusters, our quiz
            covers it all!
          </p>
        </i>

        <button className="btn mt-[80px]" type="button" onClick={handleClick}>
          Play now
        </button>
      </div>
    </>
  );
}
