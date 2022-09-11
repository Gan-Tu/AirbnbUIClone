import React from "react";
import Image from "next/image";

function LargeCard({ img, title, description, buttonText }) {
  return (
    // <div className="transform cursor-pointer transition duration-300 ease-out hover:scale-105">
    // <div className="relative h-64 w-64">
    //   <Image src={img} layout="fill" className="rounded-xl" />
    // </div>
    //   <h3 className="mt-3 text-xl">{title}</h3>
    // </div>
    <section className="relative cursor-pointer py-16">
      <div className="relative h-96 min-w-[300px]">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>

      <div className="absolute top-32 left-12">
        <h3 className="mb-3 w-64 text-4xl font-bold">{title}</h3>
        <p>{description}</p>
        <button className="mt-5 rounded-lg bg-gray-900 px-4 py-2 text-sm text-white shadow-md">
          {buttonText}
        </button>
      </div>
    </section>
  );
}

export default LargeCard;
