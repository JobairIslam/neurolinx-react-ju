import React from "react";
import Header from "../components/Header";
import FooterTop from "../components/FooterTop";
import Footer from "../components/Footer";
import DiscoverCard from "../components/DiscoverCard";
import CustomCard from "../components/CustomCard";
export default function page() {
  return (
    <div className="font-normal bg-center bg-no-repeat bg-cover bg-body-gd lg:bg-case-study">
      <Header />
      <div className="pt-[135px] lg:pt-[164px] pb-24">
        <div className="container px-5 mx-auto xl:px-0">
          <h1 className="gd-title tracking-[-0.02em] text-center text-3xl md:text-4xl lg:text-64x leading-tight md:leading-relaxed lg:leading-[84px] font-semibold">
            Case Studies
            <span className="block"></span>by Neurolinx
          </h1>
          <p className="mt-6 text-base text-center md:text-xl text-w-100">
            Explore our customer case studies to delve into the practical
            applications
            <span className="inline-block lg:block"></span>of Neurolinx and its
            transformative impact on various industries.
          </p>
        </div>
      </div>
      <div className="lg:py-24">
        <div className="container px-5 mx-auto xl:px-0">
          <h2 className="gd-title mb-16 text-center tracking-[-0.02em] lg:leading-[64px] text-3xl md:text-5xl font-semibold">
            Discover Business Grow
            <span className="inline-block lg:block"></span>Faster with Neurolinx
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[30px] mb-[30px]">
            <DiscoverCard
              imageSrc="/img/case-studies1.jpg"
              title="KakaoPage Increases Long-Tail Consumption by 70% and Daily Transaction Value by 200%"
              link="/case-studies-single"
            />
            <DiscoverCard
              imageSrc="/img/case-studies2.jpg"
              title="Optimized Travel Experiences through AI-driven Recommendations"
              link="/case-studies-single"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px]">
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

      <FooterTop />
      <Footer />
    </div>
  );
}
