import React from "react";
import Image from "next/image";

const PatentCard = ({ number, iconSrc, patentNo, description }) => {
  return (
    <div className="p-6 border rounded-lg md:p-12 border-b-600 bg-gd-tertiary">
      <div className="flex items-center justify-between">
        <span className="text-5xl font-semibold gd-title">{number}</span>
        <div className="p-4 border rounded-full border-tropical-indigo bg-gd-secondary">
          <Image src={iconSrc} alt="icon" width={32} height={32} />
        </div>
      </div>
      <h3 className="mt-12 mb-4 text-2xl font-medium text-w-500">{patentNo}</h3>
      <p className="text-base text-w-100">{description}</p>
    </div>
  );
};

export default PatentCard;
