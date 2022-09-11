import React from "react";
import Image from "next/image";

function MediumCard({ img, title }) {
  return (
    <div className="transform cursor-pointer transition duration-300 ease-out hover:scale-105">
      <div className="relative h-64 w-64">
        <Image src={img} layout="fill" className="rounded-xl" />
      </div>
      <h3 className="mt-3 text-xl">{title}</h3>
    </div>
  );
}

export default MediumCard;