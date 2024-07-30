// components/Hero.js
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="py-24 md:pt-[164px] bg-hero bg-cover bg-no-repeat bg-center">
      <div className="container px-5 mx-auto xl:px-0">
        <div className="flex flex-col items-center justify-center ">
          <span className="inline-block px-4 py-2 text-sm font-medium transition-colors duration-300 ease-in-out border rounded-full border-b-400 bg-b-600 text-tropical-indigo hover:bg-tropical-indigo hover:text-w-800">
            Neurolinx Deep Dive AI Search
          </span>
          <h1 className="gd-title mt-4 mb-6 tracking-[-0.02em] text-center text-3xl md:text-5xl lg:text-8xl lg:leading-[112px] font-semibold">
            Delve Deep to Discover
            <span className="inline-block lg:block">Your True Desires</span>
          </h1>
          <p className="mb-8 text-base text-center md:text-xl text-w-100">
            Introducing a Revolutionary Recommendation AI Harnessing Collective
            Insights <span className="inline-block lg:block"></span> to Power
            Industry-specific Decision Support Systems
          </p>
          <Link href="sign-in.html" legacyBehavior>
            <a className="flex justify-center items-center gap-2 mb-8 lg:mb-16 px-6 py-3.5 rounded-full border border-black text-base font-medium bg-gd-secondary bg-blue-500 text-w-900 ">
              Get Started Now
              <Image
                src="/img/icons/arrow-right.svg"
                alt="arrow"
                width={24}
                height={24}
              />
            </a>
          </Link>
          <Image
            src="/img/hero-dash.png"
            alt="dash-board"
            width={1070}
            height={642}
          />
          <span className="inline-block mt-8 mb-8 text-sm font-medium lg:mt-16 text-w-100">
            Endorsed by Premier Brands Globally
          </span>
          <div className="hero-brand overflow-hidden whitespace-nowrap relative w-full lg:max-w-[1000px]">
            <div className="inline-flex logo_items animate-slides">
              <Image
                src="/img/brand/1.svg"
                alt="brand"
                className="mx-4"
                width={190}
                height={32}
              />
              <Image
                src="/img/brand/2.svg"
                alt="brand"
                className="mx-4"
                width={190}
                height={32}
              />
              <Image
                src="/img/brand/3.svg"
                alt="brand"
                className="mx-4"
                width={190}
                height={32}
              />
              <Image
                src="/img/brand/4.svg"
                alt="brand"
                className="mx-4"
                width={190}
                height={32}
              />
              <Image
                src="/img/brand/5.svg"
                alt="brand"
                className="mx-4"
                width={190}
                height={32}
              />
            </div>
            <div className="inline-flex lg:ml-20 logo_items animate-slides">
              <Image
                src="/img/brand/1.svg"
                alt="brand"
                className="mx-4"
                width={190}
                height={32}
              />
              <Image
                src="/img/brand/2.svg"
                alt="brand"
                className="mx-4"
                width={190}
                height={32}
              />
              <Image
                src="/img/brand/3.svg"
                alt="brand"
                className="mx-4"
                width={190}
                height={32}
              />
              <Image
                src="/img/brand/4.svg"
                alt="brand"
                className="mx-4"
                width={190}
                height={32}
              />
              <Image
                src="/img/brand/5.svg"
                alt="brand"
                className="mx-4"
                width={190}
                height={32}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
