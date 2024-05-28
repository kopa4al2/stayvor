import { Outlet, createBrowserRouter } from "react-router-dom";
import HeaderLayout from "../components/layout/Header";
import ContactPage from "../pages/ContactPage";
import HomePage from "../pages/HomePage";
import ShopPage from "../pages/ShopPage";

const HeaderNavigation = () => (
  <HeaderLayout>
    <Outlet />
  </HeaderLayout>
);

export const router = createBrowserRouter([
  {
    element: <HeaderNavigation />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/shop",
        element: <ShopPage />,
      },
      {
        path: "/contacts",
        element: <ContactPage />,
      },
    ],
  },
]);
