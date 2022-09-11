import Head from "next/head";
import Header from "../components/Header";
import HeroImage from "../components/HeroImage";
import SmallCard from "../components/SmallCard";
import MediumCard from "../components/MediumCard";
import LargeCard from "../components/LargeCard";

export default function Home({ exploreData, liveAnywhereData }) {
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
          <div className="grid grid-cols-2 place-content-between md:grid-cols-3 lg:grid-cols-4">
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

        <section className="">
          <h2 className="py-8 text-3xl font-semibold">Live Anywhere</h2>
          <div className="-ml-3 flex place-content-between space-x-3 overflow-scroll p-3 scrollbar-hide">
            {liveAnywhereData?.map(({ title, img }) => (
              <MediumCard key={img} img={img} title={title} />
            ))}
          </div>
        </section>

        <LargeCard
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          description="Wishlists curated by Airbnb."
          buttonText="Get Inspired"
        />
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
      ],
      liveAnywhereData: [
        {
          img: "https://links.papareact.com/2io",
          title: "Outdoor getaways"
        },
        {
          img: "https://links.papareact.com/q7j",
          title: "Unique stays"
        },
        {
          img: "https://links.papareact.com/s03",
          title: "Entire homes"
        },
        {
          img: "https://links.papareact.com/8ix",
          title: "Pet allowed"
        }
      ]
    }
  };
}
