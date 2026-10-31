import Image from "next/image";
import BannerImage from "@/assets/banner.png";
import Link from "next/link";

const Banner = () => {
  return (
    <main className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 mt-6 md:mt-10">
      <div className="bg-[#14161c] rounded-2xl p-5 sm:p-8 lg:p-12">
        <div className="mx-auto max-w-5xl flex flex-col md:flex-row justify-between items-center gap-8 lg:gap-12">
          {/* left section */}
          <div className="w-full md:w-1/2 space-y-5 text-center md:text-left">
            <p className="text-[#c2f700] text-sm lg:text-lg font-medium tracking-wider">
              WORKOUT LIBRARY
            </p>

            <h2 className="text-white text-2xl sm:text-3xl lg:text-5xl font-bold leading-tight">
              TRAIN WITH INTENT. LOG
              <br className="hidden sm:block" />
              EVERY SET.
            </h2>

            <p className="text-sm text-gray-500 leading-7 max-w-lg mx-auto md:mx-0">
              FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
              into today&apos;s plan, and watch the week&apos;s work add up.
            </p>

            <Link
              href="#workouts"
              className="btn btn-active text-black bg-[#c2f700] px-6 border-none hover:bg-[#d5ff36] hover:scale-105 transition-all duration-200"
            >
              BROWSE WORKOUTS
            </Link>
          </div>

          {/* right section with banner image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src={BannerImage}
              width={400}
              height={600}
              alt="This is banner image"
              priority
              className="w-full max-w-70 sm:max-w-[350px] lg:max-w-[400px] h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Banner;
