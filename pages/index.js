import Head from "next/head";
import Header from "../components/Header";
import HeroImage from "../components/HeroImage";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Airbnb UI Clone</title>
        <meta name="description" content="Airbnb UI Clone created by Gan" />
      </Head>
      <Header />
      <HeroImage />
    </div>
  );
}
