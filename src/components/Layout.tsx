import { Outlet } from "react-router-dom";
import Header from "../pageSections/Header";
import About from "../pageSections/About";
import Thesis from "../pageSections/Thesis";
import Experience from "../pageSections/Experience";
import Languages from "../pageSections/Languages";
import Gallery from "../pageSections/Gallery";
import Footer from "../pageSections/Footer";

const Layout = () => {
  return (
    <div className="wrapper mx-[1rem]">
      <Header />
      <main className="page">
        <Outlet />
      </main>
      <Thesis />
      <Experience />
      <Languages />
      <Gallery />
      <Footer />
    </div>
  );
};

export default Layout;
