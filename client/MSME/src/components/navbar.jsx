import styles from "../styles/navbar.module.css";
import { emblem, g20, swachh, azadi } from "../assets/";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
    const navigate = useNavigate();

    return (
        <>
            <div className={styles.header}>
                <div className={styles.header_main}>
                    <div className={styles.govttitle}>
                        <h3>भारत सरकार</h3>
                        <h1>GOVERNMENT OF INDIA</h1>
                    </div>
                    <div className={styles.ministrytitle}>
                        <h3>सूक्ष्म , लघु और मध्यम उद्यम मंत्रालय </h3>
                        <h2>
                            MINISTRY OF MICRO, SMALL & MEDIUM ENTERPRISES, GOI
                        </h2>
                    </div>
                </div>
                <div className={styles.images}>
                    <img src={g20} alt="" />
                    <img src={azadi} alt="" />
                    <img src={swachh} alt="" />
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

                <button
                    onClick={() => {
                        navigate("/login");
                    }}
                >
                    Login
                </button>
            </div>
        </>
    );
}
