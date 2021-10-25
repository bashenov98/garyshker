import React, {useState} from "react";
import {BrowserRouter} from "react-router-dom";
import {AuthContext} from "./context";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {Sidebar} from "./components/Sidebar/Sidebar";
import Router from "./components/Router";

function App() {
    const [isAuth, setIsAuth] = useState(false);
    const [isAuthPage, setIsAuthPage] = useState(false);
    const [is404Page, setIs404Page] = useState(false);
    const [token, setToken] = useState('');

    return (
        <div style={{backgroundColor: '#0C0B15'}}>
            <BrowserRouter>
                <AuthContext.Provider value={{
                    isAuth,
                    setIsAuth,
                    isAuthPage,
                    setIsAuthPage,
                    is404Page,
                    setIs404Page,
                    token,
                    setToken
                }}>
                    {!isAuthPage && !is404Page && <Header/>}
                    <div className="main d-flex">
                        {!isAuthPage && !is404Page && <Sidebar/>}
                        <div className="d-flex flex-column main-right">
                            <Router/>
                        </div>
                    </div>
                    {!is404Page && <Footer/>}
                </AuthContext.Provider>
            </BrowserRouter>
        </div>
    );
}

export default App;
