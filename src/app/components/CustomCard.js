// components/CustomCard.js
import Image from "next/image";
import Link from "next/link";

const CustomCard = ({
  imgSrc,
  imgAlt,
  title,
  linkHref,
  linkText,
  arrowImgSrc,
  arrowImgAlt,
}) => {
  return (
    <div className="p-6 rounded-lg bg-gd-tertiary">
      <Image
        src={imgSrc}
        className="w-full"
        alt={imgAlt}
        width={362}
        height={176}
      />
      <h3 className="mt-8 mb-6 text-2xl text-w-500">{title}</h3>
      <Link href={linkHref} legacyBehavior>
        <a className="inline-block px-4 py-2 text-sm font-medium capitalize bg-transparent border rounded-full border-tropical-indigo text-w-900 hover:bg-tropical-indigo">
          {linkText}
          <Image
            className="inline-block ms-2"
            src={arrowImgSrc}
            alt={arrowImgAlt}
            width={20}
            height={20}
          />
        </a>
      </Link>
    </div>
  );
};

export default CustomCard;
