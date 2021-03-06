import NotFound from "../components/NotFound/NotFound";
import Education from "../components/Education/Education";
import Dobro from "../components/Dobro/Dobro";
import Login from "../components/auth/Login/Login";
import Signup from "../components/auth/Signup/Signup";
import {ItemDetail} from "../components/ItemDetail/ItemDetail";
import {AboutUs} from "../components/AboutUs/AboutUs";
import ContactUs from "../components/ContactUs/ContactUs";
import {Faq} from "../components/Faq/Faq";
import Profile from "../components/Profile/Profile";
import Reading from "../components/Reading/reading";

export const routes = [
    {path: '/notfound', component: NotFound, exact: true},
    {path: '/edu', component: Education, exact: true},
    {path: '/dobro', component: Dobro, exact: true},
    {path: '/dobro/:id', component: ItemDetail, exact: true},
    {path: '/login', component: Login},
    {path: '/signup', component: Signup},
    {path: '/about', component: AboutUs},
    {path: '/contact', component: ContactUs},
    {path: '/faq', component: Faq},
    {path: '/profile', component: Profile},
    {path: '/reading/:id', component: Reading}
]
