"use client";
import React from "react";
import Image from "next/image";
import Header from "../components/Header";
import FooterTop from "../components/FooterTop";
import Footer from "../components/Footer";

export default function page() {
  return (
    <div className="overflow-hidden font-normal bg-b-900">
      <Header />
      <div className="pt-[135px] lg:pt-[164px] pb-24 bg-primary-hero  bg-cover bg-no-repeat bg-center">
        <div className="container px-5 mx-auto xl:px-0">
          <h1
            data-aos="fade-up"
            className="gd-title tracking-[-0.02em] text-center text-3xl md:text-4xl lg:text-64x leading-tight md:leading-relaxed lg:leading-[84px] font-semibold"
          >
            How It Works
            <span className="inline-block lg:block"></span> Service Automation
            Solution
          </h1>
          <p
            data-aos="fade-up"
            className="mt-6 text-base text-center md:text-xl text-w-100"
          >
            Service automation is the next generation of factory automation,
            enabling prompt <span className="inline-block lg:block"></span>and
            immediate implementation of AI solutions.
          </p>
        </div>
      </div>
      <div className="py-8 bg-center bg-no-repeat bg-cover lg:py-24 bg-ai">
        <div className="container px-5 mx-auto text-center lg:px-0">
          <h2
            data-aos="fade-down"
            className="gd-title mb-16 text-center tracking-[-0.02em] lg:leading-[64px] text-3xl md:text-5xl font-semibold"
          >
            Next Generation Instant
            <span className="inline-block md:block">AI Implementation</span>
          </h2>
          <div className="flex flex-wrap justify-start items-start gap-[30px]">
            <div
              data-aos="fade-up-right"
              className="p-6 lg:p-12 w-full lg:w-[520px] rounded-lg border border-b-600 text-left bg-gd-tertiary"
            >
              <span className="inline-block p-4 text-xl font-semibold border rounded-2xl border-b-400 text-tropical-indigo bg-b-600">
                01.
              </span>
              <h3 className="mt-6 mb-4 leading-[42px] text-xl md:text-32x font-medium text-w-500">
                Data Supply Chain Management
              </h3>
              <p className="text-base text-w-100">
                Neurolinx enhances operational efficiency with Data Supply Chain
                Management (D-SCM), automatically collecting and processing
                source data.
              </p>
              <Image
                className="w-full mt-6 lg:mt-12"
                src="/img/ng-card1.png"
                alt="ng card"
                width={424}
                height={390}
              />
            </div>
            <div
              data-aos="fade-up-left"
              className="p-6 lg:p-12 w-full lg:w-[740px] rounded-lg border border-b-600 text-left bg-gd-tertiary"
            >
              <span className="inline-block p-4 text-xl font-semibold border rounded-2xl border-b-400 text-tropical-indigo bg-b-600">
                02.
              </span>
              <h3 className="mt-6 mb-4 leading-[42px] text-xl md:text-32x font-medium text-w-500">
                Advanced Contextual Data Processing for Enhanced Decision-Making
              </h3>
              <p className="text-base text-w-100">
                Neurolinx oversees the maintenance and continuous enhancement of
                cross-domain language processing models and dialog policies to
                effectively resolve query ambiguities.
              </p>
              <Image
                className="w-full mt-6 lg:mt-12"
                src="/img/ng-card2.png"
                alt="ng card"
                width={644}
                height={390}
              />
            </div>
            <div
              data-aos="fade-up"
              className="flex flex-col w-full gap-6 p-6 text-left border rounded-lg md:flex-row lg:gap-12 lg:p-12 border-b-600 bg-gd-tertiary"
            >
              <div className="flex flex-col items-start justify-center">
                <span className="inline-block p-4 text-xl font-semibold border rounded-2xl border-b-400 text-tropical-indigo bg-b-600">
                  03.
                </span>
                <h3 className="mt-6 mb-4 leading-[42px] text-xl md:text-32x font-medium text-w-500">
                  Maximize Efficiency with AI Transformation
                </h3>
                <p className="text-base text-w-100">
                  Neurolinx uses the AIOps Engine to streamline AI
                  transformation, automating everything from data collection to
                  service implementation for your industry.
                </p>
              </div>
              <Image
                className="w-full mt-6 lg:mt-12"
                src="/img/ng-card3.png"
                alt="ng card"
                width={573}
                height={390}
              />
            </div>
            <div
              data-aos="fade-up-right"
              className="p-6 lg:p-12 w-full lg:w-[740px] rounded-lg border border-b-600 text-left bg-gd-tertiary"
            >
              <span className="inline-block p-4 text-xl font-semibold border rounded-2xl border-b-400 text-tropical-indigo bg-b-600">
                04.
              </span>
              <h3 className="mt-6 mb-4 leading-[42px] text-xl md:text-32x font-medium text-w-500">
                Revolutionizing Interactions with Advanced AI-Powered Solutions
              </h3>
              <p className="text-base text-w-100">
                The system generates, manages, and simulates results for
                service-level &quot;Neurolinx,&quot; utilizing sub-intentions to
                map contexts like time, place, and occasion.
              </p>
              <Image
                className="w-full mt-6 lg:mt-12"
                src="/img/ng-card4.png"
                alt="ng card"
                width={644}
                height={390}
              />
            </div>
            <div
              data-aos="fade-up-left"
              className="p-6 lg:p-12 w-full lg:w-[520px] rounded-lg border border-b-600 text-left bg-gd-tertiary"
            >
              <span className="inline-block p-4 text-xl font-semibold border rounded-2xl border-b-400 text-tropical-indigo bg-b-600">
                05.
              </span>
              <h3 className="mt-6 mb-4 leading-[42px] text-xl md:text-32x font-medium text-w-500">
                Real-Time Data Enhancement
              </h3>
              <p className="text-base text-w-100">
                D-SCM processes real-time data for speech recognition,
                personalized content recommendations and live updates through
                automation.
              </p>
              <Image
                className="w-full mt-6 lg:mt-12"
                src="/img/ng-card5.png"
                alt="ng card"
                width={424}
                height={390}
              />
            </div>
          </div>
        </div>
      </div>
      <FooterTop />
      <Footer />
    </div>
  );
}
