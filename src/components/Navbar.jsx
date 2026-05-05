import "./Navbar.css";

function Navbar({ currentPage, setCurrentPage }) {
    return ( 
        <nav className="dev-navbar">
            <p className="dev-navbar-title">Developer navigation</p>

            <div className="dev-navbar-links">
                <button
                    className={currentPage === "LoginPage" ? "active" : ""}
                    onClick={() => setCurrentPage("LoginPage")}
                >
                    Login
                </button>

                <button
                    className={currentPage === "Home" ? "active" : ""}
                    onClick={() => setCurrentPage("Home")}
                >
                    Home
                </button>

                 <button
                    className={currentPage === "GameScreen" ? "active" : ""}
                    onClick={() => setCurrentPage("GameScreen")}
                >
                    GameScreen
                </button>
            </div>
        </nav>
    );
}

export default Navbar;