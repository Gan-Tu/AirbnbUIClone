import React from "react";
import Image from "next/image";
import { SearchIcon } from "@heroicons/react/solid";

function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 items-center bg-white p-5 shadow-md md:px-10">
      <div className="relative my-auto flex h-10 cursor-pointer items-center">
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
          alt="Airbnb logo"
        />
      </div>

      <div className="flex cursor-pointer items-center rounded-full border py-2 md:border-2 md:shadow-sm md:hover:shadow-md">
        <input
          type="text"
          placeholder="Start your search"
          className="grow bg-transparent pl-5 text-sm text-gray-500 outline-none placeholder:text-gray-400"
        />
        <SearchIcon className="hidden h-8 cursor-pointer rounded-full bg-red-400 p-2 text-white md:mx-2 md:inline-flex" />
      </div>

      <div className="text-center">Become a host</div>
    </header>
  );
}

export default Header;
