import Head from "next/head";
import Header from "../components/Header";
import HeroImage from "../components/HeroImage";
import SmallCard from "../components/SmallCard";

export default function Home({ exploreData }) {
  return (
    <div className="">
      <Head>
        <title>Airbnb UI Clone</title>
        <meta name="description" content="Airbnb UI Clone created by Gan" />
      </Head>
      <Header />
      <HeroImage />

      <main className="mx-auto max-w-7xl px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="pb-5 text-3xl font-semibold">Explore Nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {exploreData?.map(({ location, img, distance }) => (
              <SmallCard
                key={location}
                img={img}
                title={location}
                subtitle={distance}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      exploreData: [
        {
          img: "https://links.papareact.com/5j2",
          location: "London",
          distance: "45-minute drive"
        },
        {
          img: "https://links.papareact.com/1to",
          location: "Manchester",
          distance: "4.5-hour drive"
        },
        {
          img: "https://links.papareact.com/40m",
          location: "Liverpool",
          distance: "4.5-hour drive"
        },
        {
          img: "https://links.papareact.com/msp",
          location: "York",
          distance: "4-hour drive"
        },
        {
          img: "https://links.papareact.com/2k3",
          location: "Cardiff",
          distance: "45-minute drive"
        },
        {
          img: "https://links.papareact.com/ynx",
          location: "Birkenhead",
          distance: "4.5-hour drive"
        },
        {
          img: "https://links.papareact.com/kji",
          location: "Newquay",
          distance: "6-hour drive"
        },
        {
          img: "https://links.papareact.com/41m",
          location: "Hove",
          distance: "2-hour drive"
        }
      ]
    }
  };
}
