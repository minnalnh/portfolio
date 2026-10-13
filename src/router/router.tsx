import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import ErrorPage from "../pageSections/ErrorPage";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          lazy: async () => {
            const { default: About } = await import("../pageSections/About");
            return {
              Component: About,
            };
          },
        },
      ],
    },
  ],
  {
    basename: "/portfolio",
  },
);
