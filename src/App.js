import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./pages/auth/signUp";
import SignIn from "./pages/auth/signIn";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/Authentication/signup" element={<SignUp />} />
          <Route path="/Authentication/signin" element={<SignIn />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
