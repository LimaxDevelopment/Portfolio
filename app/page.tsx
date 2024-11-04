import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="w-screen min-h-screen bg-black">
      <NavBar />
      <div className="mt-20">
        <HomePage />
        <Footer />
      </div>
    </div>
  );
}
