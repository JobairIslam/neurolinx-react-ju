import React from "react";

import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import FooterTop from "../components/FooterTop";
import Footer from "../components/Footer";

export default function page() {
  return (
    <div className="font-normal bg-center bg-no-repeat bg-cover bg-body-gd lg:bg-blog-single">
      <Header />
      <div className="pt-[135px] lg:pt-[164px] pb-24">
        <div className="container px-5 mx-auto xl:px-0">
          <h1 className="text-w-500 tracking-[-0.02em] text-center text-3xl md:text-4xl lg:text-64x leading-tight md:leading-relaxed lg:leading-[84px] font-semibold">
            Simplified AI Applications Streamlining
            <span className="inline-block lg:block"></span>Complexity for
            Enhanced Utility
          </h1>
          <p className="mt-6 text-base text-center text-w-100">
            By <span className="text-w-900">Hannah Wren</span>・December 28,
            2023
          </p>
        </div>
      </div>
      <div className="py-24">
        <div className="container px-5 mx-auto xl:px-0">
          <div className="flex flex-wrap items-start gap-[30px]">
            <div className="lg:pe-[30px] w-full md:max-w-[850px] lg:border-r lg:border-r-border-r">
              <h3 className="text-2xl font-medium text-w-500">
                Unleash Operational Excellence for the AI Era with Neurolinx
              </h3>
              <p className="mt-4 mb-6 text-base text-w-100">
                At Neurolinx, we’re dedicated to revolutionizing the way you
                interact with artificial intelligence. We believe AI should be
                intuitive, seamless, and user-friendly. That’s why we&#39;ve
                developed cutting-edge solutions to bridge the gap between users
                and the AI world.
              </p>
              <Image
                width={850}
                height={424}
                src="/img/blog-single.png"
                alt="blog single"
              />
              <h3 className="mt-12 mb-4 text-2xl font-medium text-w-500">
                What Makes Neurolinx Unique?
              </h3>
              <p className="text-base text-w-100">
                Imagine having a tireless assistant working 24/7 to streamline
                your operations. That’s the power of our Neurolinx AI
                Transformation Suite (NATS). NATS automates repetitive tasks,
                turning manual work into an intelligent, time-saving process.
                Whether you’re in the travel industry, entertainment, or beauty
                commerce, NATS has you covered. Our suite powers platforms like
                Staypia, Maimovie, and Glamai, delivering AI-driven efficiency
                with commercial viability.
              </p>
              <Image
                width={850}
                height={424}
                className="mt-6 mb-12"
                src="/img/blog-single.png"
                alt="blog single"
              />
              <h3 className="text-2xl font-medium text-w-500">
                How does Neurolinx simplify the interaction between users and
                conversational AI?
              </h3>
              <p className="mt-4 mb-6 text-w-100">
                Neurolinx Prompts are to Conversational AI what Icons and a
                Mouse are to Computers. Just as icons and a mouse provide a
                user-friendly interface for interacting with computers,
                Neurolinx Prompts serve as a user- friendly interface for
                conversational AI. Icons and a mouse simplify complex computer
                operations, making them accessible to a wide range of users.
                Similarly, Neurolinx Prompts simplify AI interactions, making it
                easy for users to communicate with AI systems.
              </p>
              <Image
                width={850}
                height={424}
                src="/img/blog-single.png"
                alt="blog single"
              />
              <h3 className="mt-12 mb-4 text-2xl font-medium text-w-500">
                The Evolution of Neurolinx
              </h3>
              <p className="text-base text-w-100">
                We started our journey in 2014, focused on enhancing AI
                assistance for smart speakers. Over time, we’ve evolved into
                industry experts, expanding our expertise across various
                sectors. Today, we harness the power of an AIOps engine,
                enabling AI to understand users even with limited data. This
                marks a significant milestone in our evolution.
              </p>
              <h3 className="mt-12 mb-4 text-2xl font-medium text-w-500">
                Who We Serve
              </h3>
              <p className="text-base text-w-100">
                Since our inception in 2016, we’ve forged strong partnerships
                with leading consumer brands across diverse industries. Our
                collaborations include industry giants like Booking.com, Sephora
                (LVMH Group), Korea’s Circle Chart (for Kpop), Shinsegae DF, and
                Kakao Entertainment. Our track record as an AWS advanced
                technology partner and LVMH Innovation Award finalist positions
                us as the go-to choice for businesses seeking AI-enhanced
                solutions.
              </p>
              <h3 className="mt-12 mb-4 text-2xl font-medium text-w-500">
                Our Vision and Mission
              </h3>
              <p className="text-base text-w-100">
                At Neurolinx, our vision is clear: we’re simplifying
                applications and naturalizing AI interactions. Our mission is to
                make AI effortlessly understand you. We achieve this by
                combining advanced natural language processing with AIOps
                technology, ensuring that AI becomes more user-friendly and
                responsive.
              </p>
            </div>

            <div className="w-full md:max-w-[380px]">
              <div className="relative flex items-center justify-between w-full gap-2 px-4 py-3 border rounded-full border-b-600">
                <input
                  className="w-full text-base bg-transparent focus:outline-none md:text-base text-w-900 placeholder:text-b-100"
                  type="text"
                  placeholder="Search"
                />
                <Link href="#">
                  <svg
                    className="mr-1"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.5425 20.577L13.2618 14.296C12.7618 14.7088 12.1868 15.0319 11.5368 15.2653C10.8868 15.4986 10.2144 15.6153 9.51955 15.6153C7.81038 15.6153 6.36388 15.0235 5.18005 13.84C3.99621 12.6565 3.4043 11.2103 3.4043 9.50152C3.4043 7.79285 3.99605 6.34618 5.17955 5.16152C6.36305 3.97702 7.80921 3.38477 9.51805 3.38477C11.2267 3.38477 12.6734 3.97668 13.858 5.16051C15.0425 6.34435 15.6348 7.79085 15.6348 9.50002C15.6348 10.2142 15.515 10.8963 15.2753 11.5463C15.0355 12.1963 14.7155 12.7616 14.3155 13.2423L20.5963 19.523L19.5425 20.577ZM9.51955 14.1155C10.808 14.1155 11.8994 13.6683 12.7935 12.774C13.6879 11.8798 14.135 10.7885 14.135 9.50002C14.135 8.21152 13.6879 7.12018 12.7935 6.22601C11.8994 5.33168 10.808 4.88452 9.51955 4.88452C8.23105 4.88452 7.13971 5.33168 6.24555 6.22601C5.35121 7.12018 4.90405 8.21152 4.90405 9.50002C4.90405 10.7885 5.35121 11.8798 6.24555 12.774C7.13971 13.6683 8.23105 14.1155 9.51955 14.1155Z"
                      fill="#514D6A"
                    />
                  </svg>
                </Link>
              </div>
              <h3 className="mt-12 mb-6 text-xl font-medium text-w-500">
                Related Articles
              </h3>
              <div className="flex items-center gap-4 mb-4">
                <Image
                  width={80}
                  height={80}
                  src="/img/blog-article1.png"
                  alt="blog article"
                />
                <div>
                  <Link
                    href="blog-single.html"
                    className="text-base text-w-500"
                  >
                    Enhanced Product Discovery through AI Merchandising
                  </Link>
                  <p className="mt-2 text-xs text-w-100">December 19, 2023</p>
                </div>
              </div>
              <div className="flex items-center gap-4 mb-4">
                <Image
                  width={80}
                  height={80}
                  src="/img/blog-article2.png"
                  alt="blog article"
                />
                <div>
                  <Link
                    href="blog-single.html"
                    className="text-base text-w-500"
                  >
                    AI&#39;s Revolutionary Impact Transforming Drama Discovery
                  </Link>
                  <p className="mt-2 text-xs text-w-100">September 28, 2023</p>
                </div>
              </div>
              <div className="flex items-center gap-4 mb-4">
                <Image
                  width={80}
                  height={80}
                  src="/img/blog-article3.png"
                  alt="blog article"
                />
                <div>
                  <Link
                    href="blog-single.html"
                    className="text-base text-w-500"
                  >
                    AI Partners with Megazone Cloud to Enhance GenAI Adoption
                  </Link>
                  <p className="mt-2 text-xs text-w-100">July 27, 2023</p>
                </div>
              </div>
              <h3 className="mt-12 mb-6 text-xl font-medium text-w-500">
                Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                <Link
                  href="#"
                  className="px-4 py-2 text-sm border rounded-full border-b-400 text-w-100 bg-b-600 hover:bg-tropical-indigo hover:text-w-900"
                >
                  AI Automation
                </Link>
                <Link
                  href="#"
                  className="px-4 py-2 text-sm border rounded-full border-b-400 text-w-100 bg-b-600 hover:bg-tropical-indigo hover:text-w-900"
                >
                  Generative AI Use Cases
                </Link>
                <Link
                  href="#"
                  className="px-4 py-2 text-sm border rounded-full border-b-400 text-w-100 bg-b-600 hover:bg-tropical-indigo hover:text-w-900"
                >
                  AI Prompt Engineering
                </Link>
                <Link
                  href="#"
                  className="px-4 py-2 text-sm border rounded-full border-b-400 text-w-100 bg-b-600 hover:bg-tropical-indigo hover:text-w-900"
                >
                  AI Tools For Business
                </Link>
                <Link
                  href="#"
                  className="px-4 py-2 text-sm border rounded-full border-b-400 text-w-100 bg-b-600 hover:bg-tropical-indigo hover:text-w-900"
                >
                  AI Ops
                </Link>
                <Link
                  href="#"
                  className="px-4 py-2 text-sm border rounded-full border-b-400 text-w-100 bg-b-600 hover:bg-tropical-indigo hover:text-w-900"
                >
                  Generative AI Solution
                </Link>
              </div>
              <h3 className="mt-12 mb-6 text-xl font-medium text-w-500">
                Categories
              </h3>
              <div className="flex flex-col items-start justify-start gap-2">
                <Link
                  href="#"
                  className="flex justify-between items-center pb-2 border-b border-b-600 w-full md:max-w-[270px]"
                >
                  <span className="text-base text-w-100">AI Planning</span>
                  <span className="text-base text-w-100">23</span>
                </Link>
                <Link
                  href="#"
                  className="flex justify-between items-center pb-2 border-b border-b-600 w-full md:max-w-[270px]"
                >
                  <span className="text-base text-w-100">Computer Vision</span>
                  <span className="text-base text-w-100">47</span>
                </Link>
                <Link
                  href="#"
                  className="flex justify-between items-center pb-2 border-b border-b-600 w-full md:max-w-[270px]"
                >
                  <span className="text-base text-w-100">
                    Speech Recognition
                  </span>
                  <span className="text-base text-w-100">89</span>
                </Link>
                <Link
                  href="#"
                  className="flex justify-between items-center pb-2 border-b border-b-600 w-full md:max-w-[270px]"
                >
                  <span className="text-base text-w-100">Machine Learning</span>
                  <span className="text-base text-w-100">12</span>
                </Link>
                <Link
                  href="#"
                  className="flex justify-between items-center pb-2 border-b border-b-600 w-full md:max-w-[270px]"
                >
                  <span className="text-base text-w-100">Deep Learning</span>
                  <span className="text-base text-w-100">56</span>
                </Link>
                <Link
                  href="#"
                  className="flex justify-between items-center pb-2 border-b border-b-600 w-full md:max-w-[270px]"
                >
                  <span className="text-base text-w-100">Neural Networks</span>
                  <span className="text-base text-w-100">34</span>
                </Link>
                <Link
                  href="#"
                  className="flex justify-between items-center pb-2 border-b border-b-600 w-full md:max-w-[270px]"
                >
                  <span className="text-base text-w-100">Expert Systems</span>
                  <span className="text-base text-w-100">78</span>
                </Link>
                <Link
                  href="#"
                  className="flex justify-between items-center pb-2 border-b border-b-600 w-full md:max-w-[270px]"
                >
                  <span className="text-base text-w-100">Virtual Agents</span>
                  <span className="text-base text-w-100">91</span>
                </Link>
              </div>
              <h3 className="mt-12 mb-6 text-xl font-medium text-w-500">
                Share on Social
              </h3>
              <div className="flex items-center justify-start gap-4">
                <Link href="https://www.facebook.com/">
                  <Image
                    width={24}
                    height={24}
                    src="/img/icons/facebook.svg"
                    alt="facebook"
                  />
                </Link>
                <Link href="https://x.com/home?lang=en">
                  <Image
                    width={24}
                    height={24}
                    src="/img/icons/x.svg"
                    alt="x"
                  />
                </Link>
                <Link href="https://www.linkedin.com/feed/">
                  <Image
                    width={24}
                    height={24}
                    src="/img/icons/linkedin.svg"
                    alt="linkedin"
                  />
                </Link>
                <Link href="https://mail.google.com/mail/">
                  <Image
                    width={24}
                    height={24}
                    src="/img/icons/email.svg"
                    alt="email"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterTop />
      <Footer />
    </div>
  );
}
