import Image from "next/image";
import React, { useState } from "react";
import { HeartIcon as HeartIconOutline } from "@heroicons/react/outline";
import { StarIcon, HeartIcon } from "@heroicons/react/solid";

function InfoCard({ item }) {
  const [isLiked, setIsLiked] = useState(false);
  return (
    <div className="flex cursor-pointer border-b py-7 px-4 transition duration-200 ease-out first:border-t hover:opacity-80 hover:shadow-lg">
      <div className="relative h-24 w-40 flex-shrink-0 p-1 md:h-52 md:w-80">
        <Image
          src={item.img}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>

      <div className="flex flex-grow flex-col pl-5">
        <div className="flex justify-between">
          <p className="text-sm text-gray-500">{item.location}</p>
          <button
            className="cursor-pointer"
            onClick={() => setIsLiked(!isLiked)}
          >
            {isLiked ? (
              <HeartIcon className="h-7 cursor-pointer border-none text-airbnb" />
            ) : (
              <HeartIconOutline className="h-7 cursor-pointer" />
            )}
          </button>
        </div>

        <h4 className="text-xl font-semibold">{item.title}</h4>

        <div className="w-10 border-b pt-2"></div>

        <p className="flex-grow pt-2 pb-4 text-sm text-gray-500">
          {item.description}
        </p>

        <div className="flex items-end justify-between">
          <p className="flex items-center text-sm">
            <StarIcon className="h-5 text-airbnb" />
            {item.star}
          </p>
          <div>
            <p className="pb-2 text-lg font-semibold lg:text-2xl">
              ${item.price} / night
            </p>
            <p className="text-right font-extralight">${item.total} total</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
