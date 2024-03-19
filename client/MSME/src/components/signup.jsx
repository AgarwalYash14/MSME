import "../styles/login.css";
import { useNavigate } from "react-router-dom";

export default function Signup() {
    const navigate = useNavigate();
    return (
        <div className="login-container">
            <div className="session">
                <div className="left"></div>
                <form action className="log-in" autoComplete="off">
                    <h4>
                        CREATE YOUR
                        <br />
                        <span>ACCOUNT</span>
                    </h4>
                    <div className="floating-label">
                        <input
                            placeholder="Name"
                            type="text"
                            name="name"
                            id="name"
                            autoComplete="off"
                        />
                        <label htmlFor="name">Name:</label>
                        <div className="icon">
                            {/*?xml version="1.0" encoding="UTF-8"?*/}
                            <svg
                                className="name-svg"
                                fill="#000000"
                                viewBox="0 0 30 30"
                                id="_03_-_Account"
                                data-name="03 - Account"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g
                                    id="SVGRepo_tracerCarrier"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                ></g>
                                <g id="SVGRepo_iconCarrier">
                                    {" "}
                                    <path
                                        id="Path_217"
                                        data-name="Path 217"
                                        d="M16,1a8,8,0,1,0,8,8A8,8,0,0,0,16,1Zm0,2a6,6,0,1,1-6,6A6,6,0,0,1,16,3Z"
                                        transform="translate(-1 -1)"
                                        fill-rule="evenodd"
                                    ></path>{" "}
                                    <path
                                        id="Path_218"
                                        data-name="Path 218"
                                        d="M16,19.2c-5.657,0-10.558,1.175-13,2.82A3.865,3.865,0,0,0,1,25.1a3.865,3.865,0,0,0,2,3.08C5.442,29.825,10.343,31,16,31s10.558-1.175,13-2.82a3.865,3.865,0,0,0,2-3.08,3.865,3.865,0,0,0-2-3.08C26.558,20.375,21.657,19.2,16,19.2Zm0,2a26.973,26.973,0,0,1,10.867,1.909,5.8,5.8,0,0,1,1.694,1.132,1.06,1.06,0,0,1,0,1.718,5.8,5.8,0,0,1-1.694,1.132A26.973,26.973,0,0,1,16,29,26.973,26.973,0,0,1,5.133,27.091a5.8,5.8,0,0,1-1.694-1.132,1.06,1.06,0,0,1,0-1.718,5.8,5.8,0,0,1,1.694-1.132A26.973,26.973,0,0,1,16,21.2Z"
                                        transform="translate(-1 -1)"
                                        fill-rule="evenodd"
                                    ></path>{" "}
                                </g>
                            </svg>
                        </div>
                    </div>
                    <div className="floating-label">
                        <input
                            placeholder="Email"
                            type="email"
                            name="email"
                            id="email"
                            autoComplete="off"
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
                    <button type="submit" onclick="return false;">
                        Create your Account
                    </button>
                    <div
                        className="new-account"
                        onClick={() => {
                            navigate("/login");
                        }}
                    >
                        <h5>Login to your Account</h5>
                    </div>
                </form>
            </div>
        </div>
    );
}
