import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import { format as formatDate } from "date-fns";
import { getSearchResultsData } from "../utils/fakeData";
import InfoCard from "../components/InfoCard";

export default function Search({ searchResultsData }) {
  const router = useRouter();
  const { numberOfGuests, location, startDate, endDate } = router.query;

  const formattedStartDate = formatDate(new Date(startDate), "dd MMMM yy");
  const formattedEndDate = formatDate(new Date(endDate), "dd MMMM yy");
  const formattedDateRange =
    formattedStartDate == formattedEndDate
      ? formattedStartDate
      : `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <div className="hscreen">
      <Head>
        <title>Search Results - Airbnb UI Clone</title>
        <meta name="description" content="Airbnb UI Clone created by Gan" />
      </Head>

      <Header
        placeholder={`${location} | ${formattedDateRange} | ${
          numberOfGuests || 2
        } Guests`}
      />

      <main className="flex">
        <seciton className="flex-grow px-6 pt-6">
          <p className="text-sm">
            300+ Stays - {formattedDateRange} - for {numberOfGuests || 2} Guests
          </p>
          <h1 className="mt-2 mb-6 text-3xl font-semibold">
            Stays in {location || "somewhere awesome"}
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

          <div className="flex flex-col">
            {searchResultsData.map((item) => (
              <InfoCard key={item.title} item={item} />
            ))}
          </div>
        </seciton>
      </main>

      <Footer />
    </div>
  );
}

export async function getServerSideProps() {
  return {
    props: {
      searchResultsData: getSearchResultsData()
    }
  };
}
