import NavBar from "../components/NavBar";
import AboutPage from "../components/AboutPage";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="w-full min-h-screen bg-black">
      <NavBar />
      <div className="mt-20">
        <AboutPage />
        <Footer />
      </div>
    </div>
  );
};

export default About;
