import { Outlet } from "react-router-dom";
import { lazy, Suspense } from "react";
import Header from "../pageSections/Header";
import Thesis from "../pageSections/Thesis";
import Experience from "../pageSections/Experience";
import Languages from "../pageSections/Languages";
import Footer from "../pageSections/Footer";

const Gallery = lazy(() => import("../pageSections/Gallery"));

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
      <Suspense fallback={<div>Laddar galleri...</div>}>
        <Gallery />
      </Suspense>
      <Footer />
    </div>
  );
};

export default Layout;
