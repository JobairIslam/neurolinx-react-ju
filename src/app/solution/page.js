"use client";
import React from "react";
import Image from "next/image";
import Header from "../components/Header";
import FooterTop from "../components/FooterTop";
import Footer from "../components/Footer";
import EnhancingCard from "../components/EnhancingCard";
import CustomCard from "../components/CustomCard";
import FAQAccordion from "../components/FAQSection";
import enhancingCardData from "/src/data/enhancingCardData.json";
import customCardData from "/src/data/customCardData.json";
export default function page() {
  return (
    <div className="font-normal bg-b-900">
      <Header />
      <div className="pt-[135px] lg:pt-[164px] pb-24 bg-secondary-hero  bg-cover bg-no-repeat bg-center">
        <div className="container px-5 mx-auto xl:px-0">
          <h1
            data-aos="fade-up"
            className="gd-title tracking-[-0.02em] text-center text-3xl md:text-4xl lg:text-64x leading-tight md:leading-relaxed lg:leading-[84px] font-semibold"
          >
            Personalized Experiences
            <span className="inline-block lg:block">with Advanced Prompts</span>
          </h1>
          <p
            data-aos="fade-up"
            className="mt-6 text-base text-center md:text-xl text-w-100"
          >
            Neurolinx enables context-based search and recommendations without
            user logs,<span className="inline-block lg:block"></span> enhancing
            user personalization and experience.
          </p>
        </div>
      </div>
      <div className="bg-center bg-no-repeat bg-cover lg:py-24 bg-enhance">
        <div className="container px-5 mx-auto xl:px-0">
          <h2
            data-aos="fade-up"
            className="gd-title mb-16 text-center tracking-[-0.02em] lg:leading-[64px] text-3xl md:text-5xl font-semibold"
          >
            Enhancing Context-Aware
            <span className="inline-block lg:block"></span>Natural Language
            Understanding
          </h2>
          <div
            data-aos="zoom-in-up"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px]"
          >
            {enhancingCardData.slice(0, 9).map((item, index) => (
              <EnhancingCard
                key={index}
                imageSrc={item.imageSrc}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="py-24 bg-center bg-no-repeat bg-cover bg-problems">
        <div className="container px-5 mx-auto xl:px-0">
          <h2
            data-aos="fade-up"
            className="gd-title mb-16 text-center tracking-[-0.02em] lg:leading-[64px] text-3xl md:text-5xl font-semibold"
          >
            Neurolinx Solves Industry
            <span className="inline-block lg:block"></span>Specific Problems
          </h2>
          <div
            data-aos="fade-up-left"
            className="px-4 pt-4 rounded-lg md:pt-8 lg:pt-16 md:px-8 lg:px-16 bg-gd-tertiary"
          >
            <Image
              src="/img/specific-problems.jpg"
              alt="specific-problems"
              width={1162}
              height={576}
              className="w-full rounded-t-lg lg:rounded-t-xl"
            />
          </div>
        </div>
      </div>
      <div className="bg-center bg-no-repeat bg-cover lg:py-24 bg-diverse">
        <div className="container px-5 mx-auto xl:px-0">
          <h2
            data-aos="fade-up"
            className="gd-title mb-16 text-center tracking-[-0.02em] lg:leading-[64px] text-3xl md:text-5xl font-semibold"
          >
            Leverage Any Data Source
            <span className="inline-block lg:block"></span>No Matter How Diverse
          </h2>
          <div className="flex flex-col">
            <div className="flex flex-col gap-[30px]">
              <div
                data-aos="fade-up-right"
                className="flex flex-col-reverse lg:flex-row justify-start lg:justify-between gap-[30px] lg:gap-[126px] p-6 md:p-12 rounded-lg border border-b-600 bg-gd-tertiary"
              >
                <div className="flex flex-col items-start justify-center">
                  <h3 className="mb-4 md:leading-[42px] text-2xl md:text-32x font-medium text-w-500">
                    Ensure Pristine Data Quality
                    <span className="inline-block lg:block"></span>for Optimal
                    Performance
                  </h3>
                  <p className="mb-6 w-full md:max-w-[534px] text-base text-w-100">
                    These sources collectively cater to different requirements,
                    from academic research and professional analysis to staying
                    informed on current affairs and exploring nuanced opinions.
                  </p>
                </div>
                <div className="relative w-full lg:w-[534px] lg:h-[464px]">
                  <Image
                    className="rounded-lg"
                    src="/img/diverse1.png"
                    alt="diverse"
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
                    Strategies for Enhancing
                    <span className="inline-block lg:block"></span>Data Quality
                  </h3>
                  <p className="mb-6 w-full md:max-w-[534px] text-base text-w-100">
                    &quot;Noisy&quot; texts, like those from social networks and
                    online communities, contain typos, slang, and informal
                    language, reflecting dynamic online interactions and user
                    sentiment.
                  </p>
                </div>
                <div className="relative w-full lg:w-[534px] lg:h-[464px]">
                  <Image
                    className="rounded-lg"
                    src="/img/diverse2.png"
                    alt="diverse"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </div>
              <div
                data-aos="fade-up-right"
                className="flex flex-col-reverse lg:flex-row justify-start lg:justify-between gap-[30px] lg:gap-[126px] p-6 md:p-12 rounded-lg border border-b-600 bg-gd-tertiary"
              >
                <div className="flex flex-col items-start justify-center">
                  <h3 className="mb-4 md:leading-[42px] text-2xl md:text-32x font-medium text-w-500">
                    Data Management Leveraging
                    <span className="inline-block lg:block"></span>Internal
                    Resources
                  </h3>
                  <p className="mb-6 w-full md:max-w-[534px] text-base text-w-100">
                    This approach not only enhances the quality of insights
                    derived but also supports real-time decision-making and
                    operational efficiency across different domains.
                  </p>
                </div>
                <div className="relative w-full lg:w-[534px] lg:h-[464px]">
                  <Image
                    className="rounded-lg"
                    src="/img/diverse3.png"
                    alt="diverse"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-24 bg-center bg-no-repeat bg-cover bg-ai-solution">
        <div className="container px-5 mx-auto xl:px-0">
          <h2
            data-aos="fade-down"
            className="gd-title mb-16 text-center tracking-[-0.02em] lg:leading-[64px] text-3xl md:text-5xl font-semibold"
          >
            Custom AI Solutions
            <span className="inline-block lg:block"></span>Across Industries
          </h2>
          <div
            data-aos="fade-up"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px]"
          >
            {customCardData.map((item, index) => (
              <CustomCard
                key={index}
                imgSrc={item.imgSrc}
                imgAlt={item.imgAlt}
                title={item.title}
                linkHref={item.linkHref}
                linkText={item.linkText}
                arrowImgSrc={item.arrowImgSrc}
                arrowImgAlt={item.arrowImgAlt}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="bg-center bg-no-repeat bg-cover lg:py-24 bg-counter ">
        <div className="container px-5 mx-auto xl:px-0">
          <h2
            data-aos="fade-down"
            className="gd-title mb-16 text-center tracking-[-0.02em] lg:leading-[64px] text-3xl md:text-5xl font-semibold"
          >
            Unlocking Unparalleled
            <span className="inline-block lg:block"></span>Semantic Capabilities
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px]">
            <div
              data-aos="fade-up-right"
              className="flex gap-6 p-6 border rounded-lg lg:p-12 bg-gd-tertiary border-b-600"
            >
              <h3 className="leading-[52px] text-40x font-medium text-w-900">
                16M+
              </h3>
              <span className="inline-block w-[1px] h-full bg-tropical-indigo"></span>
              <p className="text-base text-w-100">
                Revolutionizing AI Integration
              </p>
            </div>
            <div
              data-aos="fade-up"
              className="flex gap-6 p-6 border rounded-lg lg:p-12 bg-gd-tertiary border-b-600"
            >
              <h3 className="leading-[52px] text-40x font-medium text-w-900">
                64T+
              </h3>
              <span className="inline-block w-[1px] h-full bg-tropical-indigo"></span>
              <p className="text-base text-w-100">Advanced AI Solutions</p>
            </div>
            <div
              data-aos="fade-up-left"
              className="flex gap-6 p-6 border rounded-lg lg:p-12 bg-gd-tertiary border-b-600"
            >
              <h3 className="leading-[52px] text-40x font-medium text-w-900">
                248+
              </h3>
              <span className="inline-block w-[1px] h-full bg-tropical-indigo"></span>
              <p className="text-base text-w-100">
                Global <span className="block"></span> Integration
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="py-24 bg-center bg-no-repeat bg-cover bg-source">
        <div className="container px-5 mx-auto xl:px-0">
          <h2
            data-aos="fade-down"
            className="gd-title mb-16 text-center tracking-[-0.02em] lg:leading-[64px] text-3xl md:text-5xl font-semibold"
          >
            Step-by-Step Guide
            <span className="inline-block lg:block"></span>to Integrating
            Neurolinx
          </h2>
          <Image
            data-aos="fade-up"
            src="/img/stepby.png"
            className="w-full"
            alt="Step-by-Step Guide to Integrating Neurolinx"
            width={1920}
            height={452}
          />
        </div>
      </div>
      <FAQAccordion />
      <FooterTop />
      <Footer />
    </div>
  );
}
