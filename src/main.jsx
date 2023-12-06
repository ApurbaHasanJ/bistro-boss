import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/GRoutes";
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from "./Providers/AuthProvider";

// tan stack query
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <QueryClientProvider  client={queryClient}>
        <RouterProvider router={router} />
        </QueryClientProvider>
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>
);
