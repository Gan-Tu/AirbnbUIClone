import React from "react";

function TopBanner() {
  return (
    <div
      role="note"
      aria-label="Parody and trademark disclaimer"
      className="fixed inset-x-0 top-0 z-[60] flex items-center justify-center border-b border-yellow-300 bg-yellow-100 px-3 py-2 text-center text-xs text-yellow-900 md:text-sm"
    >
      <div className="mx-auto max-w-6xl">
        This is a demo site created for educational frontend development
        purposes only, and NOT intended for actual use. All forms are UI only
        and non-functional. <br />
        It is not affiliated with Airbnb. &ldquo;Airbnb&rdquo; and related marks are
        registered trademarks of Airbnb, Inc.{" "}
        <a
          href="https://github.com/Gan-Tu/AirbnbUIClone"
          className="underline hover:text-yellow-700"
          target="_blank"
          rel="noopener noreferrer"
        >
          See GitHub Code
        </a>
      </div>
    </div>
  );
}

export default TopBanner;
