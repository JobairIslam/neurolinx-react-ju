import React from "react";
import Image from "next/image";
import Form from "../components/Form";
import Header from "../components/Header";
import FooterTop from "../components/FooterTop";
import Footer from "../components/Footer";
import Link from "next/link";
export default function page() {
  return (
    <div className="font-normal bg-center bg-no-repeat bg-cover bg-body-gd lg:bg-contact">
      <Header />
      <div className="pt-[135px] lg:pt-[164px] pb-24 bg-center bg-no-repeat bg-cover bg-primary-hero">
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
      <Form />

      <FooterTop />
      <Footer />
    </div>
  );
}
