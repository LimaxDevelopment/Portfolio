import NavBar from "../components/NavBar";
import ProjectsPage from "../components/ProjectsPage";
import Footer from "../components/Footer";

const Projects = () => {
  return (
    <div className="w-full min-h-screen bg-black">
      <NavBar />
      <div className="mt-20">
        <ProjectsPage />
        <Footer />
      </div>
    </div>
  );
};

export default Projects;
