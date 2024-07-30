import Image from "next/image";

const EnhancingCard = ({ imageSrc, title, description }) => {
  return (
    <div className="p-6 border rounded-lg md:p-12 bg-gd-tertiary border-b-600">
      <div className="inline-block p-4 rounded-full bg-primary btn-border">
        <Image src={imageSrc} alt="icons" width={32} height={32} />
      </div>
      <h3 className="mt-6 mb-4 text-2xl font-medium md:mt-12 text-w-500">
        {title}
      </h3>
      <p className="text-base text-w-100">{description}</p>
    </div>
  );
};

export default EnhancingCard;
