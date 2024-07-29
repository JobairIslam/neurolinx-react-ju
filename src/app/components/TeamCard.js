import Image from "next/image";
import Link from "next/link";
import React from "react";

const TeamCard = ({
  name,
  title,
  profileImage,
  linkedinUrl,
  twitterUrl,
  skills,
}) => {
  return (
    <div className="flex flex-col gap-12 p-12 border rounded-lg lg:flex-row border-b-600 bg-gd-tertiary">
      <Image
        src={profileImage}
        className="rounded-lg"
        alt={`${name} profile image`}
        width={250}
        height={280}
      />
      <div className="flex flex-col items-start justify-start md:justify-center">
        <h3 className="text-2xl font-medium text-w-500">{name}</h3>
        <p className="mt-2 text-base text-w-100">{title}</p>
        <div className="flex flex-row gap-4 mt-6 mb-12">
          <Link href={linkedinUrl} legacyBehavior>
            <a>
              <Image
                src="/img/icons/linkedin.svg"
                alt="linkedin"
                width={24}
                height={24}
              />
            </a>
          </Link>
          <Link href={twitterUrl} legacyBehavior>
            <a>
              <Image
                src="/img/icons/x.svg"
                alt="twitter"
                width={24}
                height={24}
              />
            </a>
          </Link>
        </div>
        <ul className="list-disc ms-5">
          {skills.map((skill, index) => (
            <li key={index} className="text-base text-w-100">
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TeamCard;
