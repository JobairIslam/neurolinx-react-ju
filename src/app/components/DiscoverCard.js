import Image from "next/image";
import Link from "next/link";

const DiscoverCard = ({ imageSrc, title, link }) => {
  return (
    <div className="p-6 border rounded-lg border-b-600 bg-gd-tertiary">
      <Image
        src={imageSrc}
        alt="case studies"
        className="rounded-lg"
        width={582}
        height={276}
      />
      <h3 className="mt-8 mb-6 text-2xl font-medium text-w-500">{title}</h3>
      <Link href={link} legacyBehavior>
        <a className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 bg-transparent border rounded-full border-tropical-indigo text-w-900 hover:bg-tropical-indigo">
          Read Case Study
          <Image
            src="/assets/img/icons/arrow-right.svg"
            alt="arrow"
            width={20}
            height={20}
          />
        </a>
      </Link>
    </div>
  );
};

export default DiscoverCard;
