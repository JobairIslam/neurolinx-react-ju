"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <header className="absolute top-0 left-0 right-0 z-[9999] py-4 border border-w-900 border-opacity-[8%] bg-opacity-5 backdrop-blur-lg bg-w-900">
        <div className="container px-5 mx-auto xl:px-0">
          <div className="items-center justify-between hidden md:flex">
            <Link href="/" className="flex items-center justify-start gap-2">
              <Image width={27} height={24} src="/img/logo.svg" alt="logo" />
              <span className="text-xl font-medium text-w-900">Neurolinx</span>
            </Link>
            <nav>
              <ul className="flex items-center justify-center md:gap-4 lg:gap-8">
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
                    className="flex items-center gap-1 text-sm font-semibold capitalize transition-all duration-300 text-w-100 hover:text-w-900"
                  >
                    resources
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="flex items-center gap-1 text-sm font-semibold capitalize transition-all duration-300 text-w-100 hover:text-w-900"
                  >
                    company
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="flex items-center justify-end gap-2">
              <Link
                href="sign-in.html"
                className="inline-block px-4 py-2 text-sm font-medium capitalize transition-all duration-300 bg-transparent border border-transparent rounded-full text-w-900"
              >
                sign in
              </Link>
              <Link
                href="sign-up.html"
                className="inline-block px-4 py-2 text-sm font-medium capitalize transition-all duration-300 border rounded-full btn-border bg-gd-secondary hover:bg-transparent text-w-900"
              >
                sign up
              </Link>
            </div>
          </div>
        </div>
        <div className="md:hidden">
          <div className="container flex items-center justify-between px-5 mx-auto xl:px-0">
            <Link href="/" className="flex gap-2">
              <Image width={27} height={24} src="/img/logo.svg" alt="logo" />
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
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
              />
            </svg>
          </div>
          <div
            id="mobile-menu"
            className={`fixed z-[999999] top-0 left-0 flex-col justify-start items-start w-full h-screen p-5 bg-b-600 transition-all duration-300 ${
              isMenuOpen ? "flex" : "hidden"
            }`}
          >
            <nav>
              <ul className="flex flex-col items-start justify-start gap-4">
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
                    className="flex items-center gap-1 text-sm font-semibold capitalize transition-all duration-300 text-w-100 hover:text-w-900"
                  >
                    resources
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="flex items-center gap-1 text-sm font-semibold capitalize transition-all duration-300 text-w-100 hover:text-w-900"
                  >
                    company
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="flex items-center gap-2 mt-8">
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
              className="absolute cursor-pointer right-5 top-5 text-w-100"
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
    </div>
  );
}
