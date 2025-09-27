import "../styles/globals.css";
import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";
import TopBanner from "../components/TopBanner";

const progress = new ProgressBar({
  size: 4,
  color: "#FD5B61",
  className: "z-50",
  delay: 100
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

function MyApp({ Component, pageProps }) {
  return (
    <>
      <TopBanner />
      <div className="pt-16 md:pt-12">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
