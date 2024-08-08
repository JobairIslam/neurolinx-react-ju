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
    <div className="bg-center bg-no-repeat bg-cover lg:py-24 bg-privacy-bg">
      <div className="container px-5 mx-auto xl:px-0">
        <div className="flex flex-col md:flex-row justify-start items-start gap-[30px]">
          <div
            data-aos="fade-up"
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
                id: "Collected-Information",
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
              {
                label: "Modification of Protection",
                id: "Modification-of-Protection",
              },
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
            <h2
              data-aos="fade-up"
              className="mb-4 text-2xl font-medium text-w-500"
              id="Overview"
            >
              Overview
            </h2>
            <p data-aos="fade-up" className="text-base text-w-100">
              This Policy (hereinafter referred to as &#34;Policy&#34;) explains
              the way of treatment of the information which is provided or
              collected in the web sites on which this Policy is posted. In
              addition, the Policy also explains the information which is
              provided or collected while using the applications of Keytalk AI,
              Inc. (hereinafter referred to as “Company”) which exist in the
              websites or platforms of other company.
            </p>
            <p data-aos="fade-up" className="mt-6 text-base text-w-100">
              The Company is the controller of the information provided or
              collected in the websites on which this Policy is posted and while
              using the applications of the Company which exist in the websites
              or platforms of other company.
            </p>
            <p data-aos="fade-up" className="mt-6 text-base text-w-100">
              Through this Policy, the Company regards personal information of
              the users as important and inform them of the purpose and method
              of Company&#39;s using the personal information provided by the
              users and the measures taken by the Company for protection of
              those personal information.
            </p>
            <p data-aos="fade-up" className="mt-6 text-base text-w-100">
              This Policy will be effective on the 10th day of May, 2023 and, in
              case of modification thereof, the Company will make public notice
              of it through posting it on the bulletin board of Company&#39;s
              website or individual notice through sending mails, fax or
              e-mails.
            </p>
            <h2
              data-aos="fade-up"
              className="pt-12 mb-4 text-2xl font-medium text-w-500"
              id="Method-of-Collection"
            >
              Method of Collection
            </h2>
            <p data-aos="fade-up" className="text-base text-w-100">
              The Company collects users&#39; information in the following ways:
            </p>
            <ul
              data-aos="fade-up"
              className="flex flex-col text-base list-disc ms-5 text-w-100"
            >
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
              data-aos="fade-up"
              className="pt-12 mb-4 text-2xl font-medium text-w-500"
              id="Collected-Information"
            >
              Collected Information
            </h2>
            <p data-aos="fade-up" className="text-base text-w-100">
              The Company regards personal information of the users as important
              and informs them of the purpose and method of Company&#39;s using
              the personal information provided by the users and the measures
              taken by the Company for protection of those personal information.
            </p>
            <h2
              data-aos="fade-up"
              className="pt-12 mb-4 text-2xl font-medium text-w-500"
              id="Disclosure-of-Collected-Information"
            >
              Disclosure of Collected Information
            </h2>
            <p data-aos="fade-up" className="text-base text-w-100">
              Except for the following cases, the Company will not disclose
              personal information to a third party:
            </p>
            <ul
              data-aos="fade-up"
              className="flex flex-col text-base list-disc ms-5 text-w-100"
            >
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
              data-aos="fade-up"
              className="pt-12 mb-4 text-2xl font-medium text-w-500"
              id="privacy-policy"
            >
              Cookies and Similar Technologies
            </h2>
            <p data-aos="fade-up" className="text-base text-w-100">
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
              data-aos="fade-up"
              className="pt-12 mb-4 text-2xl font-medium text-w-500"
              id="User’s-Right"
            >
              User’s Right
            </h2>
            <p data-aos="fade-up" className="text-base text-w-100">
              If, to exercise the above rights, a user uses the menu of
              &#39;Changing Information&#39; of the website or contacts the
              Company by writing, call or email, the Company will take measures
              without delay: The user may request the Company to take action
              regarding the processing of personal information under the
              relevant laws and regulations.
            </p>
            <h2
              data-aos="fade-up"
              className="pt-12 mb-4 text-2xl font-medium text-w-500"
              id="Security"
            >
              Security
            </h2>
            <p data-aos="fade-up" className="text-base text-w-100">
              In handling personal information of the users, the Company takes
              the following technical measures to ensure safety in preventing
              loss, theft, leakage, alteration, or damage to the personal
              information.
            </p>
            <ul
              data-aos="fade-up"
              className="flex flex-col text-base list-disc ms-5 text-w-100"
            >
              <li>
                The user&#39;s personal information is protected by a password,
                and the files and transmission data are encrypted or protected
                by file lock functions.
              </li>
              <li>
                The Company takes measures to prevent damage caused by computer
                viruses by using vaccines programs.
              </li>
              <li>
                The Company adopts a security device and data encryption
                function to ensure the safety of the system.
              </li>
              <li>
                The Company takes measures to prevent any damages from hacking
                or theft of personal information by an outsider, including
                operating an intrusion prevention system.
              </li>
            </ul>
            <h2
              data-aos="fade-up"
              className="pt-12 mb-4 text-2xl font-medium text-w-500"
              id="Information-of-Children"
            >
              Information of Children
            </h2>
            <p data-aos="fade-up" className="text-base text-w-100">
              The Company will take measures to comply with laws and regulations
              for protecting the personal information of children.
            </p>
            <h2
              data-aos="fade-up"
              className="pt-12 mb-4 text-2xl font-medium text-w-500"
              id="Modification-of-Protection"
            >
              Modification of Protection
            </h2>
            <p data-aos="fade-up" className="text-base text-w-100">
              The Company may modify its privacy protection measures at any time
              to ensure that users&#39; personal information is safeguarded in
              accordance with the highest standards. Users will be notified of
              any significant changes to this Policy through the Company&#39;s
              website.
            </p>
            <h2
              data-aos="fade-up"
              className="pt-12 mb-4 text-2xl font-medium text-w-500"
              id="Others"
            >
              Others
            </h2>
            <p data-aos="fade-up" className="pb-6 text-base text-w-100">
              Considering it engages in global businesses, the Company may
              provide users&#39; personal information to companies located in
              other countries for the purpose as expressly stated in this
              Policy. For the places where the personal information is
              transmitted, retained, or processed, the Company takes reasonable
              measures for protecting that personal information.
            </p>
            <p data-aos="fade-up" className="pb-6 text-base text-w-100">
              The website, product, or service of the Company may include links
              to third-party sites, and the privacy protection policy of the
              third-party site may be different. Thus, it is required for users
              to additionally check the policy of a third-party site linked to
              the Company&#39;s site.
            </p>
            <p data-aos="fade-up" className="pb-6 text-base text-w-100">
              If the user resides in California, certain rights may be given.
              The Company prepares preventive measures necessary for protecting
              personal information of members so that the Company can comply
              with online privacy protection laws of California. In case of
              leakage of personal information, a user may request the Company to
              check the leakage. In addition, all users on the website of the
              Company can modify their information at any time by using the menu
              for changing information by connecting their personal account.
              Moreover, the Company does not trace the visitors of its website
              nor use any signals for &#39;tracing prevent&#39;. The Company
              will not collect and provide any personal identification
              information through ad services without the consent of users.
            </p>
            <p data-aos="fade-up" className="pb-6 text-base text-w-100">
              In principle, the Company destructs personal information of users
              without delay when the purpose of its collection and use has been
              achieved, or the legal or management needs are satisfied, or users
              request. If it is required to retain the information by relevant
              laws and regulations, the Company will retain member information
              for a certain period as designated by relevant laws and
              regulations.
            </p>
            <h2
              data-aos="fade-up"
              className="pt-12 mb-4 text-2xl font-medium text-w-500"
              id="Contact-Information"
            >
              Contact Information
            </h2>
            <p data-aos="fade-up" className="text-base text-w-100">
              To protect the rights of the members and handle complaints related
              to personal information, the Company has designated the relevant
              departments and person in charge. If you have any complaints
              related to your personal information while using the Company’s
              services, please report it to the person in charge. The Company
              will quickly and sufficiently respond to the users’ reports.
            </p>
            <ul
              data-aos="fade-up"
              className="flex flex-col text-base list-disc ms-5 text-w-100"
            >
              <li>
                Person in charge of privacy protection and customer service:
                [Name] / [Contact information]
              </li>
              <li>
                Designated department: [Department Name] / [Contact information]
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PolicySection;
