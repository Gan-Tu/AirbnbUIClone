import React from "react";
import Image from "next/image";

function HeroImage() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image src="https://links.papareact.com/0fm" layout="fill" alt="" />
      <div className="absolute top-1/2 w-full text-center text-sm sm:text-lg">
        <p>Not sure where to go? Perfect.</p>
        <button className="fond-bold my-3 rounded-full bg-white px-10 py-4 text-purple-500 shadow-md transition duration-150 hover:shadow-lg active:scale-90">
          I&apos;m flexible.
        </button>
      </div>
    </div>
  );
}

export default HeroImage;
