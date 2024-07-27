import React from "react";
import Header from "../components/Header";
import FooterTop from "../components/FooterTop";
import Footer from "../components/Footer";
import UpdateCard from "../components/UpdateCard";

export default function page() {
  return (
    <div className="font-normal bg-center bg-no-repeat bg-cover bg-body-gd lg:bg-blog">
      <Header />
      <div className="pt-[135px] lg:pt-[164px] pb-24">
        <div className="container px-5 mx-auto xl:px-0">
          <h1 className="gd-title tracking-[-0.02em] text-center text-3xl md:text-4xl lg:text-64x leading-tight md:leading-relaxed lg:leading-[84px] font-semibold">
            Blog &amp; Updates
            <span className="block"></span>by Neurolinx
          </h1>
          <p className="mt-6 text-base text-center md:text-xl text-w-100">
            Neurolinx blog for the latest news, tips, tricks, and how-to
            articles
            <span className="inline-block lg:block"></span>on Neurolinx&apos;s
            advanced synthetic monitoring platform.
          </p>
        </div>
      </div>
      <div className="lg:py-24">
        <div className="container px-5 mx-auto xl:px-0">
          <h2 className="gd-title mb-16 text-center tracking-[-0.02em] lg:leading-[64px] text-3xl md:text-5xl font-semibold">
            Explore Neurolinx&apos;s
            <span className="block"></span>Engineering Approach
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
            <UpdateCard
              imageSrc="/img/blog1.png"
              heading="AI Partners with Megazone Cloud to Enhance GenAI Adoption "
              headingHref="#"
              tag1="Prompt Engineering"
              tag1Href="#"
              tag2="AI Use Cases"
              tag2Href="#"
            />
            <UpdateCard
              imageSrc="/img/blog2.png"
              heading="AI's Revolutionary Impact Transforming Drama Discovery for Fans"
              headingHref="#"
              tag1="Streaming"
              tag1Href="#"
              tag2="AI Search"
              tag2Href="#"
            />
            <UpdateCard
              imageSrc="/img/blog3.png"
              heading="Simplified AI Applications Streamlining Complexity for Enhanced Utility "
              headingHref="#"
              tag1="AI Automation"
              tag1Href="#"
              tag2="Generative AI Use Cases"
              tag2Href="#"
            />
            <UpdateCard
              imageSrc="/img/blog4.png"
              heading="Enhanced Product Discovery through
AI Merchandising"
              headingHref="#"
              tag1="Artificial Intelligence"
              tag1Href="#"
              tag2="Merchandising"
              tag2Href="#"
            />
            <UpdateCard
              imageSrc="/img/blog1.png"
              heading="AI's Revolutionary Impact Transforming Drama Discovery for Fans"
              headingHref="#"
              tag1="Streaming"
              tag1Href="#"
              tag2="AI Search"
              tag2Href="#"
            />
            <UpdateCard
              imageSrc="/img/blog2.png"
              heading="AI Partners with Megazone Cloud to Enhance GenAI Adoption "
              headingHref="#"
              tag1="Prompt Engineering"
              tag1Href="#"
              tag2="AI Use Cases"
              tag2Href="#"
            />
            <UpdateCard
              imageSrc="/img/blog3.png"
              heading="Enhanced Product Discovery through
AI Merchandising"
              headingHref="#"
              tag1="Artificial Intelligence"
              tag1Href="#"
              tag2="Merchandising"
              tag2Href="#"
            />
            <UpdateCard
              imageSrc="/img/blog4.png"
              heading="Simplified AI Applications Streamlining Complexity for Enhanced Utility "
              headingHref="#"
              tag1="AI Automation"
              tag1Href="#"
              tag2="Generative AI Use Cases"
              tag2Href="#"
            />
          </div>
          <div className="flex justify-center mt-16">
            <nav className="flex items-center justify-center gap-1 p-3 border rounded-full border-b-600">
              <button
                type="button"
                className="inline-flex items-center justify-center px-4 py-3 border rounded-full border-tropical-indigo bg-gd-secondary hover:bg-gray-100 focus:outline-none disabled:opacity-50 disabled:pointer-events-none text-w-900"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.06457 8.79998L9.14048 14.8759L8 16L0 8L8 0L9.14048 1.12408L3.06457 7.20002L16 7.20002V8.79998L3.06457 8.79998Z"
                    fill="#EEEBFF"
                  />
                </svg>

                <span aria-hidden="true" className="sr-only">
                  Previous
                </span>
              </button>
              <button
                type="button"
                className="flex justify-center items-center py-2 px-[18px] text-base rounded-full focus:outline-none focus:text-tropical-indigo active:text-tropical-indigo focus:bg-b-600 disabled:opacity-50 disabled:pointer-events-none text-w-100"
                aria-current="page"
              >
                1
              </button>
              <button
                type="button"
                className="flex justify-center items-center py-2 px-[18px] text-base rounded-full focus:outline-none focus:text-tropical-indigo active:text-tropical-indigo focus:bg-b-600 disabled:opacity-50 disabled:pointer-events-none text-w-100"
                aria-current="page"
              >
                2
              </button>
              <button
                type="button"
                className="flex justify-center items-center py-2 px-[18px] text-base rounded-full focus:outline-none focus:text-tropical-indigo active:text-tropical-indigo focus:bg-b-600 disabled:opacity-50 disabled:pointer-events-none text-w-100"
                aria-current="page"
              >
                3
              </button>
              <button
                type="button"
                className="inline-flex items-center justify-center px-4 py-3 border rounded-full border-tropical-indigo bg-gd-secondary hover:bg-gray-100 focus:outline-none disabled:opacity-50 disabled:pointer-events-none text-w-900"
              >
                <span aria-hidden="true" className="sr-only">
                  Next
                </span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.9354 7.20002L6.85952 1.12408L8 -6.99382e-07L16 8L8 16L6.85952 14.8759L12.9354 8.79998L6.29446e-07 8.79997L7.69318e-07 7.20002L12.9354 7.20002Z"
                    fill="#EEEBFF"
                  />
                </svg>
              </button>
            </nav>
          </div>
        </div>
      </div>
      <FooterTop />
      <Footer />
    </div>
  );
}
