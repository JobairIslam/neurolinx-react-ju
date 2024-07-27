import React from "react";

import Image from "next/image";

import Header from "../components/Header";
import FooterTop from "../components/FooterTop";
import Footer from "../components/Footer";

export default function page() {
  return (
    <div class="overflow-x-hidden font-normal bg-body-gd lg:bg-how-it-work bg-center bg-no-repeat bg-cover">
      <Header />
      <div className="pt-[135px] lg:pt-[164px] pb-24">
        <div className="mx-auto px-5 xl:px-0 container">
          <h1 className="gd-title tracking-[-0.02em] text-center text-3xl md:text-4xl lg:text-64x leading-tight md:leading-relaxed lg:leading-[84px] font-semibold">
            How It Works
            <span className="inline-block lg:block"></span> Service Automation
            Solution
          </h1>
          <p className="mt-6 text-center text-base md:text-xl text-w-100">
            Service automation is the next generation of factory automation,
            enabling prompt <span className="inline-block lg:block"></span>and
            immediate implementation of AI solutions.
          </p>
        </div>
      </div>
      <div className="lg:py-24">
        <div className="mx-auto px-5 lg:px-0 container text-center">
          <h2 className="gd-title mb-16 text-center tracking-[-0.02em] lg:leading-[64px] text-3xl md:text-5xl font-semibold">
            Next Generation Instant
            <span className="inline-block md:block">AI Implementation</span>
          </h2>
          <div className="flex flex-wrap justify-start items-start gap-[30px]">
            <div className="p-6 lg:p-12 w-full lg:w-[520px] rounded-lg border border-b-600 text-left bg-gd-tertiary">
              <span className="inline-block p-4 rounded-2xl border border-b-400 text-xl font-semibold text-tropical-indigo bg-b-600">
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
                className="mt-6 lg:mt-12 w-full"
                src="/img/ng-card1.png"
                alt="ng card"
                width={424}
                height={390}
              />
            </div>
            <div className="p-6 lg:p-12 w-full lg:w-[740px] rounded-lg border border-b-600 text-left bg-gd-tertiary">
              <span className="inline-block p-4 rounded-2xl border border-b-400 text-xl font-semibold text-tropical-indigo bg-b-600">
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
                className="mt-6 lg:mt-12 w-full"
                src="/img/ng-card2.png"
                alt="ng card"
                width={644}
                height={390}
              />
            </div>
            <div className="flex flex-col md:flex-row gap-6 lg:gap-12 p-6 lg:p-12 w-full rounded-lg border border-b-600 text-left bg-gd-tertiary">
              <div className="flex flex-col justify-center items-start">
                <span className="inline-block p-4 rounded-2xl border border-b-400 text-xl font-semibold text-tropical-indigo bg-b-600">
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
                className="mt-6 lg:mt-12 w-full"
                src="/img/ng-card3.png"
                alt="ng card"
                width={573}
                height={390}
              />
            </div>
            <div className="p-6 lg:p-12 w-full lg:w-[740px] rounded-lg border border-b-600 text-left bg-gd-tertiary">
              <span className="inline-block p-4 rounded-2xl border border-b-400 text-xl font-semibold text-tropical-indigo bg-b-600">
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
                className="mt-6 lg:mt-12 w-full"
                src="/img/ng-card4.png"
                alt="ng card"
                width={644}
                height={390}
              />
            </div>
            <div className="p-6 lg:p-12 w-full lg:w-[520px] rounded-lg border border-b-600 text-left bg-gd-tertiary">
              <span className="inline-block p-4 rounded-2xl border border-b-400 text-xl font-semibold text-tropical-indigo bg-b-600">
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
                className="mt-6 lg:mt-12 w-full"
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
