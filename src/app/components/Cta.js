import Image from "next/image";

const Cta = () => {
  return (
    <div>
      <div className="py-24 bg-center bg-no-repeat bg-cover bg-cta">
        <div className="container px-5 mx-auto xl:px-0">
          <div className="flex flex-col items-center justify-center">
            <Image
              data-aos="fade-up"
              src="/img/brand-logo.svg"
              alt="brand-logo"
              width={120}
              height={120}
            />
            <h2
              data-aos="fade-up"
              className="gd-title mt-8 text-center tracking-[-0.02em] lg:leading-[64px] text-3xl md:text-5xl font-semibold"
            >
              Discover Neurolinx&#39;s{" "}
              <span className="block">Latest Innovations</span>
            </h2>
            <p
              data-aos="fade-up"
              className="mt-4 mb-8 text-base text-center md:text-xl text-w-100"
            >
              Subscribe to monthly newsletter for updates, blog posts, and
              feature releases!
            </p>
            <form
              data-aos="fade-up"
              className="relative flex items-center justify-center w-full md:w-auto"
            >
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-[14px] bg-transparent border rounded-full outline-none border-b-600 md:w-auto text-b-100 pr-[192px] placeholder-b-100"
                required
              />
              <button
                type="submit"
                className="absolute right-[8px] top-1/2 transform -translate-y-1/2 px-4 py-[8px] font-medium rounded-full bg-gd-secondary text-w-900"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta;
