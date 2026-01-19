import {
  ExperienceImage,
  ExperienceImage1,
  ExperienceImage2,
} from "@/app/assets/images";
import Image from "next/image";

const data = [
  {
    id: 1,
    image: ExperienceImage1,
    title: "Web Design",
    description:
      "Past more emotionless this along goodness this sad wow manatee mongos flustered noteworthy man comedian opened inside owing correctionally around after inefficient telling spransac briskly speckles customer.",
  },
  {
    id: 2,
    image: ExperienceImage2,
    title: "Web Design",
    description:
      "Past more emotionless this along goodness this sad wow manatee mongos flustered noteworthy man comedian opened inside owing correctionally around after inefficient telling spransac briskly speckles customer.",
  },
  {
    id: 3,
    image: ExperienceImage,
    title: "Web Design",
    description:
      "Past more emotionless this along goodness this sad wow manatee mongos flustered noteworthy man comedian opened inside owing correctionally around after inefficient telling spransac briskly speckles customer.",
  },
];

export default function Services() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-16">
        {/* Title */}
        <div className="text-center max-w-3xl">
          <h2 className="text-2xl sm:text-3xl xl:text-4xl font-bold text-black">
            25+ Years of <span className="text-orange-400">Experience</span>
          </h2>
          <p className="mt-4 text-[#535659] text-sm sm:text-base">
            Past more emotionless this along goodness this sad wow manatee
            mongos flustered noteworthy man comedian opened inside owing
            correctionally around after inefficient telling spransac briskly
            speckles customer.
          </p>
        </div>

        {/* Main Image */}
        <div className="w-full max-w-3xl">
          <Image
            src={ExperienceImage}
            alt="Experience"
            className="w-full h-auto rounded-lg"
            priority
          />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 w-full">
          {data.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-xl rounded-lg overflow-hidden flex flex-col"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="p-5 flex flex-col gap-2">
                <h3 className="text-lg font-bold text-[#1F2730]">
                  {item.title}
                </h3>
                <p className="text-[#535659] text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
