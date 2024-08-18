"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Image from "next/image";
import VideoSection from "./components/VideoSection";
import Link from "next/link";
import UpdateCard from "./components/UpdateCard";
import FAQSection from "./components/FAQSection";
import FooterTop from "./components/FooterTop";
import Footer from "./components/Footer";
import "./globals.css";
import updateCardData from "/src/data/updateCardData.json";
export default function Home() {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <div className="overflow-hidden font-normal bg-b-900">
      <Header />
      <Hero />
      <div className="py-8 overflow-hidden bg-center bg-no-repeat bg-cover lg:py-24 bg-semantic">
        <div className="container px-5 mx-auto xl:px-0">
          <div className="flex flex-col items-center justify-center">
            <h2
              data-aos="fade-up"
              className="gd-title mb-16 text-center tracking-[-0.02em] lg:leading-[64px] text-3xl md:text-5xl font-semibold"
            >
              Revolutionize Your Business
              <span className="inline-block md:block"></span> with Semantic AI
            </h2>
            <div className="flex flex-col gap-[30px] overflow-hidden">
              <div className="flex flex-col lg:flex-row gap-[30px]">
                <div
                  data-aos="fade-up"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                  className="p-8 border rounded-lg md:p-12 border-b-600 bg-gd-tertiary max-w-[740px] overflow-hidden"
                >
                  <h3 className="mb-4 md:leading-[42px] text-2xl md:text-32x font-medium text-w-500">
                    AI Prompt Engine
                  </h3>
                  <p className="mb-12 text-base text-w-100">
                    Explore our AI Prompt Engine transforming data interaction
                    with precision and speed for unparalleled productivity.
                  </p>
                  <Image
                    src="/img/revolution-card1.png"
                    alt="AI Prompt Engine"
                    width={644}
                    height={390}
                  />
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                  className="p-8 border rounded-lg md:p-12 border-b-600 bg-gd-tertiary max-w-[520px] overflow-hidden"
                >
                  <h3 className="mb-4 md:leading-[42px] text-2xl md:text-32x font-medium text-w-500">
                    Smart Search
                  </h3>
                  <p className="mb-12 text-base text-w-100">
                    Experience precise search results with our semantic search
                    technology.
                  </p>
                  <Image
                    src="/img/revolution-card2.png"
                    alt="Smart Search"
                    width={424}
                    height={390}
                  />
                </div>
              </div>
              <div className="flex flex-col-reverse lg:flex-row-reverse gap-[30px]">
                <div
                  data-aos="fade-up"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                  className="p-8 border rounded-lg md:p-12 border-b-600 bg-gd-tertiary max-w-[740px] overflow-hidden"
                >
                  <h3 className="mb-4 md:leading-[42px] text-3xl md:text-32x font-medium text-w-500">
                    AI Guided Suggestions
                  </h3>
                  <p className="mb-12 text-base text-w-100">
                    Discover personalized recommendations powered by AI.
                    Tailored just for you, effortlessly find what you&#39;re
                    looking for.
                  </p>
                  <Image
                    src="/img/revolution-card3.png"
                    alt="AI Guided Suggestions"
                    width={644}
                    height={390}
                  />
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                  className="p-8 border rounded-lg md:p-12 border-b-600 bg-gd-tertiary max-w-[520px] overflow-hidden"
                >
                  <h3 className="mb-4 md:leading-[42px] text-3xl md:text-32x font-medium text-w-500">
                    AI Profitization
                  </h3>
                  <p className="mb-12 text-base text-w-100">
                    Boost revenue with AI-driven monetization. Unlock new income
                    streams and grow your business.
                  </p>
                  <Image
                    src="/img/revolution-card4.png"
                    alt="AI Profitization"
                    width={424}
                    height={390}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <VideoSection />
      <div className="py-8 bg-center bg-no-repeat bg-cover lg:py-24 bg-linked">
        <div className="container px-5 mx-auto xl:px-0">
          <h2
            data-aos="fade-up"
            className="gd-title mb-16 text-center tracking-[-0.02em] lg:leading-[64px] text-3xl md:text-5xl font-semibold"
          >
            Enhance Product Discovery
            <span className="inline-block lg:block"></span> with Linked Prompts
          </h2>
          <div className="flex flex-col">
            <div className="flex flex-col gap-[30px]">
              <div
                data-aos="fade-up-right"
                className="flex flex-col-reverse lg:flex-row justify-start lg:justify-between gap-[30px] lg:gap-[126px] p-6 md:p-12 rounded-lg border border-b-600 bg-gd-tertiary"
              >
                <div className="flex flex-col items-start justify-center">
                  <h3 className="mb-4 md:leading-[42px] text-2xl md:text-32x font-medium text-w-500">
                    Masters of Data
                    <span className="inline-block lg:block">
                      & Machine Learning
                    </span>
                  </h3>
                  <p className="mb-6 w-full md:max-w-[534px] text-base text-w-100">
                    Founded in 2016 by experienced data scientists, engineers,
                    and consultants, Neurolinx AI is dedicated to maximizing the
                    business potential of data and AI.
                  </p>
                  <Link href="/team" legacyBehavior>
                    <a className="flex flex-row items-center gap-2 px-4 py-2 text-sm font-medium border rounded-full border-tropical-indigo bg-gd-secondary text-w-900">
                      Meet Our Team
                      <Image
                        src="/img/icons/arrow-right.svg"
                        alt="arrow"
                        width={20}
                        height={20}
                      />
                    </a>
                  </Link>
                </div>
                <div className="relative w-full lg:w-[534px] lg:h-[464px]">
                  <Image
                    className="rounded-lg"
                    src="/img/prompts1.png"
                    alt="prompts-img"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </div>
              <div
                data-aos="fade-up-left"
                className="flex flex-col-reverse lg:flex-row-reverse justify-start lg:justify-between gap-[30px] lg:gap-[126px] p-6 md:p-12 rounded-lg border border-b-600 bg-gd-tertiary"
              >
                <div className="flex flex-col items-start justify-center">
                  <h3 className="mb-4 md:leading-[42px] text-2xl md:text-32x font-medium text-w-500">
                    Powered by
                    <span className="inline-block lg:block">
                      Established Technology
                    </span>
                  </h3>
                  <p className="mb-6 w-full md:max-w-[534px] text-base text-w-100">
                    Neurolinx AI possesses an extensive intellectual property
                    portfolio in AI technology, comprising 32 granted patents
                    and 88 patent applications spanning the globe.
                  </p>
                  <Link href="/patent" legacyBehavior>
                    <a className="flex flex-row items-center gap-2 px-4 py-2 text-sm font-medium border rounded-full border-tropical-indigo bg-gd-secondary text-w-900">
                      Check Our Patents
                      <Image
                        src="/img/icons/arrow-right.svg"
                        alt="arrow"
                        width={20}
                        height={20}
                      />
                    </a>
                  </Link>
                </div>
                <div className="relative w-full lg:w-[534px] lg:h-[464px]">
                  <Image
                    className="rounded-lg"
                    src="/img/prompts2.png"
                    alt="prompts-img"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-24 bg-center bg-no-repeat bg-cover bg-media">
        <div className="container px-5 mx-auto xl:px-0">
          <div className="flex flex-col items-center justify-center">
            <h2
              data-aos="fade-down"
              className="gd-title mb-16 text-center tracking-[-0.02em] lg:leading-[64px] text-3xl md:text-5xl font-semibold"
            >
              Updates &amp;
              <span className="block"></span> Media Coverage
            </h2>
            <div
              data-aos="fade-up"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px]"
            >
              {updateCardData.slice(0, 3).map((item, index) => (
                <UpdateCard
                  key={index}
                  imageSrc={item.imageSrc}
                  heading={item.heading}
                  headingHref={item.headingHref}
                  tag1={item.tags[0].tag}
                  tag1Href={item.tags[0].tagHref}
                  tag2={item.tags[1].tag}
                  tag2Href={item.tags[1].tagHref}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <FAQSection />
      <FooterTop />
      <Footer />
    </div>
  );
}
