import React from "react";
import { Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { CartProvider } from "../../Context/CartContext";

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime:60 * 1000,
      staleTime: 0,
      cacheTime: 60 * (60 * 1000),
    },
  },
});

const RootLayout = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <div className="app-container">
          <Outlet />
          <Toaster
            position="top-right"
            gutter={12}
            containerStyle={{
              margin: "8px",
              zIndex: "10000",
            }}
            toastOptions={{
              success: {
                duration: 3000,
              },
              error: {
                duration: 5000,
              },
              style: {
                fontSize: "16px",
                maxWidth: "500px",
                padding: "16px 24px",
                backgroundColor: "#fff",
                color: "var(--color-grey-700)",
                zIndex: "10000",
              },
            }}
          />
        </div>
      </CartProvider>
    </QueryClientProvider>
  );
};

export default RootLayout;
