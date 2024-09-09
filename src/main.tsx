import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes.tsx";
import { ThemeProvider } from "./components/ThemeProvider.tsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import store from "./redux/store.ts";
//Dark mode
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ToastContainer />
        </QueryClientProvider>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
