import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { DataProvider } from "../../GlobalState";
import Header from "../../components/Headers/header";
import MainPages from "../../components/MainPages/Pages.js";

import AuthPage from "../AuthPage/AuthPage";
import { getUser } from "../../components/MainPages/utilities/users-service";

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <DataProvider>
      {user ? (
        <>
          <Router>
            <div className="App">
              <Header />
              <MainPages />
            </div>
          </Router>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </DataProvider>
  );
}
