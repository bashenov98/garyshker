import NotFound from "../components/NotFound/NotFound";
import Education from "../components/Education/Education";
import Dobro from "../components/Dobro/Dobro";
import DobroDetail from "../components/Dobro/DobroDetail";
import Login from "../components/auth/Login/Login";
import Signup from "../components/auth/Signup/Signup";
import {ItemDetail} from "../components/ItemDetail/ItemDetail";
import {AboutUs} from "../components/AboutUs/AboutUs";

export const routes = [
    {path: '/notfound', component: NotFound, exact: true},
    {path: '/edu', component: Education, exact: true},
    {path: '/dobro', component: Dobro, exact: true},
    {path: '/dobro/:id', component: DobroDetail, exact: true},
    {path: '/login', component: Login},
    {path: '/signup', component: Signup},
    {path: '/item-detail', component: ItemDetail},
    {path: '/about', component: AboutUs}
]
