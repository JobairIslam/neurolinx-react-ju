import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import FooterTop from "../components/FooterTop";
import Footer from "../components/Footer";
import EnhancingCard from "../components/EnhancingCard";
import CustomCard from "../components/CustomCard";
import FAQAccordion from "../components/FAQSection";
export default function page() {
  return (
    <div className="font-normal bg-center bg-no-repeat bg-cover bg-body-gd lg:bg-our-story">
      <Header />
      <div className="pt-[135px] lg:pt-[164px] pb-24">
        <div className="mx-auto px-5 xl:px-0 container">
          <h1 className="gd-title tracking-[-0.02em] text-center text-3xl md:text-4xl lg:text-64x leading-tight md:leading-relaxed lg:leading-[84px] font-semibold">
            Empowering Businesses through
            <span className="inline-block lg:block"></span>AI-driven Automation
          </h1>
          <p className="mt-6 text-center text-base md:text-xl text-w-100">
            Our mission is to empower users with AI-curated data for smarter
            decision-making. <span className="inline-block lg:block"></span>We
            strive to make data accessible and comprehensible for all.
          </p>
        </div>
      </div>
      <div className="lg:py-24">
        <div className="mx-auto px-5 xl:px-0 container">
          <h2 className="gd-title mb-16 text-center tracking-[-0.02em] lg:leading-[64px] text-3xl md:text-5xl font-semibold">
            Central Tenets <span className="block"></span> & Core Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[30px]">
            <div className="p-6 md:p-12 rounded-lg border border-b-600 bg-gd-tertiary">
              <h3 className="text-2xl md:text-32x font-medium leading-[42px] text-w-500">
                Clear Communication
              </h3>
              <p className="mt-4 mb-6 md:mb-12 text-base text-w-100">
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
            <div className="p-6 md:p-12 rounded-lg border border-b-600 bg-gd-tertiary">
              <h3 className="text-2xl md:text-32x font-medium leading-[42px] text-w-500">
                Streamlined Approach
              </h3>
              <p className="mt-4 mb-6 md:mb-12 text-base text-w-100">
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
            <div className="p-6 md:p-12 rounded-lg border border-b-600 bg-gd-tertiary">
              <h3 className="text-2xl md:text-32x font-medium leading-[42px] text-w-500">
                Empowering Individuals
              </h3>
              <p className="mt-4 mb-6 md:mb-12 text-base text-w-100">
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
            <div className="p-6 md:p-12 rounded-lg border border-b-600 bg-gd-tertiary">
              <h3 className="text-2xl md:text-32x font-medium leading-[42px] text-w-500">
                Variety and Inclusion
              </h3>
              <p className="mt-4 mb-6 md:mb-12 text-base text-w-100">
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
      <div className="py-24">
        <div className="mx-auto px-5 xl:px-0 container">
          <h2 className="gd-title mb-16 text-center tracking-[-0.02em] lg:leading-[64px] text-3xl md:text-5xl font-semibold">
            Philosophy of Search
            <span className="block"></span> & Recommendation
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px]">
            <EnhancingCard
              imageSrc="/img/icons/10.svg"
              title="Community Validation"
              description="People seek others' opinions. We provides context-aware insights into public decisions, enabling AI-driven data-based referrals."
            />
            <EnhancingCard
              imageSrc="/img/icons/11.svg"
              title="Collaborative Creation"
              description="We empower users to discover and own their personal taste through interactive search and recommendations."
            />
            <EnhancingCard
              imageSrc="/img/icons/12.svg"
              title="Real-Time Updates"
              description="Change is constant, including user preferences. Neurolinx reflects the latest trends through automated updates."
            />
          </div>
        </div>
      </div>
      <div className="lg:py-24">
        <div className="mx-auto px-5 xl:px-0 container">
          <h2 className="gd-title mb-16 text-center tracking-[-0.02em] lg:leading-[64px] text-3xl md:text-5xl font-semibold">
            Neurolinx AI
            <span className="block"></span>Corporate Values
          </h2>
        </div>
        <div className="corporate-values relative z-[1] flex flex-col justify-center gap-3">
          <div className="overflow-hidden whitespace-nowrap flex gap-4">
            <div className="flex justify-center items-center gap-3 item-scroll-left">
              <span className="flex whitespace-nowrap px-6 py-3 rounded-full border border-b-400 bg-b-600 text-xl text-w-100">
                Stellar
              </span>
              <span className="flex whitespace-nowrap px-6 py-3 rounded-full border border-b-400 bg-b-600 text-xl text-w-100">
                Leisurely Walk
              </span>
              <span className="flex whitespace-nowrap px-6 py-3 rounded-full border border-b-400 bg-b-600 text-xl text-w-100">
                Ironical Dialogue
              </span>
              <span className="flex whitespace-nowrap px-6 py-3 rounded-full border border-b-400 bg-b-600 text-xl text-w-100">
                Intense
              </span>
              <span className="flex whitespace-nowrap px-6 py-3 rounded-full border border-b-400 bg-b-600 text-xl text-w-100">
                Calm
              </span>
              <span className="flex whitespace-nowrap px-6 py-3 rounded-full border border-b-400 bg-b-600 text-xl text-w-100">
                Terrifying
              </span>
              <span className="flex whitespace-nowrap px-6 py-3 rounded-full border border-b-400 bg-b-600 text-xl text-w-100">
                Lavish Setting
              </span>
            </div>
            <div className="flex justify-center items-center gap-3 item-scroll-left">
              <span className="flex whitespace-nowrap px-6 py-3 rounded-full border border-b-400 bg-b-600 text-xl text-w-100">
                Stellar
              </span>
              <span className="flex whitespace-nowrap px-6 py-3 rounded-full border border-b-400 bg-b-600 text-xl text-w-100">
                Leisurely Walk
              </span>
              <span className="flex whitespace-nowrap px-6 py-3 rounded-full border border-b-400 bg-b-600 text-xl text-w-100">
                Ironical Dialogue
              </span>
              <span className="flex whitespace-nowrap px-6 py-3 rounded-full border border-b-400 bg-b-600 text-xl text-w-100">
                Intense
              </span>
              <span className="flex whitespace-nowrap px-6 py-3 rounded-full border border-b-400 bg-b-600 text-xl text-w-100">
                Calm
              </span>
              <span className="flex whitespace-nowrap px-6 py-3 rounded-full border border-b-400 bg-b-600 text-xl text-w-100">
                Terrifying
              </span>
              <span className="flex whitespace-nowrap px-6 py-3 rounded-full border border-b-400 bg-b-600 text-xl text-w-100">
                Lavish Setting
              </span>
            </div>
          </div>
          <div className="overflow-hidden whitespace-nowrap flex gap-4">
            <div className="flex justify-center items-center gap-3 item-scroll-right">
              <span className="flex whitespace-nowrap px-6 py-3 rounded-full border border-b-400 bg-b-600 text-xl text-w-100">
                Stellar
              </span>
              <span className="flex whitespace-nowrap px-6 py-3 rounded-full border border-b-400 bg-b-600 text-xl text-w-100">
                Leisurely Walk
              </span>
              <span className="flex whitespace-nowrap px-6 py-3 rounded-full border border-b-400 bg-b-600 text-xl text-w-100">
                Ironical Dialogue
              </span>
              <span className="flex whitespace-nowrap px-6 py-3 rounded-full border border-b-400 bg-b-600 text-xl text-w-100">
                Intense
              </span>
              <span className="flex whitespace-nowrap px-6 py-3 rounded-full border border-b-400 bg-b-600 text-xl text-w-100">
                Calm
              </span>
              <span className="flex whitespace-nowrap px-6 py-3 rounded-full border border-b-400 bg-b-600 text-xl text-w-100">
                Terrifying
              </span>
              <span className="flex whitespace-nowrap px-6 py-3 rounded-full border border-b-400 bg-b-600 text-xl text-w-100">
                Lavish Setting
              </span>
            </div>
            <div className="flex justify-center items-center gap-3 item-scroll-right">
              <span className="flex whitespace-nowrap px-6 py-3 rounded-full border border-b-400 bg-b-600 text-xl text-w-100">
                Stellar
              </span>
              <span className="flex whitespace-nowrap px-6 py-3 rounded-full border border-b-400 bg-b-600 text-xl text-w-100">
                Leisurely Walk
              </span>
              <span className="flex whitespace-nowrap px-6 py-3 rounded-full border border-b-400 bg-b-600 text-xl text-w-100">
                Ironical Dialogue
              </span>
              <span className="flex whitespace-nowrap px-6 py-3 rounded-full border border-b-400 bg-b-600 text-xl text-w-100">
                Intense
              </span>
              <span className="flex whitespace-nowrap px-6 py-3 rounded-full border border-b-400 bg-b-600 text-xl text-w-100">
                Calm
              </span>
              <span className="flex whitespace-nowrap px-6 py-3 rounded-full border border-b-400 bg-b-600 text-xl text-w-100">
                Terrifying
              </span>
              <span className="flex whitespace-nowrap px-6 py-3 rounded-full border border-b-400 bg-b-600 text-xl text-w-100">
                Lavish Setting
              </span>
            </div>
          </div>
          <div className="overflow-hidden whitespace-nowrap flex gap-4">
            <div className="flex justify-center items-center gap-3 item-scroll-left">
              <span className="flex whitespace-nowrap px-6 py-3 rounded-full border border-b-400 bg-b-600 text-xl text-w-100">
                Stellar
              </span>
              <span className="flex whitespace-nowrap px-6 py-3 rounded-full border border-b-400 bg-b-600 text-xl text-w-100">
                Leisurely Walk
              </span>
              <span className="flex whitespace-nowrap px-6 py-3 rounded-full border border-b-400 bg-b-600 text-xl text-w-100">
                Ironical Dialogue
              </span>
              <span className="flex whitespace-nowrap px-6 py-3 rounded-full border border-b-400 bg-b-600 text-xl text-w-100">
                Intense
              </span>
              <span className="flex whitespace-nowrap px-6 py-3 rounded-full border border-b-400 bg-b-600 text-xl text-w-100">
                Calm
              </span>
              <span className="flex whitespace-nowrap px-6 py-3 rounded-full border border-b-400 bg-b-600 text-xl text-w-100">
                Terrifying
              </span>
              <span className="flex whitespace-nowrap px-6 py-3 rounded-full border border-b-400 bg-b-600 text-xl text-w-100">
                Lavish Setting
              </span>
            </div>
            <div className="flex justify-center items-center gap-3 item-scroll-left">
              <span className="flex whitespace-nowrap px-6 py-3 rounded-full border border-b-400 bg-b-600 text-xl text-w-100">
                Stellar
              </span>
              <span className="flex whitespace-nowrap px-6 py-3 rounded-full border border-b-400 bg-b-600 text-xl text-w-100">
                Leisurely Walk
              </span>
              <span className="flex whitespace-nowrap px-6 py-3 rounded-full border border-b-400 bg-b-600 text-xl text-w-100">
                Ironical Dialogue
              </span>
              <span className="flex whitespace-nowrap px-6 py-3 rounded-full border border-b-400 bg-b-600 text-xl text-w-100">
                Intense
              </span>
              <span className="flex whitespace-nowrap px-6 py-3 rounded-full border border-b-400 bg-b-600 text-xl text-w-100">
                Calm
              </span>
              <span className="flex whitespace-nowrap px-6 py-3 rounded-full border border-b-400 bg-b-600 text-xl text-w-100">
                Terrifying
              </span>
              <span className="flex whitespace-nowrap px-6 py-3 rounded-full border border-b-400 bg-b-600 text-xl text-w-100">
                Lavish Setting
              </span>
            </div>
          </div>
          <div className="overflow-hidden whitespace-nowrap flex gap-4">
            <div className="flex justify-center items-center gap-3 item-scroll-right">
              <span className="flex whitespace-nowrap px-6 py-3 rounded-full border border-b-400 bg-b-600 text-xl text-w-100">
                Stellar
              </span>
              <span className="flex whitespace-nowrap px-6 py-3 rounded-full border border-b-400 bg-b-600 text-xl text-w-100">
                Leisurely Walk
              </span>
              <span className="flex whitespace-nowrap px-6 py-3 rounded-full border border-b-400 bg-b-600 text-xl text-w-100">
                Ironical Dialogue
              </span>
              <span className="flex whitespace-nowrap px-6 py-3 rounded-full border border-b-400 bg-b-600 text-xl text-w-100">
                Intense
              </span>
              <span className="flex whitespace-nowrap px-6 py-3 rounded-full border border-b-400 bg-b-600 text-xl text-w-100">
                Calm
              </span>
              <span className="flex whitespace-nowrap px-6 py-3 rounded-full border border-b-400 bg-b-600 text-xl text-w-100">
                Terrifying
              </span>
              <span className="flex whitespace-nowrap px-6 py-3 rounded-full border border-b-400 bg-b-600 text-xl text-w-100">
                Lavish Setting
              </span>
            </div>
            <div className="flex justify-center items-center gap-3 item-scroll-right">
              <span className="flex whitespace-nowrap px-6 py-3 rounded-full border border-b-400 bg-b-600 text-xl text-w-100">
                Stellar
              </span>
              <span className="flex whitespace-nowrap px-6 py-3 rounded-full border border-b-400 bg-b-600 text-xl text-w-100">
                Leisurely Walk
              </span>
              <span className="flex whitespace-nowrap px-6 py-3 rounded-full border border-b-400 bg-b-600 text-xl text-w-100">
                Ironical Dialogue
              </span>
              <span className="flex whitespace-nowrap px-6 py-3 rounded-full border border-b-400 bg-b-600 text-xl text-w-100">
                Intense
              </span>
              <span className="flex whitespace-nowrap px-6 py-3 rounded-full border border-b-400 bg-b-600 text-xl text-w-100">
                Calm
              </span>
              <span className="flex whitespace-nowrap px-6 py-3 rounded-full border border-b-400 bg-b-600 text-xl text-w-100">
                Terrifying
              </span>
              <span className="flex whitespace-nowrap px-6 py-3 rounded-full border border-b-400 bg-b-600 text-xl text-w-100">
                Lavish Setting
              </span>
            </div>
          </div>
          <div className="overflow-hidden whitespace-nowrap flex gap-4">
            <div className="flex justify-center items-center gap-3 item-scroll-left">
              <span className="flex whitespace-nowrap px-6 py-3 rounded-full border border-b-400 bg-b-600 text-xl text-w-100">
                Stellar
              </span>
              <span className="flex whitespace-nowrap px-6 py-3 rounded-full border border-b-400 bg-b-600 text-xl text-w-100">
                Leisurely Walk
              </span>
              <span className="flex whitespace-nowrap px-6 py-3 rounded-full border border-b-400 bg-b-600 text-xl text-w-100">
                Ironical Dialogue
              </span>
              <span className="flex whitespace-nowrap px-6 py-3 rounded-full border border-b-400 bg-b-600 text-xl text-w-100">
                Intense
              </span>
              <span className="flex whitespace-nowrap px-6 py-3 rounded-full border border-b-400 bg-b-600 text-xl text-w-100">
                Calm
              </span>
              <span className="flex whitespace-nowrap px-6 py-3 rounded-full border border-b-400 bg-b-600 text-xl text-w-100">
                Terrifying
              </span>
              <span className="flex whitespace-nowrap px-6 py-3 rounded-full border border-b-400 bg-b-600 text-xl text-w-100">
                Lavish Setting
              </span>
            </div>
            <div className="flex justify-center items-center gap-3 item-scroll-left">
              <span className="flex whitespace-nowrap px-6 py-3 rounded-full border border-b-400 bg-b-600 text-xl text-w-100">
                Stellar
              </span>
              <span className="flex whitespace-nowrap px-6 py-3 rounded-full border border-b-400 bg-b-600 text-xl text-w-100">
                Leisurely Walk
              </span>
              <span className="flex whitespace-nowrap px-6 py-3 rounded-full border border-b-400 bg-b-600 text-xl text-w-100">
                Ironical Dialogue
              </span>
              <span className="flex whitespace-nowrap px-6 py-3 rounded-full border border-b-400 bg-b-600 text-xl text-w-100">
                Intense
              </span>
              <span className="flex whitespace-nowrap px-6 py-3 rounded-full border border-b-400 bg-b-600 text-xl text-w-100">
                Calm
              </span>
              <span className="flex whitespace-nowrap px-6 py-3 rounded-full border border-b-400 bg-b-600 text-xl text-w-100">
                Terrifying
              </span>
              <span className="flex whitespace-nowrap px-6 py-3 rounded-full border border-b-400 bg-b-600 text-xl text-w-100">
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
