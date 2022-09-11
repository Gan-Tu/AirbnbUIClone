import Head from "next/head";
import Header from "../components/Header";
import HeroImage from "../components/HeroImage";
import SmallCard from "../components/SmallCard";
import MediumCard from "../components/MediumCard";
import LargeCard from "../components/LargeCard";
import Footer from "../components/Footer";
import { getExploreData, getLiveAnywhereData } from "../utils/fakeData";
import { useRouter } from "next/router";

export default function Home({ exploreData, liveAnywhereData }) {
  const router = useRouter();
  const searchLocation = (location) => {
    var today = new Date();
    var nextweek = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() + 7
    );
    router.push({
      pathname: "/search",
      query: {
        location,
        startDate: today.toISOString(),
        endDate: nextweek.toISOString(),
        numberOfGuests: 2
      }
    });
  };

  return (
    <div className="">
      <Head>
        <title>Airbnb UI Clone</title>
        <meta name="description" content="Airbnb UI Clone created by Gan" />
      </Head>

      <Header />
      <HeroImage />

      <main className="mx-auto max-w-7xl px-8 sm:px-16">
        {exploreData.length > 0 && (
          <section className="pt-6">
            <h2 className="pb-5 text-3xl font-semibold">Explore Nearby</h2>
            <div className="grid grid-cols-2 place-content-between md:grid-cols-3 lg:grid-cols-4">
              {exploreData?.map(({ location, img, distance }) => (
                <SmallCard
                  key={location}
                  img={img}
                  title={location}
                  subtitle={distance}
                  onClick={() => searchLocation(location)}
                />
              ))}
            </div>
          </section>
        )}

        {liveAnywhereData.length > 0 && (
          <section className="">
            <h2 className="py-8 text-3xl font-semibold">Live Anywhere</h2>
            <div className="-ml-3 flex place-content-between space-x-3 overflow-scroll p-3 scrollbar-hide">
              {liveAnywhereData?.map(({ title, img }) => (
                <MediumCard key={img} img={img} title={title} />
              ))}
            </div>
          </section>
        )}

        <LargeCard
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          description="Wishlists curated by Airbnb."
          buttonText="Get Inspired"
        />
      </main>

      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      exploreData: getExploreData(),
      liveAnywhereData: getLiveAnywhereData()
    }
  };
}
