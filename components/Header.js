import React, { useState } from "react";
import Image from "next/image";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon
} from "@heroicons/react/solid";
import { PlusCircleIcon, MinusCircleIcon } from "@heroicons/react/outline";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

function Header({ placeholder }) {
  const router = useRouter();
  const [searchInput, setSearchInput] = useState("");
  const [numberOfGuests, setNumberOfGuests] = useState(2);
  const [selectionRange, setSelectionRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection"
  });
  const resetInput = () => {
    setSearchInput("");
    setNumberOfGuests(2);
    setSelectionRange({
      startDate: new Date(),
      endDate: new Date(),
      key: "selection"
    });
  };

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 items-center bg-white p-5 shadow-md md:px-10 ">
      <div className="relative my-auto flex h-10 cursor-pointer items-center">
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
          alt="Airbnb logo"
          onClick={() => router.push("/")}
        />
      </div>

      <div className="flex cursor-pointer items-center rounded-full border py-2 md:border-2 md:shadow-sm md:hover:shadow-md">
        <input
          type="text"
          placeholder={placeholder || "Start your search"}
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="grow border-transparent bg-transparent pl-5 text-sm text-gray-500 outline-none placeholder:text-gray-400"
        />
        <SearchIcon className="hidden h-8 cursor-pointer rounded-full bg-airbnb  p-2 text-white md:mx-2 md:inline-flex" />
      </div>

      <div className="flex items-center justify-end space-x-2 text-gray-700">
        <p className="hidden cursor-pointer rounded-full py-2 px-4 text-sm font-semibold hover:bg-gray-100 lg:inline">
          Become a host
        </p>
        <GlobeAltIcon className="h-9 cursor-pointer rounded-full p-2 hover:bg-gray-100" />

        <div className="flex cursor-pointer items-center space-x-2 rounded-full border p-2 hover:shadow-md">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>

      <AnimatePresence>
        {searchInput && (
          <motion.div
            layout
            className="col-span-3 mx-auto mt-3 flex flex-col p-3"
            transition={{ duration: 0.2 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="mb-4 flex items-center border-b pb-2">
              <h2 className="flex-grow pl-4 text-lg font-semibold">
                Number of Guests
              </h2>
              <UsersIcon className="h-5 px-4" />
              <button
                onClick={() =>
                  setNumberOfGuests(Math.max(1, numberOfGuests - 1))
                }
                disabled={numberOfGuests <= 1}
                className="disabled:opacity-40"
              >
                <MinusCircleIcon className="h-5 px-4" />
              </button>
              <p className="w-5 text-center text-base font-light text-gray-700">
                {numberOfGuests}
              </p>
              <button
                onClick={() =>
                  setNumberOfGuests(Math.min(99, numberOfGuests + 1))
                }
                disabled={numberOfGuests >= 99}
                className="disabled:opacity-40"
              >
                <PlusCircleIcon className="h-5 px-4" />
              </button>
            </div>
            <DateRangePicker
              className="text-base font-normal"
              ranges={[selectionRange]}
              minDate={new Date()}
              onChange={({ selection }) => setSelectionRange(selection)}
              rangeColors={["#FD5B61"]}
            />
            <div className="font-base flex space-x-8 pt-2 text-sm">
              <button
                className="flex-grow rounded-xl bg-gray-100 py-3 text-gray-700 shadow-sm hover:shadow-md"
                onClick={resetInput}
              >
                Cancel
              </button>
              <button
                className="flex-grow rounded-xl bg-airbnb py-3 text-white shadow-sm hover:shadow-md"
                onClick={() =>
                  router.push({
                    pathname: "/search",
                    query: {
                      location: searchInput,
                      startDate: selectionRange.startDate.toISOString(),
                      endDate: selectionRange.endDate.toISOString(),
                      numberOfGuests
                    }
                  })
                }
              >
                <div className="flex place-content-center items-center">
                  <SearchIcon className="mr-1 h-4" />
                  Search
                </div>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
