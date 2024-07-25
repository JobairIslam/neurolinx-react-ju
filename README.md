This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
import { useState } from "react";
import Image from "next/image";

const Accordion = () => {
const [activeIndex, setActiveIndex] = useState(null);

const faqs = [
{
iconSrc: "/assets/img/faq-icon.svg",
question: "What do our Subscription Plans and Add-ons offer?",
answer:
"Neurolinx is cutting-edge technology that offers advanced AI-driven contextual search and recommendations. This innovative solution brings tangible advantages such as improved longtail search, enhanced personalization, and streamlined operations.",
},
{
iconSrc: "/assets/img/faq-icon.svg",
question: "What is the Mechanism Behind Functionality?",
answer:
"Neurolinx is cutting-edge technology that offers advanced AI-driven contextual search and recommendations. This innovative solution brings tangible advantages such as improved longtail search, enhanced personalization, and streamlined operations.",
},
{
iconSrc: "/assets/img/faq-icon.svg",
question: "What Advantages Does Search Offer?",
answer:
"Neurolinx is cutting-edge technology that offers advanced AI-driven contextual search and recommendations. This innovative solution brings tangible advantages such as improved longtail search, enhanced personalization, and streamlined operations.",
},
{
iconSrc: "/assets/img/faq-icon.svg",
question: "What Functionalities does the solution offer?",
answer:
"Neurolinx is cutting-edge technology that offers advanced AI-driven contextual search and recommendations. This innovative solution brings tangible advantages such as improved longtail search, enhanced personalization, and streamlined operations.",
},
{
iconSrc: "/assets/img/faq-icon.svg",
question: "What Advantages Does Personalization Offer?",
answer:
"Neurolinx is cutting-edge technology that offers advanced AI-driven contextual search and recommendations. This innovative solution brings tangible advantages such as improved longtail search, enhanced personalization, and streamlined operations.",
},
{
iconSrc: "/assets/img/faq-icon.svg",
question: "How is it utilized for personalization?",
answer:
"Neurolinx is cutting-edge technology that offers advanced AI-driven contextual search and recommendations. This innovative solution brings tangible advantages such as improved longtail search, enhanced personalization, and streamlined operations.",
},
];

const toggleAccordion = (index) => {
setActiveIndex(activeIndex === index ? null : index);
};

return (
<div className="flex flex-col gap-4 w-full lg:max-w-[850px]">
{faqs.map((faq, index) => (
<div
key={index}
className={`p-6 border rounded-lg according border-b-600 bg-gd-tertiary ${
            activeIndex === index ? "bg-faq-card-item" : ""
          }`} >
<div
className="flex items-start gap-2 text-base font-medium cursor-pointer according-header text-w-500"
onClick={() => toggleAccordion(index)} >
<Image width={28} height={28} src={faq.iconSrc} alt="icon" />
{faq.question}
</div>
<div
className={`according-content pl-[40px] ${
              activeIndex === index ? "block" : "hidden"
            }`} >
<p className="pt-4 text-base text-w-100">{faq.answer}</p>
</div>
</div>
))}
</div>
);
};

export default Accordion;

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const VideoSection = () => {
const [isVideoVisible, setIsVideoVisible] = useState(false);
const videoContainerRef = useRef(null);
const videoRef = useRef(null);

useEffect(() => {
const handleClickOutside = (event) => {
if (
videoContainerRef.current &&
!videoContainerRef.current.contains(event.target)
) {
setIsVideoVisible(false);
if (videoRef.current) {
videoRef.current.pause();
videoRef.current.currentTime = 0;
}
}
};

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);

}, []);

const handlePlayClick = () => {
setIsVideoVisible(true);
if (videoRef.current) {
videoRef.current.play();
}
};

const handleCloseClick = (e) => {
e.preventDefault();
setIsVideoVisible(false);
if (videoRef.current) {
videoRef.current.pause();
videoRef.current.currentTime = 0;
}
};

return (
<div className="py-24">
<div className="container px-5 mx-auto xl:px-0">
<div className="flex flex-col items-center justify-center">
<h2 className="gd-title mb-16 text-center tracking-[-0.02em] lg:leading-[64px] text-3xl md:text-5xl font-semibold">
Beyond Binary Uniquely
<span className="inline-block lg:block"></span>Inclusive Prompt
</h2>
<div className="relative">
<Image
              width={1162}
              height={576}
              src="/img/video.png"
              alt="video image demo"
              className="w-full"
            />
<div
              className="absolute flex items-center justify-center w-16 h-16 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full cursor-pointer top-1/2 left-1/2 play-btn"
              onClick={handlePlayClick}
            >
<svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-8 h-8 text-black"
                viewBox="0 0 16 16"
              >
<path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393" />
</svg>
</div>
{isVideoVisible && (
<div
                ref={videoContainerRef}
                className="absolute inset-0 flex items-center justify-center"
              >
<video
                  src="https://cdn.pixabay.com/video/2023/07/19/172156-846731269_large.mp4"
                  className="absolute inset-0 w-full"
                  autoPlay
                  muted
                  controls
                  ref={videoRef}
                ></video>
<a href="#" onClick={handleCloseClick}>
<svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-x-circle-fill absolute top-5 right-5 w-[30px] h-[30px] text-w-800"
                    viewBox="0 0 16 16"
                  >
<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z"></path>
</svg>
</a>
</div>
)}
</div>
</div>
</div>
</div>
);
};

export default VideoSection;
