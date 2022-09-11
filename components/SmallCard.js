import React from "react";
import Image from "next/image";

function SmallCard({ img, title, subtitle, onClick }) {
  return (
    <div
      className="m-2 mt-5 flex transform cursor-pointer items-center space-x-4 rounded-xl transition duration-200 ease-out hover:scale-105 hover:bg-gray-100"
      onClick={onClick}
    >
      <div className="relative h-16 w-16">
        <Image src={img} layout="fill" className="rounded-lg" alt="" />
      </div>
      <div className="text-sm">
        <h2 className="font-semibold">{title}</h2>
        <h3 className="text-gray-500">{subtitle}</h3>
      </div>
    </div>
  );
}

export default SmallCard;
