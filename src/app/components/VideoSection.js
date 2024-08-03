"use client";

import { useEffect } from "react";
import Image from "next/image";

const VideoSection = () => {
  useEffect(() => {
    const playBtn = document.querySelector(".play-btn");
    const videoContainer = document.getElementById("videoContainer");
    const closeBtn = document.getElementById("closeBtn");
    const video = document.getElementById("video");

    if (playBtn && videoContainer && closeBtn && video) {
      playBtn.addEventListener("click", () => {
        videoContainer.classList.remove("hidden");
        video.play();
      });

      closeBtn.addEventListener("click", (e) => {
        e.preventDefault();
        videoContainer.classList.add("hidden");
        video.pause();
        video.currentTime = 0;
      });
    }
  }, []);

  return (
    <div className="py-24 bg-center bg-no-repeat bg-cover bg-binary">
      <div className="container px-5 mx-auto xl:px-0">
        <div className="flex flex-col items-center justify-center">
          <h2 className="gd-title mb-16 text-center tracking-[-0.02em] lg:leading-[64px] text-3xl md:text-5xl font-semibold">
            Beyond Binary Uniquely
            <span className="inline-block lg:block"></span>Inclusive Prompt
          </h2>
          <div className="relative">
            <Image
              src="/img/video.png"
              alt="video image demo"
              width={1290}
              height={640}
            />
            <div className="absolute flex items-center justify-center w-16 h-16 -translate-x-1/2 -translate-y-1/2 cursor-pointer top-1/2 left-1/2 play-btn">
              <svg
                width="96"
                height="72"
                viewBox="0 0 96 72"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="96" height="72" rx="36" fill="white" />
                <path
                  d="M43.0738 48.044C41.7423 48.8913 40 47.9348 40 46.3567V25.6433C40 24.0652 41.7423 23.1087 43.0738 23.956L59.3485 34.3127C60.5835 35.0986 60.5835 36.9014 59.3485 37.6873L43.0738 48.044Z"
                  fill="black"
                />
              </svg>
            </div>
            <div id="videoContainer" className="hidden">
              <video
                src="https://cdn.pixabay.com/video/2023/07/19/172156-846731269_large.mp4"
                className="absolute inset-0 w-full"
                autoPlay
                muted
                controls
                id="video"
              ></video>
              <a href="#" id="closeBtn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-x-circle-fill absolute top-5 right-5 w-[30px] h-[30px] text-w-800"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
