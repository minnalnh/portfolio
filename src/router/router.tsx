import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import About from "../pageSections/About";
import ErrorPage from "../pageSections/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/portfolio",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <About />,
      },
    ],
  },
]);
