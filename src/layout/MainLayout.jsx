import "./MainLayout.css";
import Header from "../components/Header.jsx";
import ScoreRoundBanner from "../components/ScoreRoundBanner.jsx";
import Footer from "../components/Footer.jsx";

function MainLayout({ children, index }) {
  return (
    <div className="layout">
      <Header />
      <div className="banner">
        <ScoreRoundBanner index={index} />
      </div>
      <div className="gamearea">{children}</div>
      <Footer />
    </div>
  );
}

export default MainLayout;
