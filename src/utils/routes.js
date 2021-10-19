import NotFound from "../components/NotFound/NotFound";
import Education from "../components/Education/Education";
import Dobro from "../components/Dobro/Dobro";
import DobroItem from "../components/Dobro/DobroItem";
import Login from "../components/auth/Login/Login";
import Signup from "../components/auth/Signup/Signup";

export const routes = [
    {path: '/notfound', component: NotFound, exact: true},
    {path: '/edu', component: Education, exact: true},
    {path: '/dobro', component: Dobro, exact: true},
    {path: '/dobro/:id', component: DobroItem, exact: true},
    {path: '/login', component: Login},
    {path: '/signup', component: Signup}
]
