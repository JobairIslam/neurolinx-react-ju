import React from "react";
import Image from "next/image";

import Header from "../components/Header";
import FooterTop from "../components/FooterTop";
import Footer from "../components/Footer";

import Link from "next/link";
export default function page() {
  return (
    <div className="font-normal bg-center bg-no-repeat bg-cover bg-body-gd lg:bg-contact">
      <Header />
      <div className="pt-[135px] lg:pt-[164px] pb-24">
        <div className="container px-5 mx-auto xl:px-0">
          <h2 className="gd-title text-center tracking-[-0.02em] lg:leading-[84px] text-3xl md:text-64x font-semibold">
            Get in Touch with
            <span className="inline-block lg:block">Our Sales Team</span>
          </h2>
          <p className="mt-6 text-base text-center md:text-xl text-w-100">
            Boost productivity and security for every team in your company
            <span className="inline-block md:block"></span>
            with our platform and upgraded support.
          </p>
        </div>
      </div>
      <div className="lg:py-24">
        <div className="container px-5 mx-auto xl:px-0">
          <div className="flex flex-col md:flex-row justify-start md:justify-center items-start md:items-center gap-[30px]">
            <div className="px-6 md:px-12">
              <h2 className="gd-title text-left lg:leading-[42px] text-32x font-medium">
                Find Your Perfect Fit <span className="block"></span> with
                Neurolinx
              </h2>
              <p className="mt-4 mb-12 text-base text-w-100">
                We&#39;re here to answer any questions you may have.
              </p>
              <ul className="flex flex-col gap-4 text-base font-medium text-w-900">
                <li className="flex items-start justify-start gap-2">
                  <Image
                    src="/img/icons/colored-check.svg"
                    alt="icon"
                    width={24}
                    height={24}
                  />
                  Context-rich prompts tailored to your unique data sources.
                </li>
                <li className="flex items-start justify-start gap-2">
                  <Image
                    src="/img/icons/colored-check.svg"
                    alt="icon"
                    width={24}
                    height={24}
                  />
                  Boost efficiency with upgraded security and support.
                </li>
                <li className="flex items-start justify-start gap-2">
                  <Image
                    src="/img/icons/colored-check.svg"
                    alt="icon"
                    width={24}
                    height={24}
                  />
                  Find the perfect fit for every team with Neurolinx.
                </li>
              </ul>
              <span className="inline-block mt-12 mb-6 text-base text-w-100">
                Trusted by Growing Teams
              </span>
              <Image
                src="/img/brand/group.png"
                alt="Trusted by Growing Teams"
                width={472}
                height={16}
              />
            </div>
            <div className="p-6 md:p-12 w-full md:max-w-[630px] rounded-lg bg-gd-tertiary border border-b-600">
              <h3 className="mb-6 text-2xl font-medium text-w-500">
                Share About Yourself and Expect
                <span className="inline-block md:block"></span> a Prompt
                Response
              </h3>
              <form className="flex flex-col gap-3">
                <div className="flex flex-col gap-3 sm:flex-row">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="px-6 py-[14px] w-full outline-none rounded-full border border-b-500 capitalize text-base bg-transparent text-w-900"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="px-6 py-[14px] w-full outline-none rounded-full border border-b-500 capitalize text-base bg-transparent text-w-900"
                    required
                  />
                </div>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="px-6 py-[14px] w-full outline-none rounded-full border border-b-500 capitalize text-base bg-transparent text-w-900"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="px-6 py-[14px] w-full outline-none rounded-full border border-b-500 capitalize text-base bg-transparent text-w-900"
                    required
                  />
                </div>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <input
                    type="text"
                    placeholder="Company Name"
                    className="px-6 py-[14px] w-full outline-none rounded-full border border-b-500 capitalize text-base bg-transparent text-w-900"
                    required
                  />
                  <div className="px-6 py-[14px] w-full rounded-full border border-b-500 bg-transparent">
                    <select
                      name="Company Size"
                      id="company-size"
                      className="w-full text-base capitalize bg-transparent outline-none text-w-100"
                      required
                    >
                      <option value="company size">Company Size</option>
                      <option value="10">10</option>
                      <option value="20">20</option>
                      <option value="30">30</option>
                      <option value="40">40</option>
                      <option value="50">50</option>
                    </select>
                  </div>
                </div>
                <textarea
                  name="message"
                  id="message"
                  className="px-6 py-[14px] w-full h-[120px] md:h-[240px] outline-none rounded-3xl border border-b-500 capitalize text-base bg-transparent text-w-900"
                  placeholder="Enter your message here"
                  required
                ></textarea>
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    name="check"
                    id="check"
                    className="text-base text-w-100"
                    required
                  />
                  <p className="text-base text-w-100">
                    I agree to Neurolinx&#39;s
                    <Link href="/privacy-policy" legacyBehavior>
                      <a className="gd-title hover:underline transi">
                        Privacy Policy
                      </a>
                    </Link>
                    and
                    <Link href="/terms-of-service" legacyBehavior>
                      <a className="gd-title hover:underline transi">
                        Terms of Service
                      </a>
                    </Link>
                    .
                  </p>
                </div>
                <button
                  type="submit"
                  className="flex justify-center items-center gap-2 mt-6 py-[14px] rounded-full capitalize bg-gd-secondary text-w-900"
                >
                  contact sales
                  <Image
                    src="/img/icons/arrow-right.svg"
                    alt="arrow"
                    width={24}
                    height={24}
                  />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <FooterTop />
      <Footer />
    </div>
  );
}
