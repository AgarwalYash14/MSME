import styles from "../styles/navbar.module.css";

export default function Navbar() {
    return (
        <>
            <div className={styles.header}>
                <div className={styles.govttitle}>
                    <h3>भारत सरकार</h3>
                    <h1>GOVERNMENT OF INDIA</h1>
                </div>
                <div className={styles.ministrytitle}>
                    <h3>सूक्ष्म , लघु और मध्यम उद्यम मंत्रालय </h3>
                    <h2>MINISTRY OF MICRO, SMALL & MEDIUM ENTERPRISES, GOI</h2>
                </div>
            </div>
            <div className={styles.ministry}>
                <h1>सूक्ष्म , लघु और मध्यम उद्यम मंत्रालय</h1>
                <h2>Ministry of</h2>
                <h3>Micro, small & Medium Enterprises</h3>
            </div>
        </>
    );
}
