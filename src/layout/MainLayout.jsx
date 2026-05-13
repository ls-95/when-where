import "./MainLayout.css";
import Header from "../components/Header.jsx";
import ScoreRoundBanner from "../components/ScoreRoundBanner.jsx";
import RoundResults from "../components/RoundResults.jsx";

function MainLayout({ children, index, totalScore }) {
  return (
    <div className="layout">
      <div className="banner">
        <Header />
        <RoundResults index={index} />
        <ScoreRoundBanner index={index} totalScore={totalScore} />
      </div>
      <div className="gamearea">{children}</div>
    </div>
  );
}

export default MainLayout;
