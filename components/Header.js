import React from "react";
import Image from "next/image";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon
} from "@heroicons/react/solid";

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
          className="grow border-transparent bg-transparent pl-5 text-sm text-gray-500 outline-none placeholder:text-gray-400"
        />
        <SearchIcon className="hidden h-8 cursor-pointer rounded-full bg-red-400 p-2 text-white md:mx-2 md:inline-flex" />
      </div>

      <div className="flex items-center justify-end space-x-2 text-gray-700">
        <p className=" hidden cursor-pointer rounded-full py-2 px-4 text-sm font-semibold hover:bg-gray-100 lg:inline">
          Become a host
        </p>
        <GlobeAltIcon className="h-9 cursor-pointer rounded-full p-2 hover:bg-gray-100" />

        <div className="flex cursor-pointer items-center space-x-2 rounded-full border p-2 hover:shadow-md">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
    </header>
  );
}

export default Header;
