import React from "react";
import Header from "../components/Header";
import FooterTop from "../components/FooterTop";
import Footer from "../components/Footer";
import Image from "next/image";
import EnhancingCard from "../components/EnhancingCard";
import CustomCard from "../components/CustomCard";
import FAQAccordion from "../components/FAQSection";

export default function Page() {
  return (
    <div className="font-normal bg-center bg-no-repeat bg-cover bg-body-gd lg:bg-media">
      <Header />
      <div className="pt-[135px] lg:pt-[164px] pb-24">
        <div className="container px-5 mx-auto xl:px-0">
          <h1 className="gd-title tracking-[-0.02em] text-center text-3xl md:text-4xl lg:text-64x leading-tight md:leading-relaxed lg:leading-[84px] font-semibold">
            Brand Assets
            <span className="inline-block lg:block">and Media Kit</span>
          </h1>
          <p className="mt-6 text-base text-center md:text-xl text-w-100">
            Explore our brand assets, including official logo files, product
            screenshots,<span className="inline-block lg:block"></span>
            and leadership photos, available for use without individual legal
            agreements.
          </p>
        </div>
      </div>
      <div className="lg:py-24">
        <div className="container px-5 mx-auto xl:px-0">
          <h2 className="gd-title mb-16 text-center tracking-[-0.02em] lg:leading-[64px] text-3xl md:text-5xl font-semibold">
            Neurolinx
            <span className="block">Logo Library</span>
          </h2>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px]">
            <div className="flex justify-center items-center rounded-lg border border-b-600 w-full h-[350px] md:h-[390px] bg-gd-tertiary">
              <Image
                src="/img/logo-library1.svg"
                alt="logo library"
                width={106}
                height={96}
              />
            </div>
            <div className="flex justify-center items-center rounded-lg border border-b-600 w-full h-[350px] md:h-[390px] bg-w-900">
              <Image
                src="/img/logo-library2.svg"
                alt="logo library"
                width={106}
                height={96}
              />
            </div>
            <div className="flex justify-center items-center rounded-lg border border-b-600 w-full h-[350px] md:h-[390px] bg-b-900">
              <Image
                src="/img/logo-library3.svg"
                alt="logo library"
                width={106}
                height={96}
              />
            </div>
            <div className="flex justify-center items-center rounded-lg border border-b-600 w-full h-[350px] md:h-[390px] bg-gd-tertiary">
              <Image
                src="/img/logo-library4.svg"
                alt="logo library"
                width={256}
                height={48}
              />
            </div>
            <div className="flex justify-center items-center rounded-lg border border-b-600 w-full h-[350px] md:h-[390px] bg-w-900">
              <Image
                src="/img/logo-library5.svg"
                alt="logo library"
                width={256}
                height={48}
              />
            </div>
            <div className="flex justify-center items-center rounded-lg border border-b-600 w-full h-[350px] md:h-[390px] bg-b-900">
              <Image
                src="/img/logo-library6.svg"
                alt="logo library"
                width={256}
                height={48}
              />
            </div>
          </div>
          <h2 className="gd-title mt-16 mb-12 text-center tracking-[-0.02em] lg:leading-[64px] text-3xl md:text-5xl font-semibold">
            Neurolinx
            <span className="block">Colors</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[30px]">
            <div className="flex justify-center items-center border border-b-600 w-full h-[350px] md:h-[352px] bg-w-900 rounded-lg">
              <p className="font-medium text-32x md:text-64x text-b-900">
                EEEBFF
              </p>
            </div>
            <div className="flex justify-center items-center border border-b-600 w-full h-[350px] md:h-[352px] bg-b-900 rounded-lg">
              <p className="font-medium text-32x md:text-64x text-w-900">
                030012
              </p>
            </div>
            <div className="flex justify-center items-center border border-b-600 w-full h-[350px] md:h-[352px] bg-primary rounded-lg">
              <p className="font-medium text-32x md:text-64x text-w-900">
                7361E5
              </p>
            </div>
            <div className="flex justify-center items-center border border-b-600 w-full h-[350px] md:h-[352px] bg-tropical-indigo rounded-lg">
              <p className="font-medium text-32x md:text-64x text-b-900">
                9A8DEC
              </p>
            </div>
          </div>
          <h2 className="gd-title mt-16 mb-12 text-center tracking-[-0.02em] lg:leading-[64px] text-3xl md:text-5xl font-semibold">
            Neurolinx
            <span className="block">Fonts</span>
          </h2>
          <div className="flex justify-center items-center border border-b-600 rounded-lg w-full h-[350px] md:h-[450px] lg:h-[648px] bg-b-900">
            <p className="font-medium text-w-900 text-40x md:text-8xl">
              Poppins
            </p>
          </div>
        </div>
      </div>
      <FooterTop />
      <Footer />
    </div>
  );
}
