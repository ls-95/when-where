import "./loginpage.css";
import backgroundImage from "./assets/when-where-background-2.png";
import logoImage from "./assets/when-where-logo.png";

function LoginPage() {
    return (
        <main
            className="login-page"
            style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="login-background-overlay"></div>

            <img className="login-logo-image" src={logoImage} alt="When & Where logo"/>


            <section className="login-card">
                <h2 className="login-title">Log in</h2>
                <p className="login-subtitle">Continue with logging in</p>

                <form className="login-form">
                    <div className="login-form-group">
                        <label htmlFor="username">Email or username</label>
                        <input
                            id="username" 
                            type="text"
                            placeholder="Enter email or username" 
                        />
                    </div>

                    <div className="login-form-group">
                        <label htmlFor="password">Password</label>
                        <input 
                            id="password"
                            type="text"
                            placeholder="Enter password" 
                        />
                    </div>
                    
                    <div className="login-options">
                        <label className="login-remember">
                            <input type="checkbox" />
                            Remember me
                        </label>

                        <a href="#">Forgot password?</a>
                    </div>

                    <button className="login-button" type="submit">
                        Login
                    </button>

                    <p className="login-register-text">
                        Don't have an account? <a href="#">Create new account</a>
                    </p>
                </form>

            </section>
        </main>
    )
}

export default LoginPage;