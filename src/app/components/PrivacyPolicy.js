"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const PolicySection = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("Overview");

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  const handleLinkClick = (event, link) => {
    event.preventDefault();
    const target = document.getElementById(link);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      setActiveLink(link);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
              { label: "Overview", id: "Overview" },
              { label: "Method of Collection", id: "Method-of-Collection" },
              {
                label: "Collected Information",
                id: "changes-to-terms-or-service",
              },
              {
                label: "Disclosure of Information",
                id: "Disclosure-of-Collected-Information",
              },
              {
                label: "Cookies and Similar Technologies",
                id: "privacy-policy",
              },
              { label: "User’s Right", id: "User’s-Right" },
              { label: "Security", id: "Security" },
              {
                label: "Information of Children",
                id: "Information-of-Children",
              },
              { label: "Modification of Protection", id: "" },
              { label: "Others", id: "Others" },
              { label: "Contact Information", id: "Contact-Information" },
            ].map((link) => (
              <Link key={link.id} href={`#${link.id}`} legacyBehavior>
                <a
                  className={`inline-block text-xl font-medium ${
                    activeLink === link.id ? "gd-title" : "text-w-100"
                  }`}
                  onClick={(event) => handleLinkClick(event, link.id)}
                >
                  {link.label}
                </a>
              </Link>
            ))}
          </div>

          <div className="ps-[30px] w-full md:max-w-[810px] border-s border-b-600">
            <h2 className="mb-4 text-2xl font-medium text-w-500" id="Overview">
              Overview
            </h2>
            <p className="text-base text-w-100">
              This Policy (hereinafter referred to as &#34;Policy&#34;) explains
              the way of treatment of the information which is provided or
              collected in the web sites on which this Policy is posted. In
              addition, the Policy also explains the information which is
              provided or collected while using the applications of Keytalk AI,
              Inc. (hereinafter referred to as “Company”) which exist in the
              websites or platforms of other company.
            </p>
            <p className="mt-6 text-base text-w-100">
              The Company is the controller of the information provided or
              collected in the websites on which this Policy is posted and while
              using the applications of the Company which exist in the websites
              or platforms of other company.
            </p>
            <p className="mt-6 text-base text-w-100">
              Through this Policy, the Company regards personal information of
              the users as important and inform them of the purpose and method
              of Company&#39;s using the personal information provided by the
              users and the measures taken by the Company for protection of
              those personal information.
            </p>
            <p className="mt-6 text-base text-w-100">
              This Policy will be effective on the 10th day of May, 2023 and, in
              case of modification thereof, the Company will make public notice
              of it through posting it on the bulletin board of Company&#39;s
              website or individual notice through sending mails, fax or
              e-mails.
            </p>
            <h2
              className="pt-12 mb-4 text-2xl font-medium text-w-500"
              id="Method-of-Collection"
            >
              Method of Collection
            </h2>
            <p className="text-base text-w-100">
              The Company collects users&#39; information in the following ways:
            </p>
            <ul className="flex flex-col text-base list-disc ms-5 text-w-100">
              <li>By which users enter their personal information online</li>
              <li>
                By which personal information is collected offline, such as
                fairs, conferences, and events
              </li>
              <li>
                By which personal information is collected through automatic
                generation and collection.
              </li>
              <li>
                The Company may collect information directly provided by users.
              </li>
              <li>
                Users may reject the collection and use of optional items.
              </li>
            </ul>
            <h2
              className="pt-12 mb-4 text-2xl font-medium text-w-500"
              id="Disclosure-of-Collected-Information"
            >
              Disclosure of Collected Information
            </h2>
            <p className="text-base text-w-100">
              Except for the following cases, the Company will not disclose
              personal information to a third party:
            </p>
            <ul className="flex flex-col text-base list-disc ms-5 text-w-100">
              <li>By which users enter their personal information online</li>
              <li>
                For carrying out services, the Company commissions external
                professional companies
              </li>
              <li>If required to be disclosed by the laws and regulations.</li>
              <li>
                The Company does not provide users&#39; personal information to
                a third party except for the following.
              </li>
              <li>
                When the user selects to receive information about products and
                services of certain companies.
              </li>
              <li>
                Other cases where the user gives prior consent for sharing his
                or her personal information.
              </li>
              <li>
                If required to be disclosed by the investigative agencies for
                detecting crimes in accordance.
              </li>
            </ul>
            <h2
              className="pt-12 mb-4 text-2xl font-medium text-w-500"
              id="privacy-policy"
            >
              Cookies and Similar Technologies
            </h2>
            <p className="text-base text-w-100">
              The Company may collect collective and impersonal information
              through &#39;cookies&#39; or ‘web beacons’. Cookies are very small
              text files sent to the users&#39; browser by the server used for
              operation of the Company&#39;s websites and stored in the hard
              disks of the users&#39; computer. Web beacons are small pieces of
              code that exist on websites and emails. By using web beacons, we
              may know whether a user has interacted with certain webs or the
              contents of an email. These functions are used for evaluating,
              improving services, and setting up users&#39; experiences so that
              much-improved services can be provided by the Company to the
              users.
            </p>
            <h2
              className="pt-12 mb-4 text-2xl font-medium text-w-500"
              id="User’s-Right"
            >
              User’s Right
            </h2>
            <p className="text-base text-w-100">
              If, to exercise the above rights, a user uses the menu of
              &#39;amendment of member information&#39; of the webpage or
              contacts the Company by sending a document or e-mails or using the
              telephone to the Company (or person in charge of the management of
              personal information or a deputy), the Company will take measures
              without delay. However, the Company may reject the request of a
              user only to the extent that there exists either proper cause as
              prescribed in the laws or equivalent cause.
            </p>
            <p className="mt-6 text-base text-w-100">
              The users or their legal representatives may exercise the
              following rights regarding the collection, use, and sharing of
              personal information by the Company:
            </p>
            <ul className="flex flex-col text-base list-disc ms-5 text-w-100">
              <li>The right to access personal information.</li>
              <li>The right to rectification.</li>
              <li>The right to erasure.</li>
              <li>The right to restriction of processing.</li>
              <li>The right to data portability.</li>
              <li>The right to object.</li>
            </ul>
            <h2
              className="pt-12 mb-4 text-2xl font-medium text-w-500"
              id="Security"
            >
              Security
            </h2>
            <p className="text-base text-w-100">
              The Company regards the security of personal information of users
              as very important. To prevent users&#39; personal information from
              being lost, stolen, leaked, altered, or damaged, the Company takes
              the following technical and managerial measures for securing the
              safety:
            </p>
            <ul className="flex flex-col text-base list-disc ms-5 text-w-100">
              <li>Measures of personal information encryption.</li>
              <li>
                Measures for preventing and protecting against attacks from
                outside (Hacking etc.).
              </li>
              <li>
                Measures for managing and controlling access to the system.
              </li>
              <li>
                Education and training of personnel handling personal
                information.
              </li>
              <li>
                Measures for ensuring safe storage and transmission of data.
              </li>
            </ul>
            <h2
              className="pt-12 mb-4 text-2xl font-medium text-w-500"
              id="Information-of-Children"
            >
              Information of Children
            </h2>
            <p className="text-base text-w-100">
              In principle, the Company does not collect information from
              children under the age of 14 or the equivalent minimum age as
              prescribed in the laws in the relevant jurisdiction. If the
              Company learns that it has inadvertently collected personal
              information from children under the applicable age without
              verification of parental consent, the Company will take immediate
              steps to delete such information from its records.
            </p>
            <h2
              className="pt-12 mb-4 text-2xl font-medium text-w-500"
              id="Contact-Information"
            >
              Contact Information
            </h2>
            <p className="text-base text-w-100">
              If you have any questions about this Policy, please contact us at
              the following address:
            </p>
            <p className="text-base text-w-100">
              <strong>Keytalk AI, Inc.</strong>
              <br />
              1234 Street Name
              <br />
              City, State, Zip Code
              <br />
              Email: support@keytalkai.com
              <br />
              Phone: (123) 456-7890
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PolicySection;
