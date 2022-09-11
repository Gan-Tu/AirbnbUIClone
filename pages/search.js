import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Search({ exploreData, liveAnywhereData }) {
  return (
    <div className="hscreen">
      <Head>
        <title>Search Results - Airbnb UI Clone</title>
        <meta name="description" content="Airbnb UI Clone created by Gan" />
      </Head>
      <Header />

      <main>
        <seciton>
          {/* Make this same as search bar */}
          <p className="text-sm">300+ Stays for 5 number of guests.</p>
          <h1 className="mt-2 mb-6 text-3xl font-semibold">
            Stays in New York
          </h1>

          <div className="mb-5 hidden space-x-3 whitespace-nowrap text-gray-800 lg:inline-flex">
            <p className="filter-button transparent-selection">
              Cancellation Flexibility
            </p>
            <p className="filter-button transparent-selection">Type of place</p>
            <p className="filter-button transparent-selection">Price</p>
            <p className="filter-button transparent-selection">
              Rooms and Beds
            </p>
            <p className="filter-button transparent-selection">More Filters</p>
          </div>
        </seciton>
      </main>

      <Footer />
    </div>
  );
}
