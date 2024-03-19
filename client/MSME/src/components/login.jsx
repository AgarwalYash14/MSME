import React, { useState } from "react";
import "../styles/login.css";
import { useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function Login() {
    // const [login, setLogin] = useState(false);

    const history = useNavigate();

    const handleSubmit = (e, type) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // User sign-in successful, navigate to "/homepage"
                navigate("/homepage");
            })
            .catch((error) => {
                // Handle any errors during sign-in
                console.error("Error signing in:", error);
                alert(error.code); // Display error code in an alert
            });
    };

    const navigate = useNavigate();

    return (
        <div className="login-container">
            <div className="session">
                <div className="left"></div>
                <form
                    action
                    className="log-in"
                    autoComplete="off"
                    onSubmit={(e) => handleSubmit(e)}
                >
                    <h4>
                        LOGIN TO YOUR <span>ACCOUNT</span>
                    </h4>
                    <div className="floating-label">
                        <input
                            placeholder="Email"
                            type="email"
                            name="email"
                            id="email"
                            autoComplete="off"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <label htmlFor="email">Email:</label>
                        <div className="icon">
                            {/*?xml version="1.0" encoding="UTF-8"?*/}
                            <svg
                                enableBackground="new 0 0 100 100"
                                version="1.1"
                                viewBox="0 0 100 100"
                                xmlSpace="preserve"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <style
                                    type="text/css"
                                    dangerouslySetInnerHTML={{
                                        __html: "\n\t.st0{fill:none;}\n",
                                    }}
                                />
                                <g transform="translate(0 -952.36)">
                                    <path d="m17.5 977c-1.3 0-2.4 1.1-2.4 2.4v45.9c0 1.3 1.1 2.4 2.4 2.4h64.9c1.3 0 2.4-1.1 2.4-2.4v-45.9c0-1.3-1.1-2.4-2.4-2.4h-64.9zm2.4 4.8h60.2v1.2l-30.1 22-30.1-22v-1.2zm0 7l28.7 21c0.8 0.6 2 0.6 2.8 0l28.7-21v34.1h-60.2v-34.1z" />
                                </g>
                                <rect
                                    className="st0"
                                    width={100}
                                    height={100}
                                />
                            </svg>
                        </div>
                    </div>
                    <div className="floating-label">
                        <input
                            placeholder="Password"
                            type="password"
                            name="password"
                            id="password"
                            autoComplete="off"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <label htmlFor="password">Password:</label>
                        <div className="icon">
                            <svg
                                enableBackground="new 0 0 24 24"
                                version="1.1"
                                viewBox="0 0 24 24"
                                xmlSpace="preserve"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <style
                                    type="text/css"
                                    dangerouslySetInnerHTML={{
                                        __html: "\n\t.st0{fill:none;}\n\t.st1{fill:#010101;}\n",
                                    }}
                                />
                                <rect className="st0" width={24} height={24} />
                                <path
                                    className="st1"
                                    d="M19,21H5V9h14V21z M6,20h12V10H6V20z"
                                />
                                <path
                                    className="st1"
                                    d="M16.5,10h-1V7c0-1.9-1.6-3.5-3.5-3.5S8.5,5.1,8.5,7v3h-1V7c0-2.5,2-4.5,4.5-4.5s4.5,2,4.5,4.5V10z"
                                />
                                <path
                                    className="st1"
                                    d="m12 16.5c-0.8 0-1.5-0.7-1.5-1.5s0.7-1.5 1.5-1.5 1.5 0.7 1.5 1.5-0.7 1.5-1.5 1.5zm0-2c-0.3 0-0.5 0.2-0.5 0.5s0.2 0.5 0.5 0.5 0.5-0.2 0.5-0.5-0.2-0.5-0.5-0.5z"
                                />
                            </svg>
                        </div>
                    </div>
                    <button>Login</button>
                    <div
                        className="new-account"
                        onClick={() => {
                            navigate("/signup");
                        }}
                    >
                        <h5>New User? Create an Account</h5>
                    </div>
                </form>
            </div>
        </div>
    );
}
