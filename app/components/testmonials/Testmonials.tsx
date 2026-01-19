import { TestmonialBg, TestmonialWoman } from "@/app/assets/images";
import { QuoteIcon } from "lucide-react";
import Image from "next/image";

export default function Testmonials() {
  return (
    <section className="mt-24 xl:mt-40">
      {/* Title */}
      <div className="flex flex-col items-center gap-4 mb-16 px-6">
        <h2 className="text-lg xl:text-xl underline font-bold text-[#F28F1A]">
          TESTIMONIALS
        </h2>
        <p className="text-2xl sm:text-3xl xl:text-4xl font-bold text-[#1F2730] text-center max-w-3xl">
          What Our Clients Say
        </p>
      </div>

      {/* Background */}
      <div className="relative overflow-hidden">
        <Image
          src={TestmonialBg}
          alt="Testimonials background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 xl:py-20 flex flex-col xl:flex-row items-center gap-12">
          {/* Image (desktop only) */}
          <div className="hidden xl:block">
            <Image
              src={TestmonialWoman}
              alt="Client"
              width={448}
              height={482}
              className="rounded-lg"
              priority
            />
          </div>

          {/* Text */}
          <div className="max-w-xl text-center xl:text-left">
            <h3 className="text-white font-bold text-xl xl:text-2xl mb-4">
              The homemade live-work space that’s a serene haven
            </h3>

            <p className="text-white/80 text-sm sm:text-base leading-relaxed">
              <QuoteIcon className="inline mr-2" size={16} color="yellow" />
              The best interiors are a genuine reflection of their inhabitants.
              Here are three homes with real heart. Almost everything in the
              home of the designer Małgorzata Bany has been salvaged or made by
              herself and her partner except.
              <QuoteIcon className="inline ml-2" size={16} color="yellow" />
            </p>

            <h4 className="font-bold text-white mt-6">Thomath Lewes</h4>
            <span className="text-white/80 text-sm">Client of Company</span>
          </div>
        </div>
      </div>
    </section>
  );
}
