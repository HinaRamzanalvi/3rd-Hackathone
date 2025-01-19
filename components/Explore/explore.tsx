

import Image from "next/image";
import chair1 from "@/components/public/chair1.svg";
import chair3 from "@/components/public/chair3.svg";
import chair4 from "@/components/public/chair4.svg";
import chair6 from "@/components/public/chair6.svg";

export default function Explore() {
  return (
    <div>
      {/* Explore Section */}
      <div className="px-4 sm:px-6 py-8 sm:py-16 flex flex-col lg:flex-row items-center lg:ml-16">
        {/* Vertical Text Section */}
        <div className="flex items-center gap-6 lg:gap-10 mb-8 lg:mb-0">
          <div className="w-12 flex items-center justify-center">
            <p className="transform -rotate-90 text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-700 whitespace-nowrap">
              Explore New and Popular Styles
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full flex flex-col lg:flex-row lg:gap-6">
          {/* Left Section - Large Image */}
          <div className="w-full lg:w-[50%] h-auto flex justify-center items-center mb-6 lg:mb-0">
            
            <Image
              src={chair3}
              alt="Chair"
              className="rounded-md"
              width={648}
              height={648}
            />
          </div>

          {/* Right Section - Small Images */}
          <div className="w-full grid grid-cols-2 gap-4 sm:gap-6 lg:w-[50%]">
            <div className="w-full h-auto">
              
              <Image
                src={chair4}
                alt="Chair 4"
                className="rounded-md object-cover"
                width={312}
                height={312}
              />
            </div>
            <div className="w-full h-auto">
           
              <Image
                src={chair1}
                alt="Chair 1"
                className="rounded-md object-cover"
                width={312}
                height={312}
              />
            </div>
            <div className="w-full h-auto">
              <Image
                src={chair6}
                alt="Chair 6"
                className="rounded-md object-cover"
                width={312}
                height={312}
              />
            </div>
            <div className="w-full h-auto">
              <Image
                src={chair1}
                alt="Chair 1"
                className="rounded-md object-cover"
                width={312}
                height={312}
              />
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
