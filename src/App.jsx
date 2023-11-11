import './App.scss'
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  // Link,
} from "react-router-dom";
import { lazy, Suspense } from "react";

import './index.css'
import Root from './components/Root'
import Main from './components/Main/Main'
// eslint-disable-next-line react-refresh/only-export-components
const About = lazy(() => import('./components/AboutSite/AboutSite'))

const router = createBrowserRouter(
  createRoutesFromElements(

    <Route path="/" element={<Root />}>
      <Route index element={<Main />} />
      <Route path='tech' element={<About />} />
    </Route>
  ),
  // {basename: "/web-resume-app"}
);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <Suspense fallback={
      <h1 className="w-full text-center animate-spin text-9xl mt-60">🌀</h1>
    }>
      {/* // <React.StrictMode> */}
      <RouterProvider router={router} />
      {/* // </React.StrictMode> */}
    </Suspense>
  </QueryClientProvider>
);
