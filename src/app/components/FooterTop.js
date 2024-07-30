// components/FooterTop.js
import Image from "next/image";

const FooterTop = () => {
  return (
    <div>
      <div className="py-24 bg-center bg-no-repeat bg-cover bg-cta">
        <div className="container px-5 mx-auto xl:px-0">
          <div className="flex flex-col items-center justify-center">
            <Image
              src="/img/brand-logo.svg"
              alt="brand-logo"
              width={120}
              height={120}
            />
            <h2 className="gd-title mt-8 text-center tracking-[-0.02em] lg:leading-[64px] text-3xl md:text-5xl font-semibold">
              Elevate Your Exploration <span className="block"></span> with AI
              Deep Search
            </h2>
            <p className="mt-4 mb-8 text-base text-center md:text-xl text-w-100">
              Enhance Your Discoveries Unleash the Power of AI Neurolinx Deep
              Search
            </p>
            <a
              href="/sign-in"
              className="flex justify-center items-center gap-2 px-6 py-[14px] rounded-full border border-tropical-indigo capitalize text-base font-medium bg-gd-secondary text-w-900"
            >
              Get Started Now
              <Image
                src="/img/icons/arrow-right.svg"
                alt="arrow"
                width={24}
                height={24}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
