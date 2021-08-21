import Admin from "./pages/Admin";
import { ADMIN_ROUTE, DEVICE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE, EDIT_ROUTE, ABOUT_ROUTE } from "./utils/consts";
import Shop from "./pages/Shop";
import Auth from "./pages/Auth";
import DevicePage from "./pages/DevicePage";
import EditPage from "./components/EditPage/EditPage"
import AboutUs from "./components/AboutUs";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    }
]

export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: Shop
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: DEVICE_ROUTE + '/:id',
        Component: DevicePage
    },
    {
        path: EDIT_ROUTE + '/:id',
        Component: EditPage
    },
    {
        path: ABOUT_ROUTE,
        Component: AboutUs
    }
]