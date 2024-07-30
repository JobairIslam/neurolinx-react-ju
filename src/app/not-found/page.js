import React from "react";
import Image from "next/image";

export default function page() {
  return (
    <div className="font-normal bg-center bg-no-repeat bg-cover bg-not-found bg-b-900 lg:bg-sign">
      <div className="container flex flex-col items-center justify-center h-screen px-5 mx-auto xl:px-0 ">
        <h1 className="text-center leading-tight md:leading-[42px] lg:leading-[84px] text-3xl md:text-32x lg:text-64x font-medium gd-title">
          404 <span className="block"></span> Page Not Found
        </h1>
        <p className="mt-6 mb-8 text-base text-center md:text-xl text-w-100">
          The page you are trying to access does not exist. Please check the
          address <span className="inline-block lg:block"></span> you entered or
          try navigating to a different page.
        </p>
        <a
          href="/"
          className="flex justify-center items-center gap-2 px-6 py-[14px] rounded-full text-base font-medium text-w-900 bg-gd-secondary"
        >
          Go to Homepage{" "}
          <Image
            width={24}
            height={24}
            src="/img/icons/arrow-right.svg"
            alt="arrow"
          />
        </a>
      </div>
    </div>
  );
}
