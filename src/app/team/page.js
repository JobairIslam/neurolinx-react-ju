import React from "react";
import TeamCard from "../components/TeamCard";
import Header from "../components/Header";
import FooterTop from "../components/FooterTop";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";
import teamCardData from "/src/data/teamData.json";

const Page = () => {
  return (
    <div className="font-normal bg-b-900">
      <Header />
      <div className="pt-[135px] lg:pt-[164px] pb-24 bg-center bg-no-repeat bg-cover bg-primary-hero">
        <div className="container px-5 mx-auto xl:px-0">
          <h1
            data-aos="fade-up"
            className="gd-title tracking-[-0.02em] text-center text-3xl md:text-4xl lg:text-64x leading-tight md:leading-relaxed lg:leading-[84px] font-semibold"
          >
            Meet Our Exceptional
            <span className="inline-block lg:block"></span>Team of Data Experts
          </h1>
          <p
            data-aos="fade-up"
            className="mt-6 text-base text-center md:text-xl text-w-100"
          >
            Harnessing data science for public preference curation facilitating
            discovery<span className="inline-block lg:block"></span>and
            communication for similar tastes.
          </p>
        </div>
      </div>
      <div className="bg-center bg-no-repeat bg-cover lg:py-24 bg-team">
        <div className="container px-5 mx-auto xl:px-0">
          <h2
            data-aos="fade-down"
            className="gd-title mb-16 text-center tracking-[-0.02em] lg:leading-[64px] text-3xl md:text-5xl font-semibold"
          >
            Our Proficient
            <span className="inline-block lg:block"></span>Business Team
          </h2>
          <div
            data-aos="fade-up"
            className="grid grid-cols-1 sm:grid-cols-2 gap-[30px]"
          >
            {teamCardData.map((item, index) => (
              <TeamCard
                key={index}
                name={item.name}
                title={item.title}
                profileImage={item.profileImage}
                linkedinUrl={item.linkedinUrl}
                twitterUrl={item.twitterUrl}
                skills={item.skills}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="py-24 bg-center bg-no-repeat bg-cover bg-data-science">
        <div className="container px-5 mx-auto xl:px-0">
          <h2
            data-aos="fade-down"
            className="gd-title mb-16 text-center tracking-[-0.02em] lg:leading-[64px] text-3xl md:text-5xl font-semibold"
          >
            Accomplishments in Data
            <span className="inline-block lg:block"></span>Science &amp;
            Engineering
          </h2>
          <div>
            <div
              data-aos="fade-up"
              className="flex flex-col md:flex-row justify-between gap-8 lg:gap-[126px] p-6 md:p-12 rounded-lg border border-b-600 bg-gd-tertiary"
            >
              <div className="flex flex-col items-start justify-between">
                <span className="px-4 py-2 border rounded-full border-tropical-indigo text-tropical-indigo">
                  2023
                </span>
                <div>
                  <h3 className="mt-8 mb-4 text-2xl font-medium lg:mt-0 text-w-500">
                    #1 Product on Product Hunt
                  </h3>
                  <p className="text-base text-w-100">
                    Founded in 2016 by experienced data scientists, engineers,
                    and consultants, Neurolinx AI is dedicated to maximizing the
                    business potential of data and AI.
                  </p>
                </div>
              </div>
              <Image
                width={424}
                height={276}
                src="/img/accom-card.png"
                alt="science engineering"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-center bg-no-repeat bg-cover lg:py-24 bg-milestone">
        <div className="container px-5 mx-auto xl:px-0">
          <h2
            data-aos="fade-down"
            className="gd-title mb-16 text-center tracking-[-0.02em] lg:leading-[64px] text-3xl md:text-5xl font-semibold"
          >
            Milestones and
            <span className="inline-block lg:block"></span>Accomplishments
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[30px]">
            <div
              data-aos="fade-up-right"
              className="flex items-center gap-6 p-6 border rounded-lg md:p-12 border-b-600 bg-gd-tertiary"
            >
              <div className="inline-block p-6 rounded-full bg-primary btn-border">
                <Image
                  width={48}
                  height={48}
                  src="/img/icons/13.svg"
                  alt="icon"
                />
              </div>
              <div>
                <h3 className="mb-4 text-xl font-medium text-w-500">
                  Cutting-Edge Technology Partner
                </h3>
                <p className="text-sm text-w-100">Amazon Web Services (AWS)</p>
              </div>
            </div>
            <div
              data-aos="fade-up-left"
              className="flex items-center gap-6 p-6 border rounded-lg md:p-12 border-b-600 bg-gd-tertiary"
            >
              <div className="inline-block p-6 rounded-full bg-primary btn-border">
                <Image
                  width={48}
                  height={48}
                  src="/img/icons/14.svg"
                  alt="icon"
                />
              </div>
              <div>
                <h3 className="mb-4 text-xl font-medium text-w-500">
                  Accelerate Co-Sell Collaboration
                </h3>
                <p className="text-sm text-w-100">Amazon Web Service (AWS)</p>
              </div>
            </div>
            <div
              data-aos="fade-up-right"
              className="flex items-center gap-6 p-6 border rounded-lg md:p-12 border-b-600 bg-gd-tertiary"
            >
              <div className="inline-block p-6 rounded-full bg-primary btn-border">
                <Image
                  width={48}
                  height={48}
                  src="/img/icons/15.svg"
                  alt="icon"
                />
              </div>
              <div>
                <h3 className="mb-4 text-xl font-medium text-w-500">
                  Global Best Case Selection
                </h3>
                <p className="text-sm text-w-100">Amazon Web Service (AWS)</p>
              </div>
            </div>
            <div
              data-aos="fade-up-left"
              className="flex items-center gap-6 p-6 border rounded-lg md:p-12 border-b-600 bg-gd-tertiary"
            >
              <div className="inline-block p-6 rounded-full bg-primary btn-border">
                <Image
                  width={48}
                  height={48}
                  src="/img/icons/16.svg"
                  alt="icon"
                />
              </div>
              <div>
                <h3 className="mb-4 text-xl font-medium text-w-500">
                  Most Promising AI Startup
                </h3>
                <p className="text-sm text-w-100">NVIDIA (2019)</p>
              </div>
            </div>
            <div
              data-aos="fade-up-right"
              className="flex items-center gap-6 p-6 border rounded-lg md:p-12 border-b-600 bg-gd-tertiary"
            >
              <div className="inline-block p-6 rounded-full bg-primary btn-border">
                <Image
                  width={48}
                  height={48}
                  src="/img/icons/17.svg"
                  alt="icon"
                />
              </div>
              <div>
                <h3 className="mb-4 text-xl font-medium text-w-500">
                  #1 Best Rated Product
                </h3>
                <p className="text-sm text-w-100">
                  Product Hunt (2023)NVIDIA (2019)
                </p>
              </div>
            </div>
            <div
              data-aos="fade-up-left"
              className="flex items-center gap-6 p-6 border rounded-lg md:p-12 border-b-600 bg-gd-tertiary"
            >
              <div className="inline-block p-6 rounded-full bg-primary btn-border">
                <Image
                  width={48}
                  height={48}
                  src="/img/icons/18.svg"
                  alt="icon"
                />
              </div>
              <div>
                <h3 className="mb-4 text-xl font-medium text-w-500">
                  Registered 32 patents
                </h3>
                <p className="text-sm text-w-100">
                  Plus 88 applications worldwide
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-24 bg-center bg-no-repeat bg-cover bg-lead-ai">
        <div className="container px-5 mx-auto xl:px-0">
          <h2
            data-aos="fade-down"
            className="gd-title mb-16 text-center tracking-[-0.02em] lg:leading-[64px] text-3xl md:text-5xl font-semibold"
          >
            Join the Neurolinx AI Family
            <span className="inline-block lg:block">Lead AI Innovation</span>
          </h2>
          <div className="flex flex-col gap-6">
            <div
              data-aos="fade-up-right"
              className="flex flex-col items-start justify-start gap-6 p-6 border rounded-lg md:flex-row md:items-center md:justify-between lg:p-12 border-b-600 bg-gd-tertiary"
            >
              <div>
                <h3 className="mb-2 text-2xl font-medium text-w-500">
                  Forward Deployed Software Engineer
                </h3>
                <p className="text-base text-w-100">San Francisco</p>
              </div>
              <Link href="#" legacyBehavior>
                <a className="flex items-center gap-2 px-6 py-[14px] rounded-full border border-tropical-indigo text-base font-medium bg-transparent hover:bg-tropical-indigo text-w-900 transition-all duration-300">
                  Apply Now
                  <Image
                    src="/img/icons/arrow-right.svg"
                    alt="arrow"
                    width={24}
                    height={24}
                  />
                </a>
              </Link>
            </div>
            <div
              data-aos="fade-up-left"
              className="flex flex-col items-start justify-start gap-6 p-6 border rounded-lg md:flex-row md:items-center md:justify-between lg:p-12 border-b-600 bg-gd-tertiary"
            >
              <div>
                <h3 className="mb-2 text-2xl font-medium text-w-500">
                  Senior AI Infrastructure Engineer
                </h3>
                <p className="text-base text-w-100">San Francisco</p>
              </div>
              <Link href="#" legacyBehavior>
                <a className="flex items-center gap-2 px-6 py-[14px] rounded-full border border-tropical-indigo text-base font-medium bg-transparent hover:bg-tropical-indigo text-w-900 transition-all duration-300">
                  Apply Now
                  <Image
                    src="/img/icons/arrow-right.svg"
                    alt="arrow"
                    width={24}
                    height={24}
                  />
                </a>
              </Link>
            </div>
            <div
              data-aos="fade-up-right"
              className="flex flex-col items-start justify-start gap-6 p-6 border rounded-lg md:flex-row md:items-center md:justify-between lg:p-12 border-b-600 bg-gd-tertiary"
            >
              <div>
                <h3 className="mb-2 text-2xl font-medium text-w-500">
                  Systems Research Engineer, GPU Programming
                </h3>
                <p className="text-base text-w-100">San Francisco</p>
              </div>
              <Link href="#" legacyBehavior>
                <a className="flex items-center gap-2 px-6 py-[14px] rounded-full border border-tropical-indigo text-base font-medium bg-transparent hover:bg-tropical-indigo text-w-900 transition-all duration-300">
                  Apply Now
                  <Image
                    src="/img/icons/arrow-right.svg"
                    alt="arrow"
                    width={24}
                    height={24}
                  />
                </a>
              </Link>
            </div>
            <div
              data-aos="fade-up-left"
              className="flex flex-col items-start justify-start gap-6 p-6 border rounded-lg md:flex-row md:items-center md:justify-between lg:p-12 border-b-600 bg-gd-tertiary"
            >
              <div>
                <h3 className="mb-2 text-2xl font-medium text-w-500">
                  Sales Development Representative
                </h3>
                <p className="text-base text-w-100">San Francisco</p>
              </div>
              <Link href="#" legacyBehavior>
                <a className="flex items-center gap-2 px-6 py-[14px] rounded-full border border-tropical-indigo text-base font-medium bg-transparent hover:bg-tropical-indigo text-w-900 transition-all duration-300">
                  Apply Now
                  <Image
                    src="/img/icons/arrow-right.svg"
                    alt="arrow"
                    width={24}
                    height={24}
                  />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-center bg-no-repeat bg-cover lg:py-24 bg-corporate">
        <div className="container px-5 mx-auto xl:px-0">
          <h2
            data-aos="fade-down"
            className="gd-title mb-16 text-center tracking-[-0.02em] lg:leading-[64px] text-3xl md:text-5xl font-semibold"
          >
            Supported by
            <span className="inline-block lg:block">Remarkable Investors</span>
          </h2>
          <div className="flex flex-col gap-6">
            <div
              data-aos="fade-up"
              className="flex flex-wrap justify-center items-center gap-[30px]"
            >
              <Image
                src="/img/brand/6.svg"
                alt="brand"
                width={190}
                height={78}
              />
              <Image
                src="/img/brand/7.svg"
                alt="brand"
                width={190}
                height={92}
              />
              <Image
                src="/img/brand/8.svg"
                alt="brand"
                width={190}
                height={70}
              />
              <Image
                src="/img/brand/9.svg"
                alt="brand"
                width={190}
                height={70}
              />
            </div>
            <div
              data-aos="fade-up"
              className="flex flex-wrap justify-center items-center gap-[30px]"
            >
              <Image
                src="/img/brand/10.svg"
                alt="brand"
                width={190}
                height={76}
              />
              <Image
                src="/img/brand/11.svg"
                alt="brand"
                width={190}
                height={76}
              />
              <Image
                src="/img/brand/12.svg"
                alt="brand"
                width={190}
                height={76}
              />
            </div>
            <div
              data-aos="fade-up"
              className="flex flex-wrap justify-center items-center gap-[30px]"
            >
              <Image
                src="/img/brand/13.svg"
                alt="brand"
                width={190}
                height={88}
              />
              <Image
                src="/img/brand/14.svg"
                alt="brand"
                width={190}
                height={84}
              />
            </div>
          </div>
        </div>
      </div>
      <FooterTop />
      <Footer />
    </div>
  );
};

export default Page;
