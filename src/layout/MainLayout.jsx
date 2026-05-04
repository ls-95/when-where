import "./MainLayout.css"
import Header from "../components/Header.jsx";
import ScoreRoundBanner from "../components/ScoreRoundBanner.jsx"
import Footer from "../components/Footer.jsx";

function MainLayout({children}){
    return(
        <div className="layout">
            <Header/>  
            <div className="banner">
                  <ScoreRoundBanner/>
            </div>
            <div className="gamearea">
               {children}
            </div>
            <Footer/>
        
        </div>

    );
}

export default MainLayout;