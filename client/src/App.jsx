import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { userLoader, adminLoader } from "./utils/RouterLoader";
import Loader from "./ui/Loader";
// Layouts
const RootLayout = lazy(() => import("./ui/Layouts/RootLayout"));
const AuthLayout = lazy(() => import("./ui/Layouts/AuthLayout"));
const UserLayout = lazy(() => import("./ui/Layouts/UserLayout"));
const AdminLayout = lazy(() => import("./ui/Layouts/AdminLayout"));

// Pages
const LandingPage = lazy(() => import("./ui/LandingPage"));
const Error = lazy(() => import("./ui/Error"));

// Authentication
const Signup = lazy(() => import("./features/Authentication/Signup"));
const Login = lazy(() => import("./features/Authentication/Login"));
const AdminLogin = lazy(() => import("./features/Authentication/AdminLogin"));

// User features
const UserHomePage = lazy(() => import("./features/User/UserHomePage"));
const BookDescription = lazy(() => import("./features/User/BookDescription"));
const CartList = lazy(() => import("./features/User/CartList"));

// Admin features
const AdminHomePage = lazy(() => import("./features/Admin/AdminHomePage"));
const AddBook = lazy(() => import("./features/Admin/AddBook"));
const UpdateBook = lazy(() => import("./features/Admin/UpdateBook"));
const CheckoutTable = lazy(() => import("./features/Admin/CheckoutTable"));

const router = createBrowserRouter([
  {
    element: (
      <Suspense fallback={<Loader />}>
        <RootLayout />
      </Suspense>
    ),
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        element: <AuthLayout />,
        children: [
          {
            path: "login",
            element: <Login />,
          },
          {
            path: "signup",
            element: <Signup />,
          },
          {
            path: "admin_login",
            element: <AdminLogin />,
          },
        ],
      },
      {
        element: <UserLayout />,
        loader: userLoader,
        children: [
          {
            path: "/user/home",
            element: <UserHomePage />,
          },
          {
            path: "/user/book_description",
            element: <BookDescription />,
          },
          {
            path: "/user/cart",
            element: <CartList />,
          },
        ],
      },
      {
        element: <AdminLayout />,
        loader: adminLoader,
        children: [
          {
            path: "admin/home",
            element: <AdminHomePage />,
          },
          {
            path: "admin/add_books",
            element: <AddBook />,
          },
          {
            path: "admin/update_books/",
            element: <UpdateBook />,
          },
          {
            path: "/admin/book_description",
            element: <BookDescription isAdmin={true} />,
          },
          {
            path: "/admin/payment_history",
            element: <CheckoutTable />,
          },
        ],
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
