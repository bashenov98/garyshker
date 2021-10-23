import React, {useContext} from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import {AuthContext} from "../context";
import {routes} from "../utils/routes";

const Router = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);

    return (
        <div className="w-100">
            {isAuth
                ?
                <Switch>
                    {routes.map(route =>
                        <Route
                            component={route.component}
                            path={route.path}
                            exact={route.exact}
                            key={route.path}
                        />
                    )}
                    <Redirect to='/edu'/>
                </Switch>
                :
                <Switch>
                    {routes.map(route =>
                        <Route
                            component={route.component}
                            path={route.path}
                            exact={route.exact}
                            key={route.path}
                        />
                    )}
                    <Redirect to='/edu'/>
                </Switch>
            }
        </div>
    );
};

export default Router;
