import Banner from "./components/Banner";
import Footer from "./components/footer/Footer";
import Services from "./components/services/Services";
import Testmonials from "./components/testmonials/Testmonials";

export default function Home() {
  return (
    <div className="flex-1 flex bg-white font-sans">
      <main className="flex-1 w-full bg-white  sm:items-start">
        <Banner />
        <Services />
        <Testmonials />
        <Footer />
      </main>
    </div>
  );
}
