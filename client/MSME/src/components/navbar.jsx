import React, { useState } from "react";
import styles from "../styles/navbar.module.css";
import { emblem, g20, swachh, azadi } from "../assets/";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const handleLoginClick = () => {
        setIsLoggedIn(true);
        navigate("/login");
    };
    const navigate = useNavigate();

    return (
        <>
            <div className={styles.header}>
                <div className={styles.header_main}>
                    <a href="https://india.gov.in/hi/" target="_blank">
                        <div className={styles.govttitle}>
                            <h3>भारत सरकार</h3>
                            <h1>GOVERNMENT OF INDIA</h1>
                        </div>
                    </a>
                    <div className={styles.ministrytitle}>
                        <h3>सूक्ष्म , लघु और मध्यम उद्यम मंत्रालय </h3>
                        <h2>
                            MINISTRY OF MICRO, SMALL & MEDIUM ENTERPRISES, GOI
                        </h2>
                    </div>
                </div>
                <div className={styles.images}>
                    <a href="https://www.g20.in/en/" target="_blank">
                        <img src={g20} alt="" />
                    </a>
                    <a href="https://merimaatimeradesh.gov.in/" target="_blank">
                        <img src={azadi} alt="" />
                    </a>
                    <a href="https://www.mygov.in/" target="_blank">
                        <img src={swachh} alt="" />
                    </a>
                </div>
            </div>
            <div className={styles.ministry}>
                <div
                    className={styles.ministry_title}
                    onClick={() => {
                        navigate("/");
                    }}
                >
                    <div>
                        <img src={emblem} alt="" />
                    </div>
                    <div>
                        <h1>सूक्ष्म , लघु और मध्यम उद्यम मंत्रालय</h1>
                        <h2>Ministry of</h2>
                        <h3>Micro, small & Medium Enterprises</h3>
                    </div>
                </div>
                {!isLoggedIn && (
                    <button
                        className={styles.login_btn}
                        onClick={handleLoginClick}
                    >
                        Login
                    </button>
                )}
            </div>
            <div className={styles.flag_border}></div>
        </>
    );
}
