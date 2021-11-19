import React, { useState } from "react";
import classnames from 'classnames';
import { BrowserRouter } from "react-router-dom";
import { AuthContext } from "./context";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Sidebar } from "./components/Sidebar/Sidebar";
import Router from "./components/Router";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isAuthPage, setIsAuthPage] = useState(false);
  const [hideSidebar, setHideSidebar] = useState(false);
  const [is404Page, setIs404Page] = useState(false);
  const [token, setToken] = useState("");

  return (
    <div style={{ backgroundColor: "#0C0B15" }}>
      <BrowserRouter>
        <AuthContext.Provider
          value={{
            isAuth,
            setIsAuth,
            isAuthPage,
            setIsAuthPage,
            is404Page,
            setIs404Page,
            token,
            setToken,
            setHideSidebar,
          }}
        >
          {!isAuthPage && !is404Page && <Header />}
          <div className={classnames("main d-flex", isAuthPage && "justify-content-center")}>
            {!isAuthPage && !is404Page && !hideSidebar ? (
              <>
                <Sidebar />
                <div className="d-flex flex-column">
                  <Router />
                </div>
              </>
            ) : (
              <div className="d-flex flex-column main-right">
                <Router />
              </div>
            )}
          </div>
          {!is404Page && <Footer />}
        </AuthContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
