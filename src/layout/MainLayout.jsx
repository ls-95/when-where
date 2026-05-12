import "./MainLayout.css";
import Header from "../components/Header.jsx";
import ScoreRoundBanner from "../components/ScoreRoundBanner.jsx";

function MainLayout({ children, index, totalScore }) {
  return (
    <div className="layout">
      <div className="banner">
        <Header />
        <ScoreRoundBanner index={index} totalScore={totalScore} />
      </div>
      <div className="gamearea">{children}</div>
    </div>
  );
}

export default MainLayout;
