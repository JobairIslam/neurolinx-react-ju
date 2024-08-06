import Image from "next/image";
import Link from "next/link";

const UpdateCard = ({
  imageSrc,
  heading,
  headingHref,
  tag1,
  tag1Href,
  tag2,
  tag2Href,
}) => {
  return (
    <div
      data-aos="fade-up"
      className="p-6 border rounded-lg border-b-600 bg-gd-tertiary"
    >
      <Image
        className="w-full rounded-lg"
        src={imageSrc}
        alt="media image"
        width={800}
        height={450}
      />
      <Link href={headingHref} legacyBehavior>
        <a className="inline-block mt-8 mb-6 text-2xl font-medium transition-all duration-300 text-w-500 hover:text-tropical-indigo">
          {heading}
        </a>
      </Link>
      <div className="flex flex-row gap-2">
        <Link href={tag1Href} legacyBehavior>
          <a className="inline-block px-4 py-2 text-xs border rounded-full md:text-sm border-b-400 text-w-100 bg-b-600 hover:bg-tropical-indigo hover:text-w-900">
            {tag1}
          </a>
        </Link>
        <Link href={tag2Href} legacyBehavior>
          <a className="inline-block px-4 py-2 text-xs border rounded-full md:text-sm border-b-400 text-w-100 bg-b-600 hover:bg-tropical-indigo hover:text-w-900">
            {tag2}
          </a>
        </Link>
      </div>
    </div>
  );
};

export default UpdateCard;
