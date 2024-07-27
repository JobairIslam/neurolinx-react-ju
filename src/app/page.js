import Header from "./components/Header";
import Hero from "./components/Hero";
import Image from "next/image";
import VideoSection from "./components/VideoSection";
import Link from "next/link";
import UpdateCard from "./components/UpdateCard";
import FAQSection from "./components/FAQSection";
import FooterTop from "./components/FooterTop";
import Footer from "./components/Footer";
import "./globals.css";
export default function Home() {
  return (
    <div className="font-normal bg-center bg-no-repeat bg-cover bg-body-gd lg:bg-body">
      <Header />
      <Hero />
      {/* revolution section */}
      <div className="lg:py-24">
        <div className="container px-5 mx-auto xl:px-0">
          <div className="flex flex-col items-center justify-center">
            <h2 className="gd-title mb-16 text-center tracking-[-0.02em] lg:leading-[64px] text-3xl md:text-5xl font-semibold">
              Revolutionize Your Business
              <span className="inline-block md:block"></span> with Semantic AI
            </h2>
            <div className="flex flex-col gap-[30px]">
              <div className="flex flex-col lg:flex-row gap-[30px]">
                <div className="p-8 border rounded-lg md:p-12 border-b-600 bg-gd-tertiary">
                  <h3 className="mb-4 md:leading-[42px] text-2xl md:text-32x font-medium text-w-500">
                    AI Prompt Engine
                  </h3>
                  <p className="mb-12 text-base text-w-100">
                    Explore our AI Prompt Engine transforming data interaction
                    with precision and speed for unparalleled productivity.
                  </p>
                  <Image
                    src="/img/revolution-card1.png"
                    alt="revolution-card1.png"
                    width={644} // specify the width as required
                    height={390} // specify the height as required
                  />
                </div>
                <div className="p-8 border rounded-lg md:p-12 border-b-600 bg-gd-tertiary">
                  <h3 className="mb-4 md:leading-[42px] text-2xl md:text-32x font-medium text-w-500">
                    Smart Search
                  </h3>
                  <p className="mb-12 text-base text-w-100">
                    Experience precise search results with our semantic search
                    technology.
                  </p>
                  <Image
                    src="/img/revolution-card2.png"
                    alt="revolution-card2.png"
                    width={424} // specify the width as required
                    height={390} // specify the height as required
                  />
                </div>
              </div>
              <div className="flex flex-col-reverse lg:flex-row-reverse gap-[30px]">
                <div className="p-8 border rounded-lg md:p-12 border-b-600 bg-gd-tertiary">
                  <h3 className="mb-4 md:leading-[42px] text-3xl md:text-32x font-medium text-w-500">
                    AI Prompt Engine
                  </h3>
                  <p className="mb-12 text-base text-w-100">
                    Explore our AI Prompt Engine transforming data interaction
                    with precision and speed for unparalleled productivity.
                  </p>
                  <Image
                    src="/img/revolution-card3.png"
                    alt="revolution-card3.png"
                    width={424} // specify the width as required
                    height={390} // specify the height as required
                  />
                </div>
                <div className="p-8 border rounded-lg md:p-12 border-b-600 bg-gd-tertiary">
                  <h3 className="mb-4 md:leading-[42px] text-3xl md:text-32x font-medium text-w-500">
                    Smart Search
                  </h3>
                  <p className="mb-12 text-base text-w-100">
                    Experience precise search results with our semantic search
                    technology.
                  </p>
                  <Image
                    src="/img/revolution-card4.png"
                    alt="revolution-card4.png"
                    width={644} // specify the width as required
                    height={390} // specify the height as required
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <VideoSection />
      <div className="lg:py-24">
        <div className="container px-5 mx-auto xl:px-0">
          <h2 className="gd-title mb-16 text-center tracking-[-0.02em] lg:leading-[64px] text-3xl md:text-5xl font-semibold">
            Enhance Product Discovery
            <span className="inline-block lg:block"></span> with Linked Prompts
          </h2>
          <div className="flex flex-col">
            <div className="flex flex-col gap-[30px]">
              <div className="flex flex-col-reverse lg:flex-row justify-start lg:justify-between gap-[30px] lg:gap-[126px] p-6 md:p-12 rounded-lg border border-b-600 bg-gd-tertiary">
                <div className="flex flex-col items-start justify-center">
                  <h3 className="mb-4 md:leading-[42px] text-2xl md:text-32x font-medium text-w-500">
                    Masters of Data
                    <span className="inline-block lg:block">
                      & Machine Learning
                    </span>
                  </h3>
                  <p className="mb-6 w-full md:max-w-[534px] text-base text-w-100">
                    Founded in 2016 by experienced data scientists, engineers,
                    and consultants, Neurolinx AI is dedicated to maximizing the
                    business potential of data and AI.
                  </p>
                  <Link href="team" legacyBehavior>
                    <a className="flex flex-row items-center gap-2 px-4 py-2 text-sm font-medium border rounded-full border-tropical-indigo bg-gd-secondary text-w-900">
                      Meet Our Team
                      <Image
                        src="/img/icons/arrow-right.svg"
                        alt="arrow"
                        width={20}
                        height={20}
                      />
                    </a>
                  </Link>
                </div>
                <div className="rounded-lg">
                  <Image
                    className="w-full rounded-lg"
                    src="/img/prompts1.png"
                    alt="prompts-img"
                    width={534}
                    height={464}
                  />
                </div>
              </div>
              <div className="flex flex-col-reverse lg:flex-row-reverse justify-start lg:justify-between gap-[30px] lg:gap-[126px] p-6 md:p-12 rounded-lg border border-b-600 bg-gd-tertiary">
                <div className="flex flex-col items-start justify-center">
                  <h3 className="mb-4 md:leading-[42px] text-2xl md:text-32x font-medium text-w-500">
                    Powered by
                    <span className="inline-block lg:block">
                      Established Technology
                    </span>
                  </h3>
                  <p className="mb-6 w-full md:max-w-[534px] text-base text-w-100">
                    Neurolinx AI possesses an extensive intellectual property
                    portfolio in AI technology, comprising 32 granted patents
                    and 88 patent applications spanning the globe.
                  </p>
                  <Link href="patents" legacyBehavior>
                    <a className="flex flex-row items-center gap-2 px-4 py-2 text-sm font-medium border rounded-full border-tropical-indigo bg-gd-secondary text-w-900">
                      Check Our Patents
                      <Image
                        src="/img/icons/arrow-right.svg"
                        alt="arrow"
                        width={20}
                        height={20}
                      />
                    </a>
                  </Link>
                </div>
                <div className="rounded-lg">
                  <Image
                    className="w-full rounded-lg"
                    src="/img/prompts2.png"
                    alt="prompts-img"
                    width={362}
                    height={176}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-24">
        <div className="container px-5 mx-auto xl:px-0">
          <div className="flex flex-col items-center justify-center">
            <h2 className="gd-title mb-16 text-center tracking-[-0.02em] lg:leading-[64px] text-3xl md:text-5xl font-semibold">
              Updates &amp;
              <span className="block"></span> Media Coverage
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px]">
              <UpdateCard
                imageSrc="/img/blog1.png"
                heading="AI Partners with Megazone Cloud to Enhance GenAI Adoption "
                headingHref="#"
                tag1="Prompt Engineering"
                tag1Href="#"
                tag2="AI Use Cases"
                tag2Href="#"
              />
              <UpdateCard
                imageSrc="/img/blog2.png"
                heading="AI's Revolutionary Impact Transforming Drama Discovery for Fans"
                headingHref="#"
                tag1="Streaming"
                tag1Href="#"
                tag2="AI Search"
                tag2Href="#"
              />
              <UpdateCard
                imageSrc="/img/blog3.png"
                heading="Simplified AI Applications Streamlining Complexity
for Enhanced Utility"
                headingHref="#"
                tag1="AI Automation"
                tag1Href="#"
                tag2="Generative AI Use Cases"
                tag2Href="#"
              />
            </div>
          </div>
        </div>
      </div>
      <FAQSection />
      <FooterTop />
      <Footer />
    </div>
  );
}
