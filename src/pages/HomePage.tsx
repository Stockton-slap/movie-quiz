import React from "react";

export default function HomePage() {
  const handleClick = () => {
    window.location.href = "/quiz";
  };

  return (
    <>
      <div className="bg-hero h-[100vh] flex flex-col justify-center items-center">
        {/* <img
         src="/images/background/welcome-background.png"
         alt="Welcome background"
         className="max-w-none"
       /> */}
        <h1 className="text-white text-h1">Welcome To The Movie Quiz</h1>
        <button className="btn mt-[40px]" type="button" onClick={handleClick}>
          Play now
        </button>
      </div>
    </>
  );
}
