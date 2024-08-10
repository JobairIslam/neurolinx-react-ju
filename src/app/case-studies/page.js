import React from "react";
import Header from "../components/Header";
import FooterTop from "../components/FooterTop";
import Footer from "../components/Footer";
import DiscoverCard from "../components/DiscoverCard";
import CustomCard from "../components/CustomCard";
import customCardData from "/src/data/customCardData.json";
import discoverCardData from "/src/data/discoverCardData.json";
export default function page() {
  return (
    <div className="overflow-hidden font-normal bg-b-900">
      <Header />
      <div className="pt-[135px] lg:pt-[164px] pb-24 bg-center bg-no-repeat bg-cover bg-secondary-hero">
        <div className="container px-5 mx-auto xl:px-0">
          <h1
            data-aos="fade-up"
            className="gd-title tracking-[-0.02em] text-center text-3xl md:text-4xl lg:text-64x leading-tight md:leading-relaxed lg:leading-[84px] font-semibold"
          >
            Case Studies
            <span className="block"></span>by Neurolinx
          </h1>
          <p
            data-aos="fade-up"
            className="mt-6 text-base text-center md:text-xl text-w-100"
          >
            Explore our customer case studies to delve into the practical
            applications
            <span className="inline-block lg:block"></span>of Neurolinx and its
            transformative impact on various industries.
          </p>
        </div>
      </div>
      <div className="py-8 bg-center bg-no-repeat bg-cover lg:py-24 bg-case-studies">
        <div className="container px-5 mx-auto xl:px-0">
          <h2
            data-aos="fade-down"
            className="gd-title mb-16 text-center tracking-[-0.02em] lg:leading-[64px] text-3xl md:text-5xl font-semibold"
          >
            Discover Business Grow
            <span className="inline-block lg:block"></span>Faster with Neurolinx
          </h2>
          <div
            data-aos="fade-up"
            className="grid grid-cols-1 sm:grid-cols-2 gap-[30px] mb-[30px]"
          >
            {discoverCardData.map((item, index) => (
              <DiscoverCard
                key={index}
                imageSrc={item.imageSrc}
                title={item.title}
                link={item.link}
              />
            ))}
          </div>
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

      <FooterTop />
      <Footer />
    </div>
  );
}
