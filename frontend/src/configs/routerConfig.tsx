import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ShopPage from "../pages/ShopPage";
import ContactPage from "../pages/ContactPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/shop",
        element: <ShopPage />,
    },
    {
        path: "/contacts",
        element: <ContactPage />,
    },
]);