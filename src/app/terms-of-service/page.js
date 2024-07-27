import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function page() {
  return (
    <div className="font-normal bg-center bg-no-repeat bg-cover bg-body-gd lg:bg-term-of-services">
      <Header />
      <div className="pt-[135px] lg:pt-[164px] pb-24">
        <div className="container px-5 mx-auto xl:px-0">
          <h2 className="gd-title text-center tracking-[-0.02em] lg:leading-[84px] text-3xl md:text-64x font-semibold">
            Neurolinx
            <span className="inline-block lg:block">Terms of Service</span>
          </h2>
          <p className="mt-6 text-base text-center md:text-xl text-w-100">
            Latest Update: January 6, 2024
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
