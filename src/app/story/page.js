import React from "react";
import Image from "next/image";

import Header from "../components/Header";
import FooterTop from "../components/FooterTop";
import Footer from "../components/Footer";
import EnhancingCard from "../components/EnhancingCard";
import enhancingCardData from "/src/data/enhancingCardData.json";

export default function page() {
  return (
    <div className="overflow-hidden font-normal bg-b-900">
      <Header />
      <div className="pt-[135px] lg:pt-[164px] pb-24 bg-center bg-no-repeat bg-cover bg-primary-hero">
        <div className="container px-5 mx-auto xl:px-0">
          <h1
            data-aos="fade-up"
            className="gd-title tracking-[-0.02em] text-center text-3xl md:text-4xl lg:text-64x leading-tight md:leading-relaxed lg:leading-[84px] font-semibold"
          >
            Empowering Businesses through
            <span className="inline-block lg:block"></span>AI-driven Automation
          </h1>
          <p
            data-aos="fade-up"
            className="mt-6 text-base text-center md:text-xl text-w-100"
          >
            Our mission is to empower users with AI-curated data for smarter
            decision-making. <span className="inline-block lg:block"></span>We
            strive to make data accessible and comprehensible for all.
          </p>
        </div>
      </div>
      <div className="py-8 bg-center bg-no-repeat bg-cover lg:py-24 bg-core">
        <div className="container px-5 mx-auto xl:px-0">
          <h2
            data-aos="fade-down"
            className="gd-title mb-16 text-center tracking-[-0.02em] lg:leading-[64px] text-3xl md:text-5xl font-semibold"
          >
            Central Tenets <span className="block"></span> & Core Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[30px]">
            <div
              data-aos="fade-right"
              className="p-6 border rounded-lg md:p-12 border-b-600 bg-gd-tertiary"
            >
              <h3 className="text-2xl md:text-32x font-medium leading-[42px] text-w-500">
                Clear Communication
              </h3>
              <p className="mt-4 mb-6 text-base md:mb-12 text-w-100">
                Our distinctive approach enables users to explore and comprehend
                the underlying workings of our algorithms, fostering credibility
                through social validation.
              </p>
              <Image
                src="/img/core-values1.png"
                alt="core-values"
                width={534}
                height={366}
              />
            </div>
            <div
              data-aos="fade-left"
              className="p-6 border rounded-lg md:p-12 border-b-600 bg-gd-tertiary"
            >
              <h3 className="text-2xl md:text-32x font-medium leading-[42px] text-w-500">
                Streamlined Approach
              </h3>
              <p className="mt-4 mb-6 text-base md:mb-12 text-w-100">
                Our continuously updated automated solutions are presented in
                everyday language that feels natural to humans. Integration,
                usage, and maintenance are all simplified for ease of use.
              </p>
              <Image
                src="/img/core-values2.png"
                alt="core-values"
                width={534}
                height={366}
              />
            </div>
            <div
              data-aos="fade-right"
              className="p-6 border rounded-lg md:p-12 border-b-600 bg-gd-tertiary"
            >
              <h3 className="text-2xl md:text-32x font-medium leading-[42px] text-w-500">
                Empowering Individuals
              </h3>
              <p className="mt-4 mb-6 text-base md:mb-12 text-w-100">
                Through co-creation and interaction, our clients are
                consistently impressed by the novel, enriching user experiences
                that offer invaluable insights for informed decision-making.
              </p>
              <Image
                src="/img/core-values3.png"
                alt="core-values"
                width={534}
                height={366}
              />
            </div>
            <div
              data-aos="fade-left"
              className="p-6 border rounded-lg md:p-12 border-b-600 bg-gd-tertiary"
            >
              <h3 className="text-2xl md:text-32x font-medium leading-[42px] text-w-500">
                Variety and Inclusion
              </h3>
              <p className="mt-4 mb-6 text-base md:mb-12 text-w-100">
                We aid audiences in discovering their niche by recognizing long
                tail preferences, delivering diverse and inclusive results from
                all verticals using open-source social data.
              </p>
              <Image
                src="/img/core-values4.png"
                alt="core-values"
                width={534}
                height={366}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="py-8 bg-center bg-no-repeat bg-cover lg:py-24 bg-philosophy">
        <div className="container px-5 mx-auto xl:px-0">
          <h2
            data-aos="fade-down"
            className="gd-title mb-16 text-center tracking-[-0.02em] lg:leading-[64px] text-3xl md:text-5xl font-semibold"
          >
            Philosophy of Search
            <span className="block"></span> & Recommendation
          </h2>
          <div
            data-aos="fade-up"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px]"
          >
            {enhancingCardData.slice(9, 12).map((item, index) => (
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
      <div className="py-8 bg-center bg-no-repeat bg-cover lg:py-24 bg-ai-corp">
        <div className="container px-5 mx-auto xl:px-0">
          <h2
            data-aos="fade-down"
            className="gd-title mb-16 text-center tracking-[-0.02em] lg:leading-[64px] text-3xl md:text-5xl font-semibold"
          >
            Neurolinx AI
            <span className="block"></span>Corporate Values
          </h2>
        </div>
        <div
          data-aos="fade-up"
          className="corporate-values relative z-[1] flex flex-col justify-center gap-3"
        >
          <div className="flex gap-4 overflow-hidden whitespace-nowrap">
            <div className="flex items-center justify-center gap-3 item-scroll-left">
              <span className="flex px-6 py-3 text-xl border rounded-full whitespace-nowrap border-b-400 bg-b-600 text-w-100">
                Stellar
              </span>
              <span className="flex px-6 py-3 text-xl border rounded-full whitespace-nowrap border-b-400 bg-b-600 text-w-100">
                Leisurely Walk
              </span>
              <span className="flex px-6 py-3 text-xl border rounded-full whitespace-nowrap border-b-400 bg-b-600 text-w-100">
                Ironical Dialogue
              </span>
              <span className="flex px-6 py-3 text-xl border rounded-full whitespace-nowrap border-b-400 bg-b-600 text-w-100">
                Intense
              </span>
              <span className="flex px-6 py-3 text-xl border rounded-full whitespace-nowrap border-b-400 bg-b-600 text-w-100">
                Calm
              </span>
              <span className="flex px-6 py-3 text-xl border rounded-full whitespace-nowrap border-b-400 bg-b-600 text-w-100">
                Terrifying
              </span>
              <span className="flex px-6 py-3 text-xl border rounded-full whitespace-nowrap border-b-400 bg-b-600 text-w-100">
                Lavish Setting
              </span>
            </div>
            <div className="flex items-center justify-center gap-3 item-scroll-left">
              <span className="flex px-6 py-3 text-xl border rounded-full whitespace-nowrap border-b-400 bg-b-600 text-w-100">
                Stellar
              </span>
              <span className="flex px-6 py-3 text-xl border rounded-full whitespace-nowrap border-b-400 bg-b-600 text-w-100">
                Leisurely Walk
              </span>
              <span className="flex px-6 py-3 text-xl border rounded-full whitespace-nowrap border-b-400 bg-b-600 text-w-100">
                Ironical Dialogue
              </span>
              <span className="flex px-6 py-3 text-xl border rounded-full whitespace-nowrap border-b-400 bg-b-600 text-w-100">
                Intense
              </span>
              <span className="flex px-6 py-3 text-xl border rounded-full whitespace-nowrap border-b-400 bg-b-600 text-w-100">
                Calm
              </span>
              <span className="flex px-6 py-3 text-xl border rounded-full whitespace-nowrap border-b-400 bg-b-600 text-w-100">
                Terrifying
              </span>
              <span className="flex px-6 py-3 text-xl border rounded-full whitespace-nowrap border-b-400 bg-b-600 text-w-100">
                Lavish Setting
              </span>
            </div>
          </div>
          <div className="flex gap-4 overflow-hidden whitespace-nowrap">
            <div className="flex items-center justify-center gap-3 item-scroll-right">
              <span className="flex px-6 py-3 text-xl border rounded-full whitespace-nowrap border-b-400 bg-b-600 text-w-100">
                Stellar
              </span>
              <span className="flex px-6 py-3 text-xl border rounded-full whitespace-nowrap border-b-400 bg-b-600 text-w-100">
                Leisurely Walk
              </span>
              <span className="flex px-6 py-3 text-xl border rounded-full whitespace-nowrap border-b-400 bg-b-600 text-w-100">
                Ironical Dialogue
              </span>
              <span className="flex px-6 py-3 text-xl border rounded-full whitespace-nowrap border-b-400 bg-b-600 text-w-100">
                Intense
              </span>
              <span className="flex px-6 py-3 text-xl border rounded-full whitespace-nowrap border-b-400 bg-b-600 text-w-100">
                Calm
              </span>
              <span className="flex px-6 py-3 text-xl border rounded-full whitespace-nowrap border-b-400 bg-b-600 text-w-100">
                Terrifying
              </span>
              <span className="flex px-6 py-3 text-xl border rounded-full whitespace-nowrap border-b-400 bg-b-600 text-w-100">
                Lavish Setting
              </span>
            </div>
            <div className="flex items-center justify-center gap-3 item-scroll-right">
              <span className="flex px-6 py-3 text-xl border rounded-full whitespace-nowrap border-b-400 bg-b-600 text-w-100">
                Stellar
              </span>
              <span className="flex px-6 py-3 text-xl border rounded-full whitespace-nowrap border-b-400 bg-b-600 text-w-100">
                Leisurely Walk
              </span>
              <span className="flex px-6 py-3 text-xl border rounded-full whitespace-nowrap border-b-400 bg-b-600 text-w-100">
                Ironical Dialogue
              </span>
              <span className="flex px-6 py-3 text-xl border rounded-full whitespace-nowrap border-b-400 bg-b-600 text-w-100">
                Intense
              </span>
              <span className="flex px-6 py-3 text-xl border rounded-full whitespace-nowrap border-b-400 bg-b-600 text-w-100">
                Calm
              </span>
              <span className="flex px-6 py-3 text-xl border rounded-full whitespace-nowrap border-b-400 bg-b-600 text-w-100">
                Terrifying
              </span>
              <span className="flex px-6 py-3 text-xl border rounded-full whitespace-nowrap border-b-400 bg-b-600 text-w-100">
                Lavish Setting
              </span>
            </div>
          </div>
          <div className="flex gap-4 overflow-hidden whitespace-nowrap">
            <div className="flex items-center justify-center gap-3 item-scroll-left">
              <span className="flex px-6 py-3 text-xl border rounded-full whitespace-nowrap border-b-400 bg-b-600 text-w-100">
                Stellar
              </span>
              <span className="flex px-6 py-3 text-xl border rounded-full whitespace-nowrap border-b-400 bg-b-600 text-w-100">
                Leisurely Walk
              </span>
              <span className="flex px-6 py-3 text-xl border rounded-full whitespace-nowrap border-b-400 bg-b-600 text-w-100">
                Ironical Dialogue
              </span>
              <span className="flex px-6 py-3 text-xl border rounded-full whitespace-nowrap border-b-400 bg-b-600 text-w-100">
                Intense
              </span>
              <span className="flex px-6 py-3 text-xl border rounded-full whitespace-nowrap border-b-400 bg-b-600 text-w-100">
                Calm
              </span>
              <span className="flex px-6 py-3 text-xl border rounded-full whitespace-nowrap border-b-400 bg-b-600 text-w-100">
                Terrifying
              </span>
              <span className="flex px-6 py-3 text-xl border rounded-full whitespace-nowrap border-b-400 bg-b-600 text-w-100">
                Lavish Setting
              </span>
            </div>
            <div className="flex items-center justify-center gap-3 item-scroll-left">
              <span className="flex px-6 py-3 text-xl border rounded-full whitespace-nowrap border-b-400 bg-b-600 text-w-100">
                Stellar
              </span>
              <span className="flex px-6 py-3 text-xl border rounded-full whitespace-nowrap border-b-400 bg-b-600 text-w-100">
                Leisurely Walk
              </span>
              <span className="flex px-6 py-3 text-xl border rounded-full whitespace-nowrap border-b-400 bg-b-600 text-w-100">
                Ironical Dialogue
              </span>
              <span className="flex px-6 py-3 text-xl border rounded-full whitespace-nowrap border-b-400 bg-b-600 text-w-100">
                Intense
              </span>
              <span className="flex px-6 py-3 text-xl border rounded-full whitespace-nowrap border-b-400 bg-b-600 text-w-100">
                Calm
              </span>
              <span className="flex px-6 py-3 text-xl border rounded-full whitespace-nowrap border-b-400 bg-b-600 text-w-100">
                Terrifying
              </span>
              <span className="flex px-6 py-3 text-xl border rounded-full whitespace-nowrap border-b-400 bg-b-600 text-w-100">
                Lavish Setting
              </span>
            </div>
          </div>
          <div className="flex gap-4 overflow-hidden whitespace-nowrap">
            <div className="flex items-center justify-center gap-3 item-scroll-right">
              <span className="flex px-6 py-3 text-xl border rounded-full whitespace-nowrap border-b-400 bg-b-600 text-w-100">
                Stellar
              </span>
              <span className="flex px-6 py-3 text-xl border rounded-full whitespace-nowrap border-b-400 bg-b-600 text-w-100">
                Leisurely Walk
              </span>
              <span className="flex px-6 py-3 text-xl border rounded-full whitespace-nowrap border-b-400 bg-b-600 text-w-100">
                Ironical Dialogue
              </span>
              <span className="flex px-6 py-3 text-xl border rounded-full whitespace-nowrap border-b-400 bg-b-600 text-w-100">
                Intense
              </span>
              <span className="flex px-6 py-3 text-xl border rounded-full whitespace-nowrap border-b-400 bg-b-600 text-w-100">
                Calm
              </span>
              <span className="flex px-6 py-3 text-xl border rounded-full whitespace-nowrap border-b-400 bg-b-600 text-w-100">
                Terrifying
              </span>
              <span className="flex px-6 py-3 text-xl border rounded-full whitespace-nowrap border-b-400 bg-b-600 text-w-100">
                Lavish Setting
              </span>
            </div>
            <div className="flex items-center justify-center gap-3 item-scroll-right">
              <span className="flex px-6 py-3 text-xl border rounded-full whitespace-nowrap border-b-400 bg-b-600 text-w-100">
                Stellar
              </span>
              <span className="flex px-6 py-3 text-xl border rounded-full whitespace-nowrap border-b-400 bg-b-600 text-w-100">
                Leisurely Walk
              </span>
              <span className="flex px-6 py-3 text-xl border rounded-full whitespace-nowrap border-b-400 bg-b-600 text-w-100">
                Ironical Dialogue
              </span>
              <span className="flex px-6 py-3 text-xl border rounded-full whitespace-nowrap border-b-400 bg-b-600 text-w-100">
                Intense
              </span>
              <span className="flex px-6 py-3 text-xl border rounded-full whitespace-nowrap border-b-400 bg-b-600 text-w-100">
                Calm
              </span>
              <span className="flex px-6 py-3 text-xl border rounded-full whitespace-nowrap border-b-400 bg-b-600 text-w-100">
                Terrifying
              </span>
              <span className="flex px-6 py-3 text-xl border rounded-full whitespace-nowrap border-b-400 bg-b-600 text-w-100">
                Lavish Setting
              </span>
            </div>
          </div>
          <div className="flex gap-4 overflow-hidden whitespace-nowrap">
            <div className="flex items-center justify-center gap-3 item-scroll-left">
              <span className="flex px-6 py-3 text-xl border rounded-full whitespace-nowrap border-b-400 bg-b-600 text-w-100">
                Stellar
              </span>
              <span className="flex px-6 py-3 text-xl border rounded-full whitespace-nowrap border-b-400 bg-b-600 text-w-100">
                Leisurely Walk
              </span>
              <span className="flex px-6 py-3 text-xl border rounded-full whitespace-nowrap border-b-400 bg-b-600 text-w-100">
                Ironical Dialogue
              </span>
              <span className="flex px-6 py-3 text-xl border rounded-full whitespace-nowrap border-b-400 bg-b-600 text-w-100">
                Intense
              </span>
              <span className="flex px-6 py-3 text-xl border rounded-full whitespace-nowrap border-b-400 bg-b-600 text-w-100">
                Calm
              </span>
              <span className="flex px-6 py-3 text-xl border rounded-full whitespace-nowrap border-b-400 bg-b-600 text-w-100">
                Terrifying
              </span>
              <span className="flex px-6 py-3 text-xl border rounded-full whitespace-nowrap border-b-400 bg-b-600 text-w-100">
                Lavish Setting
              </span>
            </div>
            <div className="flex items-center justify-center gap-3 item-scroll-left">
              <span className="flex px-6 py-3 text-xl border rounded-full whitespace-nowrap border-b-400 bg-b-600 text-w-100">
                Stellar
              </span>
              <span className="flex px-6 py-3 text-xl border rounded-full whitespace-nowrap border-b-400 bg-b-600 text-w-100">
                Leisurely Walk
              </span>
              <span className="flex px-6 py-3 text-xl border rounded-full whitespace-nowrap border-b-400 bg-b-600 text-w-100">
                Ironical Dialogue
              </span>
              <span className="flex px-6 py-3 text-xl border rounded-full whitespace-nowrap border-b-400 bg-b-600 text-w-100">
                Intense
              </span>
              <span className="flex px-6 py-3 text-xl border rounded-full whitespace-nowrap border-b-400 bg-b-600 text-w-100">
                Calm
              </span>
              <span className="flex px-6 py-3 text-xl border rounded-full whitespace-nowrap border-b-400 bg-b-600 text-w-100">
                Terrifying
              </span>
              <span className="flex px-6 py-3 text-xl border rounded-full whitespace-nowrap border-b-400 bg-b-600 text-w-100">
                Lavish Setting
              </span>
            </div>
          </div>
        </div>
      </div>
      <FooterTop />
      <Footer />
    </div>
  );
}
