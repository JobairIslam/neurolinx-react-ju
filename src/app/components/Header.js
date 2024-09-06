"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const timeoutRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSubMenu = (menu) => {
    setActiveSubMenu(activeSubMenu === menu ? null : menu);
  };

  const handleMouseEnter = (menu) => {
    clearTimeout(timeoutRef.current);
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 300); // 300ms delay before closing
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <>
      <header className="absolute top-0 left-0 right-0 z-[9999] py-4 border border-w-900 border-opacity-[8%] bg-opacity-5 backdrop-blur-lg bg-w-900">
        <div className="container px-5 mx-auto xl:px-0">
          <div className="hidden justify-between items-center md:flex">
            <Link href="/" className="flex gap-2 justify-start items-center">
              <Image width={27} height={24} src="/img/logo.svg" alt="logo" />
              <span className="text-xl font-medium text-w-900">Neurolinx</span>
            </Link>
            <nav>
              <ul className="flex justify-center items-center md:gap-4 lg:gap-8">
                <li className="relative group">
                  <Link
                    href="/"
                    className="inline-block text-sm font-semibold capitalize transition-all duration-300 text-w-100 hover:text-w-900"
                  >
                    home
                  </Link>
                </li>
                <li className="relative group">
                  <Link
                    href="solution.html"
                    className="inline-block text-sm font-semibold capitalize transition-all duration-300 text-w-100 hover:text-w-900"
                  >
                    solutions
                  </Link>
                </li>
                <li
                  className="relative group"
                  onMouseEnter={() => handleMouseEnter("resources")}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    href="#"
                    className="flex gap-2 items-center text-sm font-semibold capitalize transition-all duration-300 hover:text-w-900 text-w-100"
                  >
                    resources
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className={`transition-transform duration-300 transform down-svg ${
                        activeDropdown === "resources" ? "rotate-180" : ""
                      }`}
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                      />
                    </svg>
                  </Link>

                  <div
                    className={`absolute left-1/2 transform -translate-x-1/2 mt-9 w-[630px] rounded-lg shadow-lg bg-b-700 border border-b-500 ${
                      activeDropdown === "resources" ? "block" : "hidden"
                    }`}
                    onMouseEnter={() => handleMouseEnter("resources")}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="flex w-full h-full">
                      <div className="p-6 w-1/2 border-r border-b-500">
                        <h2 className="text-xl font-medium text-w-500">
                          Resources
                        </h2>
                        <p className="mt-2 text-sm text-w-100">
                          AI-Powered theme personalization resources for tech
                          agencies.
                        </p>
                      </div>

                      <div className="p-6 w-1/2">
                        <Link href="blog.html">
                          <div className="flex gap-2 items-center p-1 mb-1 rounded-lg hover:bg-b-500">
                            <div>
                              <Image
                                width={38}
                                height={38}
                                src="/img/blog-menu.svg"
                                alt=""
                              />
                            </div>
                            <div className="flex flex-col">
                              <h3 className="text-sm font-medium text-w-500">
                                Blog
                              </h3>
                              <span>
                                <p className="text-xs font-normal whitespace-nowrap text-w-100">
                                  Resources for tech agencies.
                                </p>
                              </span>
                            </div>
                          </div>
                        </Link>
                        <Link href="case-studies.html">
                          <div className="flex gap-2 items-center p-1 mb-1 rounded-lg hover:bg-b-500">
                            <div>
                              <Image
                                width={38}
                                height={38}
                                src="/img/case-studies-menu.svg"
                                alt=""
                              />
                            </div>
                            <div className="flex flex-col">
                              <h3 className="text-sm font-medium text-w-500">
                                Case Studies
                              </h3>
                              <span>
                                <p className="text-xs font-normal whitespace-nowrap text-w-100">
                                  Explore detailed case studies.
                                </p>
                              </span>
                            </div>
                          </div>
                        </Link>
                        <Link href="documentation.html">
                          <div className="flex gap-2 items-center p-1 mb-1 rounded-lg hover:bg-b-500">
                            <div>
                              <Image
                                width={38}
                                height={38}
                                src="/img/documentation-menu.svg"
                                alt=""
                              />
                            </div>
                            <div className="flex flex-col">
                              <h3 className="text-sm font-medium text-w-500">
                                Documentation
                              </h3>
                              <span>
                                <p className="text-xs font-normal whitespace-nowrap text-w-100">
                                  Detailed AI implementation guides.
                                </p>
                              </span>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </li>
                <li
                  className="relative group"
                  onMouseEnter={() => handleMouseEnter("company")}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    href="#"
                    className="flex gap-2 items-center text-sm font-semibold capitalize transition-all duration-300 hover:text-w-900 text-w-100"
                  >
                    company
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className={`transition-transform duration-300 transform down-svg ${
                        activeDropdown === "company" ? "rotate-180" : ""
                      }`}
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                      />
                    </svg>
                  </Link>

                  <div
                    className={`absolute left-1/2 transform -translate-x-1/2 mt-9 w-[630px] rounded-lg shadow-lg bg-b-700 border border-b-500 ${
                      activeDropdown === "company" ? "block" : "hidden"
                    }`}
                    onMouseEnter={() => handleMouseEnter("company")}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="flex w-full h-full">
                      <div className="p-6 w-1/2 border-r border-b-500">
                        <h2 className="text-xl font-medium text-w-500">
                          Company
                        </h2>
                        <p className="mt-2 text-sm text-w-100">
                          Learn about our mission, team, <br />
                          and values.
                        </p>
                      </div>

                      <div className="p-6 w-1/2">
                        <Link href="story.html">
                          <div className="flex gap-2 items-center p-1 mb-1 rounded-lg hover:bg-b-500">
                            <div>
                              <Image
                                width={38}
                                height={38}
                                src="/img/our-story-menu.svg"
                                alt=""
                              />
                            </div>
                            <div className="flex flex-col">
                              <h3 className="text-sm font-medium text-w-500">
                                Our Story
                              </h3>
                              <span>
                                <p className="text-xs font-normal whitespace-nowrap text-w-100">
                                  Discover our journey and evolution.
                                </p>
                              </span>
                            </div>
                          </div>
                        </Link>
                        <Link href="team.html">
                          <div className="flex gap-2 items-center p-1 mb-1 rounded-lg hover:bg-b-500">
                            <div>
                              <Image
                                width={38}
                                height={38}
                                src="/img/our-team-menu.svg"
                                alt=""
                              />
                            </div>
                            <div className="flex flex-col">
                              <h3 className="text-sm font-medium text-w-500">
                                Our Team
                              </h3>
                              <span>
                                <p className="text-xs font-normal whitespace-nowrap text-w-100">
                                  Meet our team of tech innovators.
                                </p>
                              </span>
                            </div>
                          </div>
                        </Link>
                        <Link href="service.html">
                          <div className="flex gap-2 items-center p-1 mb-1 rounded-lg hover:bg-b-500">
                            <div>
                              <Image
                                width={38}
                                height={38}
                                src="/img/our-services-menu.svg"
                                alt=""
                              />
                            </div>
                            <div className="flex flex-col">
                              <h3 className="text-sm font-medium text-w-500">
                                Our Services
                              </h3>
                              <span>
                                <p className="text-xs font-normal whitespace-nowrap text-w-100">
                                  Tailored solutions for your needs.
                                </p>
                              </span>
                            </div>
                          </div>
                        </Link>
                        <Link href="patent.html">
                          <div className="flex gap-2 items-center p-1 mb-1 rounded-lg hover:bg-b-500">
                            <div>
                              <Image
                                width={38}
                                height={38}
                                src="/img/our-patent-menu.svg"
                                alt=""
                              />
                            </div>
                            <div className="flex flex-col">
                              <h3 className="text-sm font-medium text-w-500">
                                Our Patents
                              </h3>
                              <span>
                                <p className="text-xs font-normal whitespace-nowrap text-w-100">
                                  Explore our intellectual portfolio.
                                </p>
                              </span>
                            </div>
                          </div>
                        </Link>
                        <Link href="media-kit.html">
                          <div className="flex gap-2 items-center p-1 mb-1 rounded-lg hover:bg-b-500">
                            <div>
                              <Image
                                width={38}
                                height={38}
                                src="/img/media-kit-menu.svg"
                                alt=""
                              />
                            </div>
                            <div className="flex flex-col">
                              <h3 className="text-sm font-medium text-w-500">
                                Media Kit
                              </h3>
                              <span>
                                <p className="text-xs font-normal whitespace-nowrap text-w-100">
                                  Logos and brand guidelines.
                                </p>
                              </span>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </nav>
            <div className="flex gap-2 justify-end items-center">
              <Link
                href="sign-in.html"
                className="inline-block px-4 py-2 text-sm font-medium capitalize bg-transparent rounded-full border border-transparent transition-all duration-300 text-w-900"
              >
                sign in
              </Link>
              <Link
                href="sign-up.html"
                className="inline-block px-4 py-2 text-sm font-medium capitalize rounded-full border transition-all duration-300 btn-border bg-gd-secondary hover:bg-transparent text-w-900"
              >
                sign up
              </Link>
            </div>
          </div>
        </div>
        <div className="overflow-hidden md:hidden">
          <div className="container flex justify-between items-center px-5 mx-auto xl:px-0">
            <Link href="/" className="flex gap-2">
              <Image width={38} height={38} src="/img/logo.svg" alt="logo" />
              <span className="text-xl font-medium text-w-900">Neurolinx</span>
            </Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              onClick={toggleMenu}
              className="inline-block w-6 h-6 cursor-pointer text-w-900"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
              />
            </svg>
          </div>

          <div
            className={`fixed z-[999999] top-0 left-0 flex-col justify-start items-start w-full h-screen p-5 bg-b-600 transition-all duration-300 ${
              isMenuOpen ? "flex" : "hidden"
            }`}
          >
            <nav>
              <ul className="flex flex-col gap-4 justify-start items-start">
                <li>
                  <Link
                    href="/"
                    className="inline-block text-sm font-semibold capitalize transition-all duration-300 text-w-100 hover:text-w-900"
                  >
                    home
                  </Link>
                </li>
                <li>
                  <Link
                    href="solution.html"
                    className="inline-block text-sm font-semibold capitalize transition-all duration-300 text-w-100 hover:text-w-900"
                  >
                    solutions
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="flex gap-1 items-center text-sm font-semibold capitalize transition-all duration-300 text-w-100 hover:text-w-900"
                    onClick={() => toggleSubMenu("resources")}
                  >
                    resources
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className={`transition-transform duration-300 transform ${
                        activeSubMenu === "resources" ? "rotate-180" : ""
                      }`}
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                      />
                    </svg>
                  </Link>

                  <ul
                    className={`flex-col gap-2 mt-2 ${
                      activeSubMenu === "resources" ? "flex" : "hidden"
                    }`}
                  >
                    <Link href="blog.html">
                      <div className="flex gap-2 items-center p-1 mb-1 rounded-lg hover:bg-b-500">
                        <div>
                          <Image
                            width={38}
                            height={38}
                            src="/img/blog-menu.svg"
                            alt=""
                          />
                        </div>
                        <div className="flex flex-col">
                          <h3 className="text-sm font-medium text-w-500">
                            Blog
                          </h3>
                          <span>
                            <p className="text-xs font-normal whitespace-nowrap text-w-100">
                              Resources for tech agencies.
                            </p>
                          </span>
                        </div>
                      </div>
                    </Link>
                    <Link href="case-studies.html">
                      <div className="flex gap-2 items-center p-1 mb-1 rounded-lg hover:bg-b-500">
                        <div>
                          <Image
                            width={38}
                            height={38}
                            src="/img/case-studies-menu.svg"
                            alt=""
                          />
                        </div>
                        <div className="flex flex-col">
                          <h3 className="text-sm font-medium text-w-500">
                            Case Studies
                          </h3>
                          <span>
                            <p className="text-xs font-normal whitespace-nowrap text-w-100">
                              Explore detailed case studies.
                            </p>
                          </span>
                        </div>
                      </div>
                    </Link>
                    <Link href="documentation.html">
                      <div className="flex gap-2 items-center p-1 mb-1 rounded-lg hover:bg-b-500">
                        <div>
                          <Image
                            width={38}
                            height={38}
                            src="/img/documentation-menu.svg"
                            alt=""
                          />
                        </div>
                        <div className="flex flex-col">
                          <h3 className="text-sm font-medium text-w-500">
                            Documentation
                          </h3>
                          <span>
                            <p className="text-xs font-normal whitespace-nowrap text-w-100">
                              Detailed AI implementation guides.
                            </p>
                          </span>
                        </div>
                      </div>
                    </Link>
                  </ul>
                </li>
                <li>
                  <Link
                    href="#"
                    className="flex gap-1 items-center text-sm font-semibold capitalize transition-all duration-300 text-w-100 hover:text-w-900"
                    onClick={() => toggleSubMenu("company")}
                  >
                    company
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className={`transition-transform duration-300 transform ${
                        activeSubMenu === "company" ? "rotate-180" : ""
                      }`}
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                      />
                    </svg>
                  </Link>
                  <ul
                    className={`flex-col gap-2 mt-2 ${
                      activeSubMenu === "company" ? "flex" : "hidden"
                    }`}
                  >
                    <Link href="story.html">
                      <div className="flex gap-2 items-center p-1 mb-1 rounded-lg hover:bg-b-500">
                        <div>
                          <Image
                            width={38}
                            height={38}
                            src="/img/our-story-menu.svg"
                            alt=""
                          />
                        </div>
                        <div className="flex flex-col">
                          <h3 className="text-sm font-medium text-w-500">
                            Our Story
                          </h3>
                          <span>
                            <p className="text-xs font-normal whitespace-nowrap text-w-100">
                              Discover our journey and evolution.
                            </p>
                          </span>
                        </div>
                      </div>
                    </Link>
                    <Link href="team.html">
                      <div className="flex gap-2 items-center p-1 mb-1 rounded-lg hover:bg-b-500">
                        <div>
                          <Image
                            width={38}
                            height={38}
                            src="/img/our-team-menu.svg"
                            alt=""
                          />
                        </div>
                        <div className="flex flex-col">
                          <h3 className="text-sm font-medium text-w-500">
                            Our Team
                          </h3>
                          <span>
                            <p className="text-xs font-normal whitespace-nowrap text-w-100">
                              Meet our team of tech innovators.
                            </p>
                          </span>
                        </div>
                      </div>
                    </Link>
                    <Link href="service.html">
                      <div className="flex gap-2 items-center p-1 mb-1 rounded-lg hover:bg-b-500">
                        <div>
                          <Image
                            width={38}
                            height={38}
                            src="/img/our-services-menu.svg"
                            alt=""
                          />
                        </div>
                        <div className="flex flex-col">
                          <h3 className="text-sm font-medium text-w-500">
                            Our Services
                          </h3>
                          <span>
                            <p className="text-xs font-normal whitespace-nowrap text-w-100">
                              Tailored solutions for your needs.
                            </p>
                          </span>
                        </div>
                      </div>
                    </Link>
                    <Link href="patent.html">
                      <div className="flex gap-2 items-center p-1 mb-1 rounded-lg hover:bg-b-500">
                        <div>
                          <Image
                            width={38}
                            height={38}
                            src="/img/our-patent-menu.svg"
                            alt=""
                          />
                        </div>
                        <div className="flex flex-col">
                          <h3 className="text-sm font-medium text-w-500">
                            Our Patents
                          </h3>
                          <span>
                            <p className="text-xs font-normal whitespace-nowrap text-w-100">
                              Explore our intellectual portfolio.
                            </p>
                          </span>
                        </div>
                      </div>
                    </Link>
                    <Link href="media-kit.html">
                      <div className="flex gap-2 items-center p-1 mb-1 rounded-lg hover:bg-b-500">
                        <div>
                          <Image
                            width={38}
                            height={38}
                            src="/img/media-kit-menu.svg"
                            alt=""
                          />
                        </div>
                        <div className="flex flex-col">
                          <h3 className="text-sm font-medium text-w-500">
                            Media Kit
                          </h3>
                          <span>
                            <p className="text-xs font-normal whitespace-nowrap text-w-100">
                              Logos and brand guidelines.
                            </p>
                          </span>
                        </div>
                      </div>
                    </Link>
                  </ul>
                </li>
              </ul>
            </nav>
            <div className="flex gap-2 items-center mt-8">
              <Link
                href="sign-in.html"
                className="inline-block px-4 py-2 rounded-full border border-w-500 hover:border-tropical-indigo border-opacity-[8%] capitalize text-sm font-medium bg-transparent hover:bg-gd-secondary text-w-900 transition-all duration-300"
              >
                sign in
              </Link>
              <Link
                href="sign-up.html"
                className="inline-block px-4 py-2 rounded-full border border-tropical-indigo hover:border-transparent border-opacity-[8%] capitalize text-sm font-medium bg-gd-secondary hover:bg-transparent text-w-900 transition-all duration-300"
              >
                sign up
              </Link>
            </div>
            <svg
              onClick={toggleMenu}
              className="absolute top-5 right-5 cursor-pointer text-w-100"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z" />
            </svg>
          </div>
        </div>
      </header>
    </>
  );
}
