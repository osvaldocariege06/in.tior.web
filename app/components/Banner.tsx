import { ChevronRightIcon, Link2Icon, MenuIcon } from "lucide-react";
import Image from "next/image";
import { BannerBg, BannerImage } from "../assets/images";
import Header from "./Header";

export default function Banner() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Background */}

      <Image
        src={BannerBg}
        alt="Banner"
        width={1920}
        height={600}
        className="w-full absolute h-screen top-0 left-0 max-h-screen"
        priority
      />

      <Header />

      <div className="max-w-7xl mx-auto px-6 pt-10 xl:pt-24 flex flex-col xl:flex-row items-center gap-16">
        {/* Content */}
        <div className="max-w-xl text-center xl:text-left">
          <div className="flex items-center gap-1 mb-8 justify-center xl:justify-start">
            <MenuIcon size={16} />
            <ChevronRightIcon size={16} />
            <span className="text-blue-600 text-sm">Services</span>
          </div>

          <h1 className="font-bold text-3xl sm:text-4xl xl:text-[57px] leading-tight xl:leading-[67px] mb-6">
            Your choice is our first and foremost{" "}
            <span className="text-orange-400">Priority</span>
          </h1>

          <span className="text-[#1F2730] font-medium block">
            The Real Creative Potential
          </span>

          <p className="mt-3 text-sm sm:text-base text-[#1F2730]/80">
            We make spaces and structures for our customers and local area
            itedes malis civibus kase iuvaret blandit ipsum Past more
            emotionless this.
          </p>

          {/* Services */}
          <div className="flex items-center w-auto justify-center xl:justify-start mt-8">
            <div className="grid grid-cols-2 w-auto sm:grid-cols-2 gap-3">
              {[1, 2, 3, 4].map((item) => (
                <span
                  key={item}
                  className="flex items-center text-center gap-2 text-[#1F2730] text-sm"
                >
                  <Link2Icon size={16} color="#8314E2" />
                  Consulting
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="w-full max-w-md xl:max-w-[615px]">
          <Image
            src={BannerImage}
            alt="Banner illustration"
            className="w-full h-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
}
