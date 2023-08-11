import Footer from "@/components/Footer";
import Layout from "@/components/Layout";
import NavBar from "@/components/NavBar";
import "@/styles/globals.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mont",
});

export default function App({ Component, pageProps }) {
  return (
    <main
      className={`${montserrat.variable} font-mont bg-light w-full h-screen min-h-full flex-col`}
    >
      {/* <Layout> */}
        {/* <NavBar /> */}
        <Component {...pageProps} />
        {/* <Footer className="mt-auto" /> */}
      {/* </Layout> */}
    </main>
  );
}
