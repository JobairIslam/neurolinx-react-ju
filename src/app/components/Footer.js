// components/Footer.js
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="pt-24">
      <div className="container px-5 pb-24 mx-auto xl:px-0">
        <div className="flex flex-col items-start justify-between gap-12 lg:flex-row lg:gap-24">
          <div className="flex flex-col justify-start items-start gap-8 lg:gap-[112px]">
            <Link href="/" className="flex items-center justify-start gap-2">
              <Image src="/img/logo.svg" alt="logo" width={31} height={28} />
              <span className="text-xl font-medium text-w-900">Neurolinx</span>
            </Link>
            <div className="flex gap-4">
              <Link href="#" className="hover:opacity-80">
                <Image
                  src="/img/icons/facebook.svg"
                  alt="Facebook icon"
                  width={24}
                  height={24}
                />
              </Link>
              <Link href="#" className="hover:opacity-80">
                <Image
                  src="/img/icons/instagram.svg"
                  alt="Instagram icon"
                  width={24}
                  height={24}
                />
              </Link>
              <Link href="#" className="hover:opacity-80">
                <Image
                  src="/img/icons/x.svg"
                  alt="X icon"
                  width={24}
                  height={24}
                />
              </Link>
              <Link href="#" className="hover:opacity-80">
                <Image
                  src="/img/icons/linkedin.svg"
                  alt="LinkedIn icon"
                  width={24}
                  height={24}
                />
              </Link>
              <Link href="#" className="hover:opacity-80">
                <Image
                  src="/img/icons/youtube.svg"
                  alt="YouTube icon"
                  width={24}
                  height={24}
                />
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-12 lg:flex-row lg:gap-24">
            <div className="flex flex-col items-start justify-start gap-4">
              <h4 className="text-sm font-medium uppercase text-w-500">
                company
              </h4>
              <Link
                href="/"
                className="text-sm font-medium capitalize transition-all duration-300 text-w-100 hover:text-tropical-indigo"
              >
                homepage
              </Link>
              <Link
                href="/contact"
                className="text-sm font-medium capitalize transition-all duration-300 text-w-100 hover:text-tropical-indigo"
              >
                contact us
              </Link>
              <Link
                href="/sign-in"
                className="text-sm font-medium capitalize transition-all duration-300 text-w-100 hover:text-tropical-indigo"
              >
                sign in
              </Link>
              <Link
                href="/sign-up"
                className="text-sm font-medium capitalize transition-all duration-300 text-w-100 hover:text-tropical-indigo"
              >
                sign up
              </Link>
            </div>
            <div className="flex flex-col items-start justify-start gap-4">
              <h4 className="text-sm font-medium uppercase text-w-500">
                solutions
              </h4>
              <Link
                href="/solution"
                className="text-sm font-medium capitalize transition-all duration-300 text-w-100 hover:text-tropical-indigo"
              >
                Advanced prompts
              </Link>
              <Link
                href="/documentation"
                className="text-sm font-medium capitalize transition-all duration-300 text-w-100 hover:text-tropical-indigo"
              >
                documentation
              </Link>
              <Link
                href="/how-it-works"
                className="text-sm font-medium capitalize transition-all duration-300 text-w-100 hover:text-tropical-indigo"
              >
                how it works
              </Link>
              <Link
                href="/media-kit"
                className="text-sm font-medium capitalize transition-all duration-300 text-w-100 hover:text-tropical-indigo"
              >
                media kit
              </Link>
            </div>
            <div className="flex flex-col items-start justify-start gap-4">
              <h4 className="text-sm font-medium uppercase text-w-500">
                resources
              </h4>
              <Link
                href="/blog"
                className="text-sm font-medium capitalize transition-all duration-300 text-w-100 hover:text-tropical-indigo"
              >
                blog
              </Link>
              <Link
                href="/blog-single"
                className="text-sm font-medium capitalize transition-all duration-300 text-w-100 hover:text-tropical-indigo"
              >
                blog Single
              </Link>
              <Link
                href="/case-studies"
                className="text-sm font-medium capitalize transition-all duration-300 text-w-100 hover:text-tropical-indigo"
              >
                case studies
              </Link>
              <Link
                href="/case-studies-single"
                className="text-sm font-medium capitalize transition-all duration-300 text-w-100 hover:text-tropical-indigo"
              >
                case studies single
              </Link>
            </div>
            <div className="flex flex-col items-start justify-start gap-4">
              <h4 className="text-sm font-medium uppercase text-w-500">
                about us
              </h4>
              <Link
                href="/blog"
                className="text-sm font-medium capitalize transition-all duration-300 text-w-100 hover:text-tropical-indigo"
              >
                blog
              </Link>
              <Link
                href="/blog-single"
                className="text-sm font-medium capitalize transition-all duration-300 text-w-100 hover:text-tropical-indigo"
              >
                blog Single
              </Link>
              <Link
                href="/case-studies"
                className="text-sm font-medium capitalize transition-all duration-300 text-w-100 hover:text-tropical-indigo"
              >
                case studies
              </Link>
              <Link
                href="/team"
                className="text-sm font-medium capitalize transition-all duration-300 text-w-100 hover:text-tropical-indigo"
              >
                Our Team
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container px-5 pb-6 mx-auto xl:px-0 md:py-6">
        <div className="flex flex-col items-center justify-center gap-2 md:flex-row md:justify-between md:gap-8">
          <p className="text-xs text-w-100">
            Copyright &copy; 2024 <Link href="/">Neurolinx</Link>. All rights
            reserved
          </p>
          <ul className="flex items-center gap-8 md:justify-end">
            <li className="text-xs transition-all duration-300 text-w-100 hover:text-tropical-indigo">
              <Link href="/privacy-policy">Privacy Policy</Link>
            </li>
            <li className="text-xs transition-all duration-300 text-w-100 hover:text-tropical-indigo">
              <Link href="/terms-of-service">Terms of Services</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
