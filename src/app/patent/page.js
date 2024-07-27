import React from "react";
import Header from "../components/Header";
import PatentCard from "../components/PatentCard";
import FooterTop from "../components/FooterTop";
import Footer from "../components/Footer";
import Image from "next/image";
export default function page() {
  return (
    <div className="font-normal bg-center bg-no-repeat bg-cover bg-body-gd lg:bg-patent">
      <Header />
      <div className="pt-[135px] lg:pt-[164px] pb-24">
        <div className="container px-5 mx-auto xl:px-0">
          <h1 className="gd-title tracking-[-0.02em] text-center text-3xl md:text-4xl lg:text-64x leading-tight md:leading-relaxed lg:leading-[84px] font-semibold">
            Patents Registered
            <span className="inline-block lg:block"></span>by Neurolinx
          </h1>
          <p className="mt-6 text-base text-center md:text-xl text-w-100">
            Neurolinx holds a strong global patent portfolio covering AI search
            solutions,
            <span className="inline-block lg:block"></span>AI recommendation
            solutions, and live-updated AI content.
          </p>
        </div>
      </div>
      <div className="lg:py-24">
        <div className="container px-5 mx-auto xl:px-0">
          <h2 className="gd-title mb-16 text-center tracking-[-0.02em] lg:leading-[64px] text-3xl md:text-5xl font-semibold">
            Global Patent
            <span className="block"></span>Portfolios
          </h2>
          <div className="p-6 rounded-lg md:p-12 bg-gd-tertiary">
            <h3 className="mb-6 text-xl font-medium md:mb-12 md:text-2xl text-w-500">
              Patents 32 &amp; Patent Applications 88 across the world.
            </h3>
            <Image
              width={1198}
              height={336}
              src="/img/patent-graph.png"
              alt="patent-graph"
            />
          </div>
          <div className="flex justify-center gap-3 mt-16 mb-12">
            <a
              href="#"
              className="px-6 py-[14px] rounded-full border border-tropical-indigo text-base font-medium bg-transparent text-tropical-indigo"
              id="patents-btn"
            >
              Patents
            </a>
            <a
              href="#"
              className="px-6 py-[14px] rounded-full border border-b-600 text-base font-medium bg-transparent text-w-100"
              id="patent-applications-btn"
            >
              Patents Applications
            </a>
          </div>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px]"
            id="cards-grid"
          >
            <PatentCard
              number="01"
              iconSrc="/img/icons/check-rounded.svg"
              patentNo="Patent No. 22-232002"
              description="The invention enables users to search using emoticons within a chat interface and share search results with chat partners."
            />
            <PatentCard
              number="02"
              iconSrc="/img/icons/check-rounded.svg"
              patentNo="Patent No. 22-255690"
              description="System and method for object search based on color sentiment, using an integrated color and emotion data model."
            />
            <PatentCard
              number="03"
              iconSrc="/img/icons/check-rounded.svg"
              patentNo="Patent No. 21-2806896"
              description="Search system preferences based on a chosen field, allowing search using both objective and subjective properties."
            />
            <PatentCard
              number="04"
              iconSrc="/img/icons/check-rounded.svg"
              patentNo="Patent No. 21-2918378"
              description="Search service using emoticons with a user terminal and search server, enabling search result display and sharing within the chat window."
            />
            <PatentCard
              number="05"
              iconSrc="/img/icons/check-rounded.svg"
              patentNo="Patent No. 21-2030415"
              description="Search system using object properties, employing an algorithm to extract and suggest keywords, completing sentences based on user preferences."
            />
            <PatentCard
              number="06"
              iconSrc="/img/icons/check-rounded.svg"
              patentNo="Patent No. 21-2057089"
              description="Color-sensitive object search system utilizing an integrated color and emotion data attribute model algorithm."
            />
            <PatentCard
              number="07"
              iconSrc="/img/icons/check-rounded.svg"
              patentNo="Patent No. 21-2066031"
              description="Search method using property language automatically generates keywords by analyzing co-occurring words."
            />
            <PatentCard
              number="08"
              iconSrc="/img/icons/check-rounded.svg"
              patentNo="Patent No. 21-3229725"
              description="Enables displaying search results in the chat window using graphical objects and sharing the search interface with chat partners."
            />
            <PatentCard
              number="09"
              iconSrc="/img/icons/check-rounded.svg"
              patentNo="Patent No. 21-3241256"
              description="User terminal and retrieval server allow emoticon-based search, displaying results in chat and enabling interface sharing."
            />
            <PatentCard
              number="10"
              iconSrc="/img/icons/check-rounded.svg"
              patentNo="Patent No. 21-3295073"
              description="Voice input system and method provide relevant information based on voice inputs, improving user interaction."
            />
            <PatentCard
              number="11"
              iconSrc="/img/icons/check-rounded.svg"
              patentNo="Patent No. 21-3206797"
              description="Recommend items based on locations using Neurolinx, enhancing personalized suggestions for hotels and more."
            />
            <PatentCard
              number="12"
              iconSrc="/img/icons/check-rounded.svg"
              patentNo="Patent No. 21-3337853"
              description="Algorithm automatically builds Neurolinx by analyzing frequently
co-occurring words, enhancing information provision."
            />
          </div>
          <div className="flex items-center justify-center mt-6 md:mt-12">
            <a
              href="#"
              className="px-6 py-[14px] rounded-full border border-tropical-indigo text-base font-medium text-w-900 bg-gd-secondary"
              id="load-more-btn"
            >
              Load More
            </a>
          </div>
        </div>
      </div>

      <FooterTop />
      <Footer />
    </div>
  );
}
