import React from "react";

function Footer() {
  return (
    <div className="grid grid-cols-2 place-content-between gap-y-10 bg-gray-100 px-32 py-14 text-gray-600 md:grid-cols-4">
      <div className="space-y-4 text-sm text-gray-800">
        <h5 className="font-bold uppercase">About</h5>
        <p>How Airbnb Works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
      </div>

      <div className="hidden space-y-4 text-sm text-gray-800 md:inline">
        <h5 className="font-bold uppercase">Community</h5>
        <p>Accessibility</p>
        <p>This is not a real site</p>
        <p>It&apos;s a pretty awesome clone</p>
        <p>Referrals accepted</p>
        <p>Coding Fam</p>
      </div>

      <div className="hidden space-y-4 text-sm text-gray-800 md:inline">
        <h5 className="font-bold uppercase">Host</h5>
        <p>Gan Tu</p>
        <p>Presents</p>
        <p>Cool Full Stack Websites</p>
        <p>Beautiful Frontend</p>
        <p>Give me a shout out</p>
      </div>

      <div className="space-y-4 text-sm text-gray-800">
        <h5 className="font-bold uppercase">Support</h5>
        <p>Help Center</p>
        <p>Trust &amp; Safety</p>
        <p>Say Hi YouTube</p>
        <p>Easter Eggs</p>
        <p>For the Win</p>
      </div>
    </div>
  );
}

export default Footer;
