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
      <Suspense
        fallback={
          <div className="loading">
            <p>
              <span class="loader"></span> Loading...
            </p>
          </div>
        }
      >
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
