import React from "react";
import Header from "../components/Header";
import Image from "next/image";
import Footer from "../components/Footer";
import EnhancingCard from "../components/EnhancingCard";
import CustomCard from "../components/CustomCard";
import FAQAccordion from "../components/FAQSection";
export default function page() {
  return (
    <div class="font-normal bg-center bg-no-repeat bg-cover bg-body-gd lg:bg-doc">
      <Header />
      <div className="pt-[135px] lg:pt-[164px] pb-24">
        <div className="container px-5 mx-auto xl:px-0">
          <h1 className="gd-title tracking-[-0.02em] text-center text-3xl md:text-4xl lg:text-64x leading-tight md:leading-relaxed lg:leading-[84px] font-semibold">
            Neurolinx
            <span className="block"></span>Documentation
          </h1>
          <p className="mt-6 text-base text-center md:text-xl text-w-100">
            Welcome to the documentation for Neurolinx! Our mission is to
            empower
            <span className="inline-block lg:block"></span>users to make smarter
            decisions with AI-curated data.
          </p>
        </div>
      </div>
      <div class="container px-5 mx-auto lg:py-24 xl:px-0">
        <div class="flex flex-col md:flex-row gap-[30px]">
          <div class="w-full md:max-w-[380px]">
            <h4 class="mb-6 text-xl font-medium text-w-500">Overview</h4>
            <a href="#" class="block mb-4 text-base text-w-100">
              Introduction
            </a>
            <a href="#" class="block text-base gd-title">
              How it Works
            </a>
            <div class="my-6 w-full h-[1px] bg-b-600"></div>
            <h4 class="mb-6 text-xl font-medium text-w-500">Getting Started</h4>
            <a href="#" class="block text-base text-w-100">
              How to Integrate
            </a>
            <div class="my-6 w-full h-[1px] bg-b-600"></div>
            <h4 class="mb-6 text-xl font-medium text-w-500">API Reference</h4>
            <a href="#" class="block mb-4 text-base text-w-100">
              Introduction
            </a>
            <a href="#" class="block mb-4 text-base text-w-100">
              Common
            </a>
            <a href="#" class="block mb-4 text-base text-w-100">
              Movie
            </a>
            <a href="#" class="block mb-4 text-base text-w-100">
              TV Show
            </a>
            <div class="my-6 w-full h-[1px] bg-b-600"></div>
            <h4 class="mb-6 text-xl font-medium text-w-500">Admin Guide</h4>
            <a href="#" class="block mb-4 text-base text-w-100">
              Introduction
            </a>
            <a href="#" class="block mb-4 text-base text-w-100">
              Dashboard
            </a>
            <a href="#" class="block mb-4 text-base text-w-100">
              Neurolinx Configurator
            </a>
            <a href="#" class="block mb-4 text-base text-w-100">
              Neurolinx Simulator
            </a>
            <a href="#" class="blocktext-base text-w-100">
              Items
            </a>
            <div class="my-6 w-full h-[1px] bg-b-600"></div>
            <h4 class="mb-6 text-xl font-medium text-w-500">Support</h4>
            <a href="#" class="block mb-4 text-base text-w-100">
              Frequently Asked Questions
            </a>
          </div>
          <div class="ps-[30px] border-s border-b-600 w-full md:max-w-[850px]">
            <h3 class="pb-4 text-2xl font-medium text-w-500">How it Works</h3>
            <p class="pb-12 text-base text-w-100">
              At Neurolinx, we leverage advanced artificial intelligence and
              machine learning algorithms to deliver personalized
              recommendations and search results across various industries. Our
              technology works by analyzing vast amounts of data, including user
              interactions, reviews, and product descriptions.
            </p>
            <h3 class="pb-4 text-2xl font-medium text-w-500">Source Data</h3>
            <p class="text-base text-w-100">
              We source our data from trusted suppliers and categorize it into
              three main categories:
            </p>
            <div class="pl-5 mb-6">
              <ul class="list-decimal">
                <li class="text-base text-w-100">
                  Social Data: This encompasses online reviews, blogs, Twitter,
                  and other social media platforms.
                </li>
                <li class="text-base text-w-100">
                  Internal Data: This category includes first-party data like
                  engagement metrics, additional text data, and other user
                  interaction data.
                </li>
                <li class="text-base text-w-100">
                  Second-Party and Third-Party Data: This consists of images,
                  detailed item attributes, distribution channels, price
                  information, and more.
                </li>
              </ul>
            </div>
            <p class="text-base text-w-100">
              Our data is categorized into three main types:
            </p>
            <div class="pl-5 mb-6">
              <ul class="list-decimal">
                <li class="text-base text-w-100">
                  Item Metadata: This category includes unique ID values for
                  each item, item names, review data, and other relevant
                  information.
                </li>
                <li class="text-base text-w-100">
                  User Events/Interactions: This category encompasses user
                  engagement data, such as likes, clicks, and view metrics.
                </li>
                <li class="text-base text-w-100">
                  Second-Party and Third-Party Data: This consists of images,
                  detailed item attributes, distribution channels, price
                  information, and more.
                </li>
              </ul>
            </div>
            <p class="pb-12 text-base text-w-100">
              We prioritize data privacy and security. Your information is kept
              private and secure, accessible only to authorized personnel within
              our company. Your data will not be used for any other purpose
              without your prior consent.
            </p>
            <h3 class="pb-4 text-2xl font-medium text-w-500">
              Engineering Process
            </h3>
            <p class="pb-12 text-base text-w-100">
              The essence of our engineering process lies in keeping things
              simple for you. Neurolinx&apos;s prompt engineering process
              utilizes advanced automation to reduce the time and resources
              needed to build a powerful and effective recommendation engine
              tailored to your business needs.
            </p>
            <h3 class="pb-4 text-2xl font-medium text-w-500">
              The Simple Steps Needed
            </h3>
            <p class="pb-6 text-base text-w-100">
              We have pre-collected data from three industries: Beauty &
              Cosmetics, Movies & TV, and Travel. If your business is included
              in any of these three categories, the process should take
              approximately one month. If your business falls outside of these
              industries, the entire process should take around three months to
              complete.
            </p>
            <ul class="pl-5 mb-12 list-decimal">
              <li class="pb-6 text-base text-w-100">
                Transmit Your Item Library:
                <span class="inline-block md:block"></span>
                Share information about your business goals and item library
                data with us. You can transmit the data through your preferred
                channel (we&apos;re flexible). Past methods of communication
                used by our clients include cloud storage software, messenger
                services, and email.
              </li>
              <li class="pb-6 text-base text-w-100">
                Data Preprocessing: <span class="inline-block md:block"></span>
                We will begin by mapping your item data with user language data.
                If your site includes real user reviews of items, please provide
                us with your review data to enhance the relevance of your Data
                Science and Customer Management (DSCM) system. Rest assured, the
                review data you share will only be used to improve the relevancy
                of your DSCM system and will not be shared with any other
                parties or used for other projects.
              </li>
              <li class="pb-6 text-base text-w-100">
                Model Training: <span class="inline-block md:block"></span>
                We will initiate the basic training and customization of the
                Neurolinx ML model. During this stage, we will conduct A/B tests
                of various algorithms and filtering techniques to identify the
                most suitable ones for your business objectives. Once we have
                determined the optimal methods, we will calculate and refine the
                semantics to be used as new search and recommendation signals.
                The duration of this step will vary depending on factors such as
                the size of your item library and your desired business goals.
              </li>
              <li class="pb-6 text-base text-w-100">
                Transfer Results: <span class="inline-block md:block"></span>
                Once the Neurolinx model is deployed, we will transmit the
                results using an API.
              </li>
              <li class="pb-6 text-base text-w-100">
                Check Results: <span class="inline-block md:block"></span>
                If you encounter any counterintuitive or seemingly implausible
                results while reviewing your received data, don&apos;t worry.
                This can happen because AI understands everything through
                numbers and scores, while humans achieve understanding on a more
                collective basis. To address this, you can access our Solution
                Admin page to make any necessary adjustments to the AI-generated
                results. Click here to learn more about the functions and uses
                of our Solution Admin.
              </li>
            </ul>
            <div class="w-full h-[1px] mb-5 border border-b-600"></div>
            <div class="flex flex-row items-center justify-between">
              <a
                class="flex items-center gap-2 px-4 py-2 text-sm font-medium border rounded-full border-tropical-indigo text-w-900 hover:bg-tropical-indigo"
                href="#"
              >
                <Image
                  width={20}
                  height={20}
                  src="/img/icons/arrow-back.svg"
                  alt="arrow"
                />
                Introduction
              </a>
              <a
                class="flex items-center gap-2 px-4 py-2 text-sm font-medium border rounded-full x border-tropical-indigo text-w-900 hover:bg-tropical-indigo"
                href="#"
              >
                How to Integrate
                <Image
                  width={20}
                  height={20}
                  src="/img/icons/arrow-right.svg"
                  alt="arrow"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
