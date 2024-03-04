import React, { useContext } from "react";
import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Signup from "./Pages/signup.js";
import Login from "./Pages/login.js";

import Home from "./Pages/home.js";
import { AuthContext } from "./context/authContext.js";

function App() {
  const { user } = useContext(AuthContext);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />
        <Route
          path="/login"
          element={!user ? <Login /> : <Navigate to="/" />}
        />
        <Route
          path="/signup"
          element={!user ? <Signup /> : <Navigate to="/" />}
        />
      </Routes>
    </div>
  );
}

export default App;
