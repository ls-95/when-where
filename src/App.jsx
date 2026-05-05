import { useState } from "react";
import "./App.css";

import LoginPage from "./pages/Loginpage";
import Home from "./pages/Home";
import GameScreen from "./pages/GameScreen";

import Navbar from "./components/Navbar";

function App() {
  const [currentPage, setCurrentPage] = useState("LoginPage");

  return (
    <>
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {currentPage === "LoginPage" && <LoginPage/>}
      {currentPage === "Home" && <Home/>}
      {currentPage === "GameScreen" && <GameScreen/>}

    </>
  );
}

export default App;
