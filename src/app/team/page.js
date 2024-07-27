"use client";
import { useEffect, useState } from "react";
import TeamCard from "../components/TeamCard";
import Header from "../components/Header";
import FooterTop from "../components/FooterTop";
import Footer from "../components/Footer";

const Page = () => {
  return (
    <div className="font-normal bg-center bg-no-repeat bg-cover bg-body-gd lg:bg-team">
      <Header />
      <div className="pt-[135px] lg:pt-[164px] pb-24">
        <div className="container px-5 mx-auto xl:px-0">
          <h1 className="gd-title tracking-[-0.02em] text-center text-3xl md:text-4xl lg:text-64x leading-tight md:leading-relaxed lg:leading-[84px] font-semibold">
            Meet Our Exceptional
            <span className="inline-block lg:block"></span>Team of Data Experts
          </h1>
          <p className="mt-6 text-base text-center md:text-xl text-w-100">
            Harnessing data science for public preference curation facilitating
            discovery<span className="inline-block lg:block"></span>and
            communication for similar tastes.
          </p>
        </div>
      </div>
      <div className="lg:py-24">
        <div className="container px-5 mx-auto xl:px-0">
          <h2 className="gd-title mb-16 text-center tracking-[-0.02em] lg:leading-[64px] text-3xl md:text-5xl font-semibold">
            Our Proficient
            <span className="inline-block lg:block"></span>Business Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[30px]">
            <TeamCard
              name="Wade Warren"
              title="Founder & CEO"
              profileImage="/img/team1.jpg"
              linkedinUrl="https://www.linkedin.com/feed/"
              twitterUrl="https://x.com/home?lang=en"
              skills={[
                "Digital Strategist",
                "Chief Digital Officer",
                "Corporate Restructuring",
              ]}
            />
            <TeamCard
              name="Theresa Webb"
              title="Data-SCM"
              profileImage="/img/team2.jpg"
              linkedinUrl="https://www.linkedin.com/feed/"
              twitterUrl="https://x.com/home?lang=en"
              skills={[
                "Head of Big Data Center",
                "Strategy Head",
                "External Specialist",
              ]}
            />
            <TeamCard
              name="Jane Cooper"
              title="IPR Management"
              profileImage="/img/team3.jpg"
              linkedinUrl="https://www.linkedin.com/feed/"
              twitterUrl="https://x.com/home?lang=en"
              skills={[
                "Patent Attorney",
                "Search Engine Specialist",
                "Caltech Graduate",
              ]}
            />
            <TeamCard
              name="Guy Hawkins"
              title="Product Management"
              profileImage="/img/team4.jpg"
              linkedinUrl="https://www.linkedin.com/feed/"
              twitterUrl="https://x.com/home?lang=en"
              skills={["Sales Director", "Brand Manager", "Product Manager"]}
            />
            <TeamCard
              name="Ralph Edwards"
              title="PR/MKT Lead"
              profileImage="/img/team5.jpg"
              linkedinUrl="https://www.linkedin.com/feed/"
              twitterUrl="https://x.com/home?lang=en"
              skills={[
                "PR Specialist, Apple",
                "PR Consultant, eBay",
                "PR Consultant, IBM",
              ]}
            />
            <TeamCard
              name="Jenny Wilson"
              title="Finance Lead"
              profileImage="/img/team6.jpg"
              linkedinUrl="https://www.linkedin.com/feed/"
              twitterUrl="https://x.com/home?lang=en"
              skills={[
                "CFO, MasterCard",
                "Lead, Bank of America",
                "Analyst, S&P 500 ",
              ]}
            />
          </div>
        </div>
      </div>
      <FooterTop />
      <Footer />
    </div>
  );
};

export default Page;
