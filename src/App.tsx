import Header from "./pageSections/Header";
import About from "./pageSections/About";
import Thesis from "./pageSections/Thesis";
import Experience from "./pageSections/Experience";
import Languages from "./pageSections/Languages";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";

function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

/*
    <>
      <Header />
      <About />
      <Thesis />
      <Experience />
      <Languages />
    </>
*/
