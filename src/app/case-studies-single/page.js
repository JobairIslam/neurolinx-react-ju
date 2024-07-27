import React from "react";
import Image from "next/image";

import Header from "../components/Header";
import FooterTop from "../components/FooterTop";
import Footer from "../components/Footer";

import CustomCard from "../components/CustomCard";

export default function page() {
  return (
    <div className="font-normal bg-center bg-no-repeat bg-cover bg-body-gd lg:bg-case-study-single">
      <Header />
      <div className="pt-[135px] lg:pt-[164px] pb-24">
        <div className="container px-5 mx-auto xl:px-0">
          <h1 className="tracking-[-0.02em] text-center text-3xl md:text-4xl lg:text-5xl leading-tight md:leading-relaxed lg:leading-[64px] font-semibold text-w-500">
            Optimized Travel Experiences through
            <span className="inline-block md:block"></span>AI-driven
            Recommendations
          </h1>
          <p className="mt-6 font-normal text-center text-w-100">
            Neurolinx AI X Booking.com
          </p>
        </div>
      </div>
      <div className="lg:py-24">
        <div className="container px-5 mx-auto xl:px-0">
          <div className="flex flex-col md:flex-row gap-[30px]">
            <div className="w-full md:max-w-[850px]">
              <h3 className="mb-4 text-xl font-medium text-w-500">
                Our Partner
              </h3>
              <p className="text-base text-w-100">
                Established in 1996 in Amsterdam, Booking.com is a leading
                digital travel company dedicated to simplifying global travel
                experiences. Serving as one of the largest travel marketplaces
                worldwide, Booking.com empowers over 28 million properties
                across 43 languages, enabling them to connect with a global
                audience and expand their reach.
              </p>
              <h3 className="mt-12 mb-4 text-xl font-medium text-w-500">
                The Challenge
              </h3>
              <p className="mb-6 text-base text-w-100">
                Korea stands as a leading outbound market in global travel,
                surpassing 40 million departures in 2022. Yet, challenges in
                accessing diverse travel information often steer travelers
                towards popular destinations. Despite the proliferation of
                online travel agencies (OTAs), individuals find it challenging
                to research and compare prices effectively. High OTA margins
                further inflate costs for individual travelers, underscoring the
                disparity compared to group travel expenses.
              </p>
              <div className="flex flex-col gap-6 mb-6 sm:flex-row">
                <div className="p-6 text-sm border-s border-tropical-indigo text-w-900">
                  The imbalance in the travel industry restricted tourist
                  interest to heavily promoted destinations.
                </div>
                <div className="p-6 text-sm border-s border-tropical-indigo text-w-900">
                  High travel costs are driven by significant investments in
                  marketing and operational infrastructure.
                </div>
                <div className="p-6 text-sm border-s border-tropical-indigo text-w-900">
                  Limited opportunities for new businesses to secure market
                  share in the competitive travel industry.
                </div>
              </div>
              <p className="text-base text-w-100">
                Consequently, many Koreans opt for domestic travel destinations.
                Apart from occasional visits to the United States, Asian
                countries like China, Japan, Vietnam, Thailand, and Hong Kong
                have consistently topped the list of preferred destinations for
                years. However, with increasing international travel, there has
                been a rising demand for more diverse destination options and
                activity choices. This created an opportunity for OTAs to
                broaden their business horizons by forging partnerships and
                affiliations with technology companies like Neurolinx.
              </p>
              <h3 className="mt-12 mb-4 text-xl font-medium text-w-500">
                The Solution
              </h3>
              <p className="mb-6 text-base text-w-100">
                Neurolinx AI leveraged advanced NLP, ML, and AI algorithms to
                develop a dynamic travel guide, powering the unique travel app,
                My Bucketlist. The app aggregates over 100 million travel
                recommendations for 17,000+ cities globally, enhancing travel
                choices and market diversity.
              </p>
              <div className="flex flex-col w-full gap-6 mb-6 sm:flex-row">
                <div className="w-full p-6 text-sm border-s border-tropical-indigo text-w-900">
                  Neurolinx AIOps
                </div>
                <div className="w-full p-6 text-sm border-s border-tropical-indigo text-w-900">
                  CMS & Business Intelligence
                </div>
              </div>
              <p className="mb-6 text-base text-w-100">
                Neurolinx enables city exploration recommendations, detailed
                curation for extensive discovery, and comprehensive travel
                information and reviews. With a simple click, users can
                seamlessly navigate to Booking.com for hotel reservations at the
                lowest available rates. Thanks to Neurolinx AI&#39;s AI-driven
                automation, Booking.com introduced a 15% cash-back offer,
                leveraging operational savings to benefit its users.
              </p>
              <h3 className="mb-4 text-xl text-w-500">The Result</h3>
              <p className="mb-6 text-base text-w-100">
                Neurolinx created a unique travel experience for My Bucketlist
                users powered by AI. The app recorded over 500K downloads in
                just the first month of its launch and 1M+ downloads today,
                thanks to unprecedented travel information and discounts it
                offers. The app is fully automated, which means it continues to
                bring profits to Neurolinx AI and Booking.com with very little
                maintenance required.
              </p>
              <div className="grid grid-cols-1 gap-6 mb-6 sm:grid-cols-2">
                <div className="w-full md:max-w-[365px] p-6 border-s border-tropical-indigo text-sm text-w-900">
                  Record-breaking downloads (over 500K after first month of
                  launch)
                </div>
                <div className="w-full md:max-w-[365px] p-6 border-s border-tropical-indigo text-sm text-w-900">
                  Cash-back rewards on all hotel reservations worldwide
                </div>
                <div className="w-full md:max-w-[365px] p-6 border-s border-tropical-indigo text-sm text-w-900">
                  Fully automated OTA services provide Booking.com with a new
                  profit source
                </div>
                <div className="w-full md:max-w-[365px] p-6 border-s border-tropical-indigo text-sm text-w-900">
                  Strengthened partnerships in the OTA industry
                </div>
              </div>
              <p className="text-base text-w-100">
                My Bucketlist helped to build an early use case of AI Neurolinx
                and establish a high profile in the travel industry. The
                partnership with Booking.com also facilitated additional
                partnerships with global OTAs such as Hotels Combined to build
                an AI-powered hotel booking app, Staypia.
              </p>
            </div>
            <div className="w-full md:max-w-[410px] p-12 md:p-12 rounded-lg bg-gd-tertiary h-[856px] border border-b-600">
              <Image
                className="mb-6"
                src="/img/booking-logo.png"
                alt="booking logo"
                width={81.08}
                height={80}
              />
              <h3 className="mb-2 text-2xl font-medium text-w-500">
                Booking.com
              </h3>
              <p className="mb-6 text-base text-w-100">
                Founded in 1996 in Amsterdam, Booking.com has grown from a small
                Dutch startup to one of the world’s leading digital travel
                companies.
              </p>
              <div className="w-full h-[1px] bg-b-500 mb-6"></div>
              <p className="mb-2 text-sm text-w-100">Company Industry</p>
              <p className="mb-6 text-base font-medium text-w-500">
                Travel & Experiences
              </p>
              <div className="w-full h-[1px] bg-b-500 mb-6"></div>
              <p className="mb-2 text-sm text-w-100">Company Size</p>
              <p className="mb-6 text-base font-medium text-w-500">
                10,001+ employees
              </p>
              <div className="w-full h-[1px] bg-b-500 mb-6"></div>
              <p className="mb-2 text-sm text-w-100">Specialties</p>
              <p className="mb-6 text-base font-medium text-w-500">
                E-Commerce & Technology
              </p>
              <div className="w-full h-[1px] bg-b-500 mb-6"></div>
              <p className="mb-2 text-sm text-w-100">Headquarters</p>
              <p className="mb-6 text-base font-medium text-w-500">
                Amsterdam, Netherlands
              </p>
              <div className="w-full h-[1px] bg-b-500 mb-6"></div>
              <p className="mb-2 text-sm text-w-100">Website URL</p>
              <a
                href="https://www.booking.com/"
                className="text-base font-medium text-w-500"
              >
                www.booking.com
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="py-24">
        <div className="container px-5 mx-auto xl:px-0">
          <div className="flex flex-col items-center justify-center">
            <h2 className="gd-title font-semibold text-2xl sm:text-3xl md:text-4xl leading-8 sm:leading-10 md:leading-[64px] text-center tracking-[-0.02em] mb-16">
              Explore other
              <span className="block">Case Studies</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
              <CustomCard
                imgSrc="/img/case-card1.png"
                imgAlt="case card"
                title="Global Personalized Product Discovery Platform for 360+ Beauty Brands"
                linkHref="/team"
                linkText="Read Case Study"
                arrowImgSrc="/img/icons/arrow-right.svg"
                arrowImgAlt="arrow"
              />
              <CustomCard
                imgSrc="/img/case-card2.png"
                imgAlt="case card"
                title="Fan-Powered Dynamic Music Chart Using Online Social Data"
                linkHref="/team"
                linkText="Read Case Study"
                arrowImgSrc="/img/icons/arrow-right.svg"
                arrowImgAlt="arrow"
              />
              <CustomCard
                imgSrc="/img/case-card3.png"
                imgAlt="case card"
                title="AI Voice Search Leaders: Transforming the Duty-Free Industry"
                linkHref="/team"
                linkText="Read Case Study"
                arrowImgSrc="/img/icons/arrow-right.svg"
                arrowImgAlt="arrow"
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
