import "@/styles/globals.css";
import { Montserrat } from "next/font/google";
import NavBar from "@/components/NavBar"; //"../../src/components/NavBar"
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mont",
});

export default function App({ Component, pageProps }) {
  return (
    <main
      className={`${montserrat.variable} font-mont bg-light w-[100vm] h-screen min-h-full flex-col`}
    >
      <div>
        <NavBar />
        <Component {...pageProps} />
        <Footer />
      </div>
    </main>
  );
}
