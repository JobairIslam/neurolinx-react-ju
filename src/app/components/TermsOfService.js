"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const TermsSection = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("#intro");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLinkClick = (href) => {
    setActiveLink(href);
  };

  return (
    <div className="lg:py-24">
      <div className="container px-5 mx-auto xl:px-0">
        <div className="flex flex-col md:flex-row justify-start items-start gap-[30px]">
          <div
            className={`flex flex-col justify-start items-start gap-4 w-full md:max-w-[410px] ${
              isScrolled ? "shadow-md" : ""
            }`}
            id="nav-container"
          >
            {[
              { href: "#intro", label: "Introduction" },
              { href: "#acceptance-of-terms", label: "Acceptance of Terms" },
              {
                href: "#changes-to-terms-or-service",
                label: "Changes to Terms or Service",
              },
              { href: "#privacy-policy", label: "Privacy Policy" },
              {
                href: "#access-to-the-service",
                label: "Access to the Service",
              },
              { href: "#user-content", label: "User Content" },
              { href: "#prohibited-conduct", label: "Prohibited Conduct" },
              {
                href: "#intellectual-property",
                label: "Intellectual Property",
              },
              { href: "#termination", label: "Termination" },
              { href: "#disclaimer", label: "Disclaimer" },
              {
                href: "#limitation-of-liability",
                label: "Limitation of Liability",
              },
              { href: "#governing-law", label: "Governing Law" },
              { href: "#contact-us", label: "Contact Us" },
            ].map((link) => (
              <Link key={link.href} href={link.href} legacyBehavior>
                <a
                  className={`inline-block text-xl font-medium ${
                    activeLink === link.href ? "gd-title" : "text-w-100"
                  }`}
                  onClick={() => handleLinkClick(link.href)}
                >
                  {link.label}
                </a>
              </Link>
            ))}
          </div>
          <div className="ps-[30px] w-full md:max-w-[810px] border-s border-b-600">
            <h2 className="mb-4 text-2xl font-medium text-w-500" id="intro">
              Introduction
            </h2>
            <p className="text-base text-w-100">
              Welcome to Neurolinx! These Terms of Service (&rdquo;Terms&rdquo;)
              govern your use of our website located at
              <a href="http://www.neurolinx.ai/">www.neurolinx.ai</a> and our
              related services (collectively, the &rdquo;Service&rdquo;). Our
              Service is provided to you by Neurolinx AI, Inc.
              (&rdquo;Neurolinx,&rdquo; &rdquo;we,&rdquo; &rdquo;us,&rdquo; or
              &rdquo;our&rdquo;).
            </p>
            <h2
              className="pt-12 mb-4 text-2xl font-medium text-w-500"
              id="acceptance-of-terms"
            >
              Acceptance of Terms
            </h2>
            <p className="text-base text-w-100">
              By accessing or using our Service, you agree to be bound by these
              Terms and all terms incorporated by reference. If you do not agree
              to all these Terms, then you may not access or use the Service.
            </p>
            <h2
              className="pt-12 mb-4 text-2xl font-medium text-w-500"
              id="changes-to-terms-or-service"
            >
              Changes to Terms or Service
            </h2>
            <p className="text-base text-w-100">
              We reserve the right to update or modify these Terms at any time
              without prior notice. Your use of the Service after any such
              changes constitutes your acceptance of the new Terms. It is your
              responsibility to review these Terms regularly.
            </p>
            <h2
              className="pt-12 mb-4 text-2xl font-medium text-w-500"
              id="privacy-policy"
            >
              Privacy Policy
            </h2>
            <p className="text-base text-w-100">
              Please review our Privacy Policy, which also governs your use of
              the Service, to understand our practices.
            </p>
            <h2
              className="pt-12 mb-4 text-2xl font-medium text-w-500"
              id="access-to-the-service"
            >
              Access to the Service
            </h2>
            <p className="text-base text-w-100">
              Please review our Privacy Policy, which also governs your use of
              the Service, to understand our practices.
            </p>
            <h2
              className="pt-12 mb-4 text-2xl font-medium text-w-500"
              id="user-content"
            >
              User Content
            </h2>
            <p className="text-base text-w-100">
              Our Service may allow you to post, link, store, share, and
              otherwise make available certain information, text, graphics,
              videos, or other material (&rdquo;Content&rdquo;). You are
              responsible for the Content that you post to the Service,
              including its legality, reliability, and appropriateness.
            </p>
            <h2
              className="pt-12 mb-4 text-2xl font-medium text-w-500"
              id="prohibited-conduct"
            >
              Prohibited Conduct
            </h2>
            <p className="text-base text-w-100">
              When using the Service, you agree not to engage in any of the
              following prohibited activities:
            </p>
            <ul className="flex flex-col text-base list-disc ms-5 text-w-100">
              <li>Violating any law, regulation, or our policies.</li>
              <li>
                Using the Service in any manner that could interfere with,
                disrupt, negatively affect, or inhibit other users from fully
                enjoying the Service.
              </li>
              <li>Impersonating or intimidating others.</li>
              <li>
                Using any data mining, robots, or similar data gathering or
                extraction methods.
              </li>
              <li>
                Transmitting any viruses, worms, defects, Trojan horses, or any
                items of a destructive nature.
              </li>
            </ul>
            <h2
              className="pt-12 mb-4 text-2xl font-medium text-w-500"
              id="intellectual-property"
            >
              Intellectual Property
            </h2>
            <p className="text-base text-w-100">
              All Content on the Service, including but not limited to text,
              graphics, logos, button icons, images, audio clips, digital
              downloads, data compilations, and software, is the property of
              Neurolinx or its Content suppliers and is protected by copyright,
              trademark, and other intellectual property laws.
            </p>
            <h2
              className="pt-12 mb-4 text-2xl font-medium text-w-500"
              id="termination"
            >
              Termination
            </h2>
            <p className="text-base text-w-100">
              We may terminate or suspend access to our Service immediately,
              without prior notice or liability, for any reason whatsoever,
              including without limitation if you breach these Terms.
            </p>
            <h2
              className="pt-12 mb-4 text-2xl font-medium text-w-500"
              id="disclaimer"
            >
              Disclaimer
            </h2>
            <p className="text-base text-w-100">
              The Service is provided &rdquo;as is&rdquo; and &rdquo;as
              available&rdquo; without warranties of any kind, either express or
              implied.
            </p>
            <h2
              className="pt-12 mb-4 text-2xl font-medium text-w-500"
              id="limitation-of-liability"
            >
              Limitation of Liability
            </h2>
            <p className="text-base text-w-100">
              Neurolinx and its affiliates, officers, directors, employees,
              agents, and suppliers shall not be liable for any indirect,
              incidental, special, consequential, or punitive damages, including
              without limitation, loss of profits, data, use, goodwill, or other
              intangible losses, resulting from:
            </p>
            <ul className="flex flex-col text-base list-disc ms-5 text-w-100">
              <li>
                your access to or use of or inability to access or use the
                Service;
              </li>
              <li>any conduct or content of any third party on the Service;</li>
              <li>any content obtained from the Service;</li>
              <li>
                unauthorized access, use, or alteration of your transmissions or
                content, whether based on warranty, contract, tort (including
                negligence), or any other legal theory, whether or not we have
                been informed of the possibility of such damage, and even if a
                remedy set forth herein is found to have failed of its essential
                purpose.
              </li>
            </ul>
            <h2
              className="pt-12 mb-4 text-2xl font-medium text-w-500"
              id="governing-law"
            >
              Governing Law
            </h2>
            <p className="text-base text-w-100">
              These Terms shall be governed and construed in accordance with the
              laws of the State of California, without regard to its conflict of
              law provisions.
            </p>
            <h2
              className="pt-12 mb-4 text-2xl font-medium text-w-500"
              id="contact-us"
            >
              Contact Us
            </h2>
            <p className="text-base text-w-100">
              if you have any questions about these Terms, please contact us at
              <a href="mailto:business@neurolinx.com">business@neurolinx.com</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsSection;
