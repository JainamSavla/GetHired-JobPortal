import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import LandingPage from "./pages/LandingPage";
import Onboarding from "./pages/Onboarding";
import JobPage from "./pages/JobPage";
import JobListing from "./pages/JobListing";
import PostJobs from "./pages/PostJobs";
import SavedJobs from "./pages/SavedJobs";
import MyJobs from "./pages/MyJobs";
import "./App.css";
import { ThemeProvider } from "./components/ui/theme-provider";
import ProtectedRoute from "./components/ProtectedRoute";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/onboarding",
        element: (
          <ProtectedRoute>
            <Onboarding />
          </ProtectedRoute>
        ),
      },
      {
        path: "/joblisting",
        element: (
          <ProtectedRoute>
            <JobListing />
          </ProtectedRoute>
        ),
      },
      {
        path: "/postjobs",
        element: (
          <ProtectedRoute>
            <PostJobs />
          </ProtectedRoute>
        ),
      },
      {
        path: "/myjobs",
        element: (
          <ProtectedRoute>
            <MyJobs />
          </ProtectedRoute>
        ),
      },
      {
        path: "/savedjobs",
        element: (
          <ProtectedRoute>
            <SavedJobs />
          </ProtectedRoute>
        ),
      },
      {
        path: "/jobpage/:id",
        element: (
          <ProtectedRoute>
            <JobPage />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
