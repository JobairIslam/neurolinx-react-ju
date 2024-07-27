import React from "react";
import Image from "next/image";

import Header from "../components/Header";
import FooterTop from "../components/FooterTop";
import Footer from "../components/Footer";
import EnhancingCard from "../components/EnhancingCard";
import CustomCard from "../components/CustomCard";
import FAQAccordion from "../components/FAQSection";

export default function page() {
  return (
    <div className="overflow-x-hidden font-normal bg-center bg-no-repeat bg-cover lg:bg-solution bg-body-gd">
      <Header />
      <div className="pt-[135px] lg:pt-[164px] pb-24">
        <div className="container px-5 mx-auto xl:px-0">
          <h1 className="gd-title tracking-[-0.02em] text-center text-3xl md:text-4xl lg:text-64x leading-tight md:leading-relaxed lg:leading-[84px] font-semibold">
            Personalized Experiences
            <span className="inline-block lg:block">with Advanced Prompts</span>
          </h1>
          <p className="mt-6 text-base text-center md:text-xl text-w-100">
            Neurolinx enables context-based search and recommendations without
            user logs,<span className="inline-block lg:block"></span> enhancing
            user personalization and experience.
          </p>
        </div>
      </div>
      <div class="lg:py-24">
        <div class="mx-auto px-5 xl:px-0 container">
          <h2 class="gd-title mb-16 text-center tracking-[-0.02em] lg:leading-[64px] text-3xl md:text-5xl font-semibold">
            Enhancing Context-Aware
            <span class="inline-block lg:block"></span>Natural Language
            Understanding
          </h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px]">
            <EnhancingCard
              imageSrc="/img/icons/1.svg"
              title="Streamlined Setup"
              description="Automate data preprocessing, learning updates, and load balancing without extra infrastructure or manpower."
            />
            <EnhancingCard
              imageSrc="/img/icons/2.svg"
              title="Seamless Integration"
              description="Easily integrate Neurolinx with your data catalogue and connect it to your existing search, recommendation, or AI systems."
            />
            <EnhancingCard
              imageSrc="/img/icons/3.svg"
              title="Recent Outcomes"
              description="Utilize real-time updates to incorporate recent data changes seamlessly, without additional operational costs."
            />
            <EnhancingCard
              imageSrc="/img/icons/4.svg"
              title="Revenue Generation"
              description="Drive revenue growth through Neurolinx by integrating its units into your ad system or offering valuable data insights to other businesses."
            />
            <EnhancingCard
              imageSrc="/img/icons/5.svg"
              title="Reducing Workload"
              description="Neurolinx's data analytics expedite decision-making and time-to-market, minimizing workload and boosting efficiency."
            />
            <EnhancingCard
              imageSrc="/img/icons/6.svg"
              title="Customizable Outcomes"
              description="Overcome the limitations of opaque
AI products with our flexible platform, allowing easy adjustments to align results with your business strategy."
            />
            <EnhancingCard
              imageSrc="/img/icons/7.svg"
              title="Long-tail Recs"
              description="Enhance the value of your data by leveraging social-powered recommendation data to deliver more personalized and relevant results."
            />
            <EnhancingCard
              imageSrc="/img/icons/8.svg"
              title="Tailored Outcomes"
              description="Kick-start user profiling with social-based datasets to resolve the cold start problem and deliver personalized results."
            />
            <EnhancingCard
              imageSrc="/img/icons/9.svg"
              title="Voice Search Upgrade"
              description="Optimize voice search with Neurolinx's NLP units that understand colloquial terms and phrases, ensuring precise and intuitive interactions."
            />
          </div>
        </div>
      </div>
      <div className="py-24">
        <div className="container px-5 mx-auto xl:px-0">
          <h2 className="gd-title mb-16 text-center tracking-[-0.02em] lg:leading-[64px] text-3xl md:text-5xl font-semibold">
            Neurolinx Solves Industry
            <span className="inline-block lg:block"></span>Specific Problems
          </h2>
          <div className="px-4 pt-4 rounded-lg md:pt-8 lg:pt-16 md:px-8 lg:px-16 bg-gd-tertiary">
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
      <div className="lg:py-24">
        <div className="container px-5 mx-auto xl:px-0">
          <h2 className="gd-title mb-16 text-center tracking-[-0.02em] lg:leading-[64px] text-3xl md:text-5xl font-semibold">
            Leverage Any Data Source
            <span className="inline-block lg:block"></span>No Matter How Diverse
          </h2>
          <div className="flex flex-col">
            <div className="flex flex-col gap-[30px]">
              <div className="flex flex-col-reverse lg:flex-row justify-start lg:justify-between gap-[30px] lg:gap-[126px] p-6 md:p-12 rounded-lg border border-b-600 bg-gd-tertiary">
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
                <div className="rounded-lg">
                  <Image
                    className="w-full rounded-lg"
                    src="/img/diverse1.png"
                    alt="diverse"
                    width={534}
                    height={464}
                  />
                </div>
              </div>
              <div className="flex flex-col-reverse lg:flex-row-reverse justify-start lg:justify-between gap-[30px] lg:gap-[126px] p-6 md:p-12 rounded-lg border border-b-600 bg-gd-tertiary">
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
                <div className="rounded-lg">
                  <Image
                    className="w-full rounded-lg"
                    src="/img/diverse2.png"
                    alt="diverse"
                    width={534}
                    height={464}
                  />
                </div>
              </div>
              <div className="flex flex-col-reverse lg:flex-row justify-start lg:justify-between gap-[30px] lg:gap-[126px] p-6 md:p-12 rounded-lg border border-b-600 bg-gd-tertiary">
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
                <div className="rounded-lg">
                  <Image
                    className="w-full rounded-lg"
                    src="/img/diverse3.png"
                    alt="diverse"
                    width={534}
                    height={464}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="py-24">
        <div class="mx-auto px-5 xl:px-0 container">
          <h2 class="gd-title mb-16 text-center tracking-[-0.02em] lg:leading-[64px] text-3xl md:text-5xl font-semibold">
            Custom AI Solutions
            <span class="inline-block lg:block"></span>Across Industries
          </h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px]">
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
      <div className="lg:py-24">
        <div className="container px-5 mx-auto xl:px-0">
          <h2 className="gd-title mb-16 text-center tracking-[-0.02em] lg:leading-[64px] text-3xl md:text-5xl font-semibold">
            Unlocking Unparalleled
            <span className="inline-block lg:block"></span>Semantic Capabilities
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px]">
            <div className="flex gap-6 p-6 lg:p-12 bg-gd-tertiary">
              <h3 className="leading-[52px] text-40x font-medium text-w-900">
                16M+
              </h3>
              <span className="inline-block w-[1px] h-full bg-tropical-indigo"></span>
              <p className="text-base text-w-100">
                Revolutionizing AI Integration
              </p>
            </div>
            <div className="flex gap-6 p-6 lg:p-12 bg-gd-tertiary">
              <h3 className="leading-[52px] text-40x font-medium text-w-900">
                64T+
              </h3>
              <span className="inline-block w-[1px] h-full bg-tropical-indigo"></span>
              <p className="text-base text-w-100">Advanced AI Solutions</p>
            </div>
            <div className="flex gap-6 p-6 lg:p-12 bg-gd-tertiary">
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
      <div className="py-24">
        <div className="container px-5 mx-auto xl:px-0">
          <h2 className="gd-title mb-16 text-center tracking-[-0.02em] lg:leading-[64px] text-3xl md:text-5xl font-semibold">
            Step-by-Step Guide
            <span className="inline-block lg:block"></span>to Integrating
            Neurolinx
          </h2>
          <Image
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
