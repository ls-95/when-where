import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";

const LoginPage = lazy(() => import("./pages/Loginpage"));
const RegisterPage = lazy(() => import("./pages/Registerpage"));
const Home = lazy(() => import("./pages/Home"));
const GameScreen = lazy(() => import("./pages/GameScreen"));
const FinalScore = lazy(() => import("./pages/FinalScore"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/game" element={<GameScreen />} />
          <Route path="/score" element={<FinalScore />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;

// import "./App.css";
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// import LoginPage from "./pages/Loginpage";
// import RegisterPage from "./pages/Registerpage";
// import Home from "./pages/Home";
// import GameScreen from "./pages/GameScreen";
// import FinalScore from "./pages/FinalScore";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Navigate to="/login" />} />
//         <Route path="/login" element={<LoginPage />} />
//         <Route path="/register" element={<RegisterPage />} />
//         <Route path="/home" element={<Home />} />
//         <Route path="/game" element={<GameScreen />} />
//         <Route path="/score" element={<FinalScore />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
