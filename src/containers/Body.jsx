import React, { lazy, Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
const Login = lazy(() => import("./Login"));
const Browse = lazy(() => import("./Browse"));

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: (
        <Suspense fallback={<h1>Loading...</h1>}>
          <Login />
        </Suspense>
      ),
    },
    {
      path: "/browse",
      element: (
        <Suspense fallback={<h1>Loading...</h1>}>
          <Browse />
        </Suspense>
      ),
    },
  ]);

  return (
    <div className="border-box m-0 p-0">
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
